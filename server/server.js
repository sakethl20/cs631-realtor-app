import express from "express";
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/ping",(req, res)=>{
    res.status(201).send("pong");
})

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})