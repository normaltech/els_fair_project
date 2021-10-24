const express = require("express");
const app = express();

app.get("/",(req,res)=>{
  res.send("Welcome to homepage");
})

app.listen(8800,()=> {
  console.log("Backend Server Is Running");
})