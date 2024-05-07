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


app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})