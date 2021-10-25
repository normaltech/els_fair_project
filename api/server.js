const fs = require('fs');
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

app.use(express.json());
app.use(cors());

//데이터 베이스 연동!
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);

const db = mysql.createConnection({
    host : conf.host,
    user:conf.user,
    password:conf.password,
    database:conf.database
});
db.connect();

app.get("/hello",(req,res)=>{
    res.send("Welcome to homepage");
})
  

app.post("/register",(req,res)=>{
    const userEmail = req.body.email
    const password = req.body.password
    const managerName = req.body.name
    const gender = req.body.gender
    const managerNum = req.body.managerNum
    const companyName = req.body.companyName
    const companyId = req.body.companyId
    const companyNum = req.body.companyNum

    db.query(
        "INSERT INTO UserAccountInfo (company_id,company_name,manager,email,password,gender,company_phone_num,manager_phone_num,isActive)"
        +"VALUES (?,?,?,?,?,?,?,?,?)",
        [companyId,companyName,managerName,userEmail,password,gender,companyNum,managerNum,1],
        (err, result) => {
            
            if(err) console.log(err);
            
            if(result){
                res.send(result)
            }else{
                res.send({message:"회원가입 실패"})
            }
        }
    )
})

app.post("/login", (req, res) => {
    const userEmail = req.body.email
    const password = req.body.password

    db.query(
        "SELECT * FROM UserAccountInfo WHERE email = ? AND password = ?",
        [userEmail,password],
        (err, result) => {
            if(err){
                res.send({err:err})
            }

            if(result){
                res.send(result)
            }else{
                res.send({message:"해당 아이디/비밀번호는 존재하지 않습니다."})
            }
        }
    )
})


app.listen(5000, () => console.log(`Listening on port 5000`));
