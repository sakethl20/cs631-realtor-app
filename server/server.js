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

app.get("/login",(req,res)=>{
    console.log(req.body)
    connection.query(
        `SELECT * FROM user WHERE email='${req.body.email}' AND pass='${req.body.password}'`,
        (err, resp) => {
            console.log(resp)
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

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})