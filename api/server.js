const fs = require('fs');
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
//비밀번호 암호화
const bcrypt = require('bcrypt');
const saltRounds = 10;

//쿠키 + 세션 관리
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
app.use(express.json());

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}));

 //쿠키 24시간동안 보관
var expiryDate = new Date(Date.now() + 60 * 60 * 1000 * 24);
//세션 활성화
app.use(session({
    key:"userId",
    secret:"subscribe",
    resave:false,
    saveUninitialized: false,
    cookie:{
        expires: expiryDate
    }
}))
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


    //비밀번호 암호화
    bcrypt.hash(password,saltRounds, (err, hash) =>{
        if(err){
            console.log(err)
        }

        db.query(
            "INSERT INTO UserAccountInfo (company_id,company_name,manager,email,password,gender,company_phone_num,manager_phone_num,isActive)"
            +"VALUES (?,?,?,?,?,?,?,?,?)",
            [companyId,companyName,managerName,userEmail,hash,gender,companyNum,managerNum,1],
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
    
})

app.post("/login", (req, res) => {
    const userEmail = req.body.email
    const password = req.body.password
    console.log(userEmail);
    db.query(
        "SELECT * FROM UserAccountInfo WHERE email = ?;",
        userEmail,
        (err, result) => {
            // console.log(err);
            if(err){
                res.send({err:err})
            }

            if(result.length > 0){
                bcrypt.compare(password, result[0].password,(error, response) =>{
                    if(response){
                        //세션 이름을 user로 설정하고 user객체 안에 회원정보(result)를 담음
                        req.session.user = result
                        console.log(req.session.user);
                        res.send(result)
                    }
                    else{
                        res.send({message:"해당 아이디/비밀번호는 존재하지 않습니다."})
                    }
                })
            }else{
                res.send({message:"해당 아이디는 존재하지 않습니다."})
            }
        }
    )
})

app.get("/login",(req,res)=>{
    //user객체가 존재한다면 == 로그인이 되어있다면
    if(req.session.user){
        res.send({loggedIn: true, user: req.session.user})
    }else{
        res.send({loggedIn: false })
    }
})

app.listen(5000, () => console.log(`Listening on port 5000`));
