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
const nodemailer = require("nodemailer");
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

const email_data = fs.readFileSync('./email.json');
const email_conf = JSON.parse(email_data);


const db = mysql.createConnection({
    host : conf.host,
    user:conf.user,
    password:conf.password,
    database:conf.database,
    multipleStatements:true
});
db.connect();

//현재 날짜 가져오기
const time = new Date();
const year = time.getFullYear();

app.get("/hello",(req,res)=>{
    res.send("Welcome to homepage");
})
  
app.get("/test",(req,res)=>{
    console.log(req.session.user);
})
app.get("/logout",(req,res)=>{
    
    if(req.session.user){
        res.send({loggedIn: false})
        
        req.session.destroy(function(){
            req.session;
        });

        console.log('로그아웃 완료')
    }else{
        res.send({loggedIn: false })
        console.log('세션에 로그인 정보가 없음')
    }
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
    // console.log(userEmail);
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
                        // console.log(req.session.user);
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

app.get("/ExhibitionMonthList",(req,res)=>{
    
    db.query("SELECT DISTINCT MONTH(startDate) AS 'month' FROM ExhibitionList ;",(err, data) => {
        // console.log(data)
           if(!err){
               res.send(data);
           }else{
               res.send(err);
           }
        }
    )
})


app.get("/ExhibitionList/:month",(req,res)=>{
    const month = req.params.month;
    db.query("SELECT * FROM ExhibitionList WHERE YEAR(startDate)=? AND MONTH(startDate)=?;",[year,month],
    (err, data) => {
           if(!err){
               res.send(data);
           }else{
               res.send(err);
           }
        }
    )
})

app.get("/getuserinfo", (req, res) => {
    // const email = 'test@test.com';
    const name = '방문자'

    if (req.session.user) {
        res.send(req.session.user);
        //로그인 되었을때 session에 저장된 유저정보 전송
    }

    else {
        // db.query("SELECT * FROM UserAccountInfo WHERE email=?;", [email],
        //     (err, data) => {
        //         if (!err) {
        //             res.send(data);
        //             console.log('데이터전송');
        //             console.log(data);
        //         } else {
        //             res.send(err);
        //         }
        //     }
        // )

        res.send(name);
    }
})

//공지사항 테이블 불러오기
app.get("/getNotice",(req,res)=>{
    db.query("SELECT * FROM NOTICE;",
            (err, data) => {
                if (!err) {
                    res.send(data);
                } else {
                    res.send(err);
                }
            }
        )
})

app.post('/sendEmail', async function (req, res) {
    const user_email = req.body.email;
    console.log(user_email);

    let number = Math.floor(Math.random() * 1000000) + 100000;
    if (number > 1000000) number = number - 100000;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: email_conf.user,
                pass: email_conf.pass
            },
            requireTLS: true,
            secure: false,
            host: 'smtp.gmail.com',
            port: '587'
        });

        const info = await transporter.sendMail({
            from: 'eservate.2021@gmail.com',
            to: user_email,
            subject: 'EserVate 인증번호입니다.',
            text: String(number),
        });

        const checkemail = await new Object();
        checkemail.number = number;

        await res.send(checkemail);

        console.log('메일 전송')
    } catch {
        console.log('오류')
    }
})
//부스 정보 가져오기
app.post("/getBooth",(req,res)=>{
    const exhibitionId = req.body.exhibitionId;
    // const section = req.body.section;
    db.query("SELECT booth_id,section,TYPE,layer,NUMBER,price FROM BoothInfo WHERE exhibition_id=?",exhibitionId,
        (err, result) => {
            if(err){
                console.log(err);
                res.send({err:err})
            }

            if(result.length > 0){
               res.send(result)
            }else{
                res.send({message:"부스가 존재하지 않습니다!"})
            }
        }
    )
})

//예약 기능
app.post("/reservateBooth",(req,res)=>{
    const rvData = req.body
    var reservateList = {
      boothId: rvData.boothId,
      companyId: rvData.companyId,
      eslType: rvData.eslNum.toString(),
      totalPrice: rvData.totalPrice
    }

    console.log(reservateList);
    const pass = rvData.passArray
    // console.log(pass)
    
    //sql구문 두개 이상 한번에 처리
    var sql1 = "INSERT INTO RESERVATION SET ?;";
    var sql1s = mysql.format(sql1, reservateList);

    var sql2 = "INSERT INTO Pass SET ?;";
    var sql2s = "";
    pass.forEach(function(item){
        sql2s += mysql.format(sql2, item);
    });
    console.log(sql2s);

    db.query(sql1s + sql2s, function(err,result){
        if(err){
            console.error(err);
            res.send({resultCd:'E', msg: "예기치 않은 오류가 발생하여 예약에 실패하였습니다."});
            throw err;
          }
      
          if(result[0].affectedRows > 0){
            res.send({resultCd:'S', msg:'정상적으로 예약이 완료되었습니다.'});
            
          }else{
            console.error(result.message);
            res.send({resultCd:'E', msg: "예기치 않은 오류가 발생하여 예약에 실패하였습니다. " + result.message});
          }
    })
})

//세션에서 사용자 정보 가져오기
app.get("/getUserInfoFromSession",(req,res)=>{
    const su = req.session.user[0]
    const userData ={
        companyName : su.company_name,
        companyId : su.company_id,
        managerName : su.manager,
        companyNum : su.company_phone_num,
        managerNum : su.manager_phone_num,
        managerEmail : su.email
    }
    // console.log(userData)
    res.send(userData)
})
app.listen(5000, () => console.log(`Listening on port 5000`));