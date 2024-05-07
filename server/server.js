import express from "express";
import mysql from "mysql2";
import "dotenv/config.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3001;

let connection = mysql.createConnection(
    {
      multipleStatements: true,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.PASS,
      database: process.env.DB_DB,
      port: process.env.DB_PORT
    }
  );

connection.connect((err) => {
    if(err)
        console.log(err)
    else
        console.log("Database Connection Established")
    }
)

app.get("/ping",(req, res)=>{
    res.status(201).send("pong");
})


//Pass in: email;password
app.get("/login",(req,res)=>{

    connection.query(
        `SELECT * FROM user WHERE email='${req.body.email}' AND pass='${req.body.password}'`,
        (err, resp) => {
            if (err) {
                console.error("Database error:", err);
                return
            }
            if (resp.length === 0)
                res.status(404).send({auth:false})
            else
                res.status(200).send({auth:true, user:resp})
        })

})


//Pass in: Address; user email; agent email; price
app.get("/addListing",(req,res)=>{
    connection.query(`SELECT * FROM UNIT where address='${req.body.address}'`,(err,resp)=>{
        if (err) {
            console.error("Database error:", err);
            return
        }

        if (resp.length === 0)
            res.status(404).send({status:false, message: "Unit isn't in our database"})        
        else{
            let unitID=resp[0].unit_id;
            connection.query(`SELECT * FROM LISTING L, UNIT U where address='${req.body.address}' and L.unit_id=U.unit_id and end_date IS NULL`,(err,resp)=>{
                if (err) {
                    console.error("Database error:", err);
                    return
                }
                if(resp.length===0)
                    connection.query(`INSERT INTO LISTING (unit_id, list_date, agent_email, user_email, price) VALUES (${unitID},NOW(),'${req.body.agent_email}','${req.body.user_email}',${req.body.price})`,(err, resp)=>{
                        if (err) {
                            console.error("Database error:", err);
                            return
                        }
                        res.status(200).send({status:true})
                    })
                else
                    res.status(404).send({status:false, message: "Active listing for this address exists"})
            })
        }
    })
})

//Pass in: Address
app.get("/removeListing",(req,res)=>{
    connection.query(`SELECT * FROM LISTING L, UNIT U where address='${req.body.address}' and L.unit_id=U.unit_id and end_date IS NULL`,(err,resp)=>{
        if (err) {
            console.error("Database error:", err);
            return
        }

        if (resp.length === 0)
            res.status(404).send({status:false,message:'No active listing for this address'})
        else
            connection.query(`UPDATE listing SET end_date=NOW() WHERE end_date IS NULL and unit_id='${resp[0].unit_id}'`,(err,resp)=>{
                if (err) {
                    console.error("Database error:", err);
                    return
                }
                res.status(200).send({status:true})
            })
    })
})

//Pass in: User email
app.get("/getListings",(req,res)=>{
    connection.query(`SELECT * FROM listing WHERE user_email='${req.body.email}'`,(err,resp)=>{
        if (err) {
            console.error("Database error:", err);
            return
        }
        res.status(200).send(resp)
    })
})

//Pass in: Unit ID, Listing Date
app.get("/getViewingSeller",(req,res)=>{
    connection.query(`SELECT * FROM viewing WHERE unit_id=${req.body.unitID} and list_date=${req.body.listDate}`,(err,resp)=>{
        if (err) {
            console.error("Database error:", err);
            return
        }
        res.status(200).send(resp)
    })
})

//Pass in: User Email
app.get("/getViewingUser",(req,res)=>{
    connection.query(`SELECT * FROM viewing WHERE user_email='${req.body.email}'`,(err,resp)=>{
        if (err) {
            console.error("Database error:", err);
            return
        }
        res.status(200).send(resp)
    })
})

//Pass In: All fields of offer
app.get("/addOffer",(req,res)=>{
    let queryString=`user_email='${req.body.Uemail}' and agent_email='${req.body.Aemail}' and unit_id=${req.body.unitID} and list_date='${req.body.listDate}'`
    connection.query(`SELECT * FROM offer where ${queryString} and status="pending"`,(err,resp)=>{
        if (err) {
            console.error("Database error:", err);
            return
        }

        if (resp.length !== 0)
            connection.query(`UPDATE offer SET status="rejected" WHERE ${queryString} and status="pending"`,(err,resp)=>{
                if (err) {
                    console.error("Database error:", err);
                    return
                }
        })
        connection.query(`INSERT INTO offer (user_email, agent_email, unit_id, list_date, offer_amount, fee_amount, status) VALUES ('${req.body.Uemail}','${req.body.Aemail}',${req.body.unitID}, '${req.body.listDate}', ${req.body.offer},${req.body.fee}, 'pending')`,(err,resp)=>{
            if (err) {
                console.error("Database error:", err);
                return
            }
            res.status(200).send(resp)
        })
    })
})

app.get('/getOffer',(req,res)=>{
    connection.query(`SELECT * FROM offer WHERE unit_id=${req.body.unitID} and list_date='${req.body.listDate}' and status="pending"`,(err,resp)=>{
        if (err) {
            console.error("Database error:", err);
            return
        }
        res.status(200).send(resp)
    })
})

//Pass in: Time for viewing, user email, list_date, unit_id
app.get('/bookViewing',(req,res)=>{
    connection.query(`SELECT agent_email FROM listing WHERE unit_id=${req.body.unitID} AND list_date='${req.body.listDate}'`,(err,resp)=>{
        if (err) {
            console.error("Database error:", err);
            return
        }
        let agent=resp[0].agent_email
        //Get all viewings from active listings for a given agent, and check if any overlap with the viewing period
        //(if start if new time is more than the previous closest and end of this time is less than next closest)
        connection.query(`SELECT V.* FROM listing L, viewing V 
                          WHERE agent_email='${agent}' AND L.unit_id=V.unit_id AND L.list_date=V.list_date AND L.end_date IS NULL AND 
                          (DATE_ADD(V.time, INTERVAL 2 HOUR) > '${req.body.time}' AND V.time < DATE_ADD('${req.body.time}', INTERVAL 2 HOUR) )`
                          ,(err,resp)=>{
                            if (err) {
                                console.error("Database error:", err);
                                return
                            }
                            if(resp.length===0)
                                connection.query(`SELECT * FROM viewing WHERE user_email='${req.body.Uemail}' AND
                                (DATE_ADD(time, INTERVAL 2 HOUR) > '${req.body.time}' AND time < DATE_ADD('${req.body.time}', INTERVAL 2 HOUR) )`
                                ,(err,resp)=>{
                                    if (err) {
                                        console.error("Database error:", err);
                                        return
                                    }
                                    if(resp.length===0)
                                        connection.query(`INSERT INTO viewing(user_email, unit_id, list_date, time) VALUES 
                                        ('${req.body.Uemail}', ${req.body.unitID},'${req.body.listDate}', '${req.body.time}')`
                                        ,(err,resp)=>{
                                            if (err) {
                                                console.error("Database error:", err);
                                                return
                                            }
                                            res.status(200).send({status:true})
                                        })

                                    else
                                        res.status(404).send({status:false, message:"Conflicting time with user"})              
                                })
                            else
                                res.status(404).send({status:false, message:"Conflicting time with agent"})
        })
    })
})

app.get('/getAgents',(req,res)=>{
    connection.query(`SELECT * FROM agent A, agent_buyer AB WHERE user_email='${req.body.email}' AND A.email=AB.agent_email`,(err,resp)=>{
        if (err) {
            console.error("Database error:", err);
            return
        }
        res.status(200).send(resp)
    })
})

app.get('/getClients',(req,res)=>{
    connection.query(`SELECT * FROM user U, agent_buyer AB WHERE agent_email='${req.body.email}' AND U.email=AB.user_email`,(err,resp)=>{
        if (err) {
            console.error("Database error:", err);
            return
        }
        res.status(200).send(resp)
    })
})

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})