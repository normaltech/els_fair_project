const fs = require('fs');
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const path = require("path");

//비밀번호 암호화
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

//쿠키 + 세션 관리
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const nodemailer = require("nodemailer");

//호스팅 proxy 설정
const {createProxyMiddleware} = require('http-proxy-middleware');

app.use(express.static(path.join(__dirname, "/build")));
app.use(express.json());

app.use(cors());
//proxy말고 createProxyMiddleware써서 클라이언트쪽에서 경로를 /api/~ 로 지정해서 서버의 api를 사용할수있게 지정
module.exports = function(app){
	app.use(
		createProxyMiddleware("/api",{
			target: "http://eservateclient.cafe24app.com",
			changeOrigin: true
		})
	)
}
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));

//쿠키 1시간동안 보관
var expiryDate = new Date(Date.now() + 60 * 60 * 1000 * 1);

//세션 활성화
app.use(session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: expiryDate
    }
}))

//데이터 베이스 연동!
const data = fs.readFileSync(path.join(__dirname, './database.json'));
const conf = JSON.parse(data);

const email_data = fs.readFileSync(path.join(__dirname, './email.json'));
const email_conf = JSON.parse(email_data);


const db = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    database: conf.database,
    multipleStatements: true
});
db.connect();

//현재 날짜 가져오기
const time = new Date();
const year = time.getFullYear();

const crawler = async () => {
    try {
        const browser = await puppeteer.launch({ ignoreHTTPSErrors: true, acceptInsecureCerts: true, args: ['--proxy-bypass-list=*', '--disable-gpu', '--disable-dev-shm-usage', '--disable-setuid-sandbox', '--no-first-run', '--no-sandbox', '--no-zygote', '--single-process', '--ignore-certificate-errors', '--ignore-certificate-errors-spki-list', '--enable-features=NetworkService'] });
        const page = await browser.newPage();
        const eslid = 'develop';
        const eslpassword = 'esl';

        await page.goto('https://192.168.0.11:8443');
        // await page.goto('https://175.194.142.194:8443');

        await page.evaluate((id, pw) => {
            document.querySelector('input[name="userid"]').value = id;
            document.querySelector('input[name="pwd"]').value = pw;
        }, eslid, eslpassword);

        await page.click('a[class="btn"]');
        await page.waitForTimeout(500);

        // if (page.url() === 'https://175.194.142.194:8443/main.jsp') {
        if (page.url() === 'https://192.168.0.11:8443/main.jsp') {    
            console.log('로그인성공!');

            await page.waitForTimeout(300);
            await page.click('#leftcolumn > div > ul:nth-child(2) > li:nth-child(3)');
            await page.waitForTimeout(500);
            await page.click('#btn_tag_status_refresh');
            await page.waitForTimeout(500);

            const content = await page.content();

            let esllist = [];
            const $ = cheerio.load(content);
            const $bodyList = $("table#tag_list tbody").children("tr");

            $bodyList.each(function (i, elem) {
                esllist[i] = {
                    tag_id: $(this).find('td:nth-child(2)').text(),
                    state: $(this).find('td:nth-child(5) > span').text(),
                    battery: $(this).find('td:nth-child(6)').text(),
                    company_id: $(this).find('td:nth-child(15)').text(),
                    company_name: $(this).find('td:nth-child(16)').text()
                };
            });
            return esllist;
        }
        else console.log(page.url());

        await browser.close();
    } catch (e) {
        console.error(e);
    }
}

// crawler();

//ftp관리
const ftp = require("basic-ftp");
function jsonToCSV(json_data) {
    const json_array = json_data;
    let csv_string = '';
    const titles = Object.keys(json_array[0]);

    titles.forEach((title, index) => { csv_string += (index !== titles.length - 1 ? `${title},` : `${title}\r\n`); });

    json_array.forEach((content, index) => {
        let = row = '';
        for (let title in content) {
            row += (row === '' ? `${content[title]}` : `,${content[title]}`);
        }
        csv_string += (index !== json_array.length - 1 ? `${row}\r\n` : `${row}`);
    })

    return csv_string;
}
app.get("/api/hello", (req, res) => {
    res.send("Welcome to homepage");
})

app.get("/api/test", (req, res) => {
    console.log(req.session.user);
})
app.get("/api/logout", (req, res) => {

    if (req.session.user) {
        res.send({ loggedIn: false })

        req.session.destroy(function () {
            req.session;
        });

        console.log('로그아웃 완료')
    } else {
        res.send({ loggedIn: false })
        console.log('세션에 로그인 정보가 없음')
    }
})
app.post("/api/register", (req, res) => {
    const userEmail = req.body.email
    const password = req.body.password
    const managerName = req.body.name
    const gender = req.body.gender
    const managerNum = req.body.managerNum
    const companyName = req.body.companyName
    const companyId = req.body.companyId
    const companyNum = req.body.companyNum


    //비밀번호 암호화
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err)
        }

        db.query(
            "INSERT INTO UserAccountInfo (company_id,company_name,manager,email,password,url,company_phone_num,manager_phone_num,isActive)"
            + "VALUES (?,?,?,?,?,?,?,?,?)",
            [companyId, companyName, managerName, userEmail, hash, gender, companyNum, managerNum, 1],
            (err, result) => {

                if (err) {
                    console.log(err);
                    res.send({ message: "회원가입 실패" })
                }

                if (result) {
                    res.send(result)
                } else {
                    res.send({ message: "회원가입 실패" })
                }
            }
        )
    })

})

app.post("/api/login", (req, res) => {
    const userEmail = req.body.email
    const password = req.body.password
    // console.log(userEmail);
    const sql1 = "SELECT isActive FROM UserAccountInfo WHERE email = ?;";
    var sql1s = mysql.format(sql1, userEmail);
    const sql2 = "SELECT * FROM UserAccountInfo WHERE email = ?;";
    var sql2s = mysql.format(sql2, userEmail);

    db.query(sql1s+sql2s, function(err,result){
        var result0 = Object.values(JSON.parse(JSON.stringify(result[0])))
        var result1 = Object.values(JSON.parse(JSON.stringify(result[1])))
        // console.log(result1[0]);
        if(result0[0].isActive == 1){
            if (result1[0]) {
                bcrypt.compare(password, result1[0].password, (error, response) => {
                    if (response) {
                        //세션 이름을 user로 설정하고 user객체 안에 회원정보(result)를 담음
                        req.session.user = result1[0]
                        // console.log(req.session.user);
                        res.send({resultCode:0,message:"로그인 성공"})
                    }
                    else {
                        res.send({resultCode:1, message: "해당 아이디/비밀번호는 존재하지 않습니다." })
                    }
                })
            } else {
                res.send({resultCode:1, message: "해당 아이디는 존재하지 않습니다." })
            }
        }else{
            res.send({resultCode:1,message:"비활성화 되어있는 계정입니다."})
        }
    })
    // db.query(
    //     "SELECT * FROM UserAccountInfo WHERE email = ?;",
    //     userEmail,
    //     (err, result) => {
    //         // console.log(err);
    //         if (err) {
    //             res.send({ err: err })
    //         }

    //         if (result.length > 0) {
    //             bcrypt.compare(password, result[0].password, (error, response) => {
    //                 if (response) {
    //                     //세션 이름을 user로 설정하고 user객체 안에 회원정보(result)를 담음

    //                     req.session.user = result
    //                     // console.log(req.session.user);
    //                     res.send(result)
    //                 }
    //                 else {
    //                     res.send({ message: "해당 아이디/비밀번호는 존재하지 않습니다." })
    //                 }
    //             })
    //         } else {
    //             res.send({ message: "해당 아이디는 존재하지 않습니다." })
    //         }
    //     }
    // )
})

app.get("/api/login", (req, res) => {
    //user객체가 존재한다면 == 로그인이 되어있다면
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user })
    } else {
        res.send({ loggedIn: false })
    }
})

app.get("/api/ExhibitionMonthList", (req, res) => {

    db.query("SELECT DISTINCT MONTH(startDate) AS 'month' FROM ExhibitionList ;", (err, data) => {
        // console.log(data)
        if (!err) {
            res.send(data);
        } else {
            res.send(err);
        }
    }
    )
})


app.get("/api/ExhibitionList/:month", (req, res) => {
    const month = req.params.month;
    db.query("SELECT * FROM ExhibitionList WHERE YEAR(startDate)=? AND MONTH(startDate)=?;", [year, month],
        (err, data) => {
            if (!err) {
                res.send(data);
            } else {
                res.send(err);
            }
        }
    )
})

app.get("/api/getuserinfo", (req, res) => {
    // const email = 'test@test.com';
    const name = '방문자'

    if (req.session.user) {
        res.send(req.session.user);
        //로그인 되었을때 session에 저장된 유저정보 전송
    }

    else {
        res.send(name);
    }
})

//공지사항 테이블 불러오기
app.get("/api/getNotice", (req, res) => {
    db.query("SELECT * FROM NOTICE ORDER BY id ASC;",
        (err, data) => {
            if (!err) {
                res.send(data);
            } else {
                res.send(err);
            }
        }
    )
})

app.get("/api/getManagerBooth", (req, res) => {
    db.query("SELECT CONCAT(b.section, '-', b.`type`,b.layer, '0', b.number) AS Bname, b.`type`, (SELECT company_name FROM UserAccountInfo WHERE company_id = b.company_id) AS Cname, (SELECT company_name FROM UserAccountInfo WHERE company_id = b.company_id) AS ESL, b.price FROM BoothInfo as b ORDER BY Bname;",
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
    // console.log("email:"+user_email);

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
    } catch(err) {
        console.error(err)
        console.log('오류')
    }
})
//부스 정보 가져오기
app.post("/api/getBooth", (req, res) => {
    const exhibitionId = req.body.exhibitionId;
    // const section = req.body.section;
    db.query("SELECT isReserved, booth_id,section,TYPE,layer,NUMBER,price FROM BoothInfo WHERE exhibition_id=?", exhibitionId,
        (err, result) => {
            if (err) {
                console.log(err);
                res.send({ err: err })
            }

            if (result.length > 0) {
                res.send(result)
            } else {
                res.send({ message: "부스가 존재하지 않습니다!" })
            }
        }
    )
})

//예약 기능
app.post("/api/reservateBooth", (req, res) => {
    const rvData = req.body
    var reservateList = {
        boothId: rvData.boothId,
        companyId: rvData.companyId,
        eslType: rvData.eslNum.toString(),
        totalPrice: rvData.totalPrice
    }

    // console.log(reservateList);
    const pass = rvData.passArray;
    const esl = rvData.eslurl;
    const product = rvData.eslproduct;

    //sql구문 두개 이상 한번에 처리
    var sql1 = "INSERT INTO RESERVATION SET ?;";
    var sql1s = mysql.format(sql1, reservateList);

    var sql2 = "INSERT INTO Pass SET ?;";
    var sql2s = "";
    pass.forEach(function (item) {
        sql2s += mysql.format(sql2, item);
    });

    var sql3 = "UPDATE BoothInfo SET company_id = ?,isReserved=1 WHERE booth_id=?;";
    var sql3s = mysql.format(sql3,[rvData.companyId,rvData.boothId]);

    var sql4 = "UPDATE UserAccountInfo SET ? WHERE company_id = ?;";
    var sql4s = "";
    esl.forEach(function (item) {
        sql4s += mysql.format(sql4, [item,rvData.companyId]);
    });

    var sql5 = "INSERT INTO Product SET company_id = ?, ?;";
    var sql5s = "";
    product.forEach(function (item) {
        sql5s += mysql.format(sql5, [rvData.companyId,item]);
    });


    // console.log(sql4s);

    db.query(sql1s + sql2s + sql3s + sql4s + sql5s, function (err, result) {
        if (err) {
            console.error(err);
            res.send({ resultCd: 'E', msg: "예기치 않은 오류가 발생하여 예약에 실패하였습니다." });
            throw err;
        }

        if (result[0].affectedRows > 0&& result[2].affectedRows > 0) {
            res.send({ resultCd: 'S', msg: '정상적으로 예약이 완료되었습니다.' });
        } else {
            console.error(result.message);
            res.send({ resultCd: 'E', msg: "예기치 않은 오류가 발생하여 예약에 실패하였습니다. " + result.message });
        }
    })
})

//세션에서 사용자 정보 가져오기
app.get("/api/getUserInfoFromSession", (req, res) => {
    const su = req.session.user
    const userData = {
        companyName: su.company_name,
        companyId: su.company_id,
        managerName: su.manager,
        companyNum: su.company_phone_num,
        managerNum: su.manager_phone_num,
        managerEmail: su.email
    }
    // console.log(userData)
    res.send(userData)
})

//세션에서 사용자 정보 가져오기
app.post("/api/getCompanyIdByEmail",(req,res)=>{
    // console.log(req.body)
    const email = req.body.email;
    db.query("SELECT company_id from UserAccountInfo WHERE EMAIL = ?;",email,
    (err,result)=>{
        if(err) console.log("회사id찾기 오류:"+err)
        if(result){
            // console.log(result[0].company_id);
            res.send({companyId:result[0].company_id});
        }
    })
})

//이메일 중복 확인
app.post("/api/checkEmail",(req,res)=>{
    const email = req.body.email
    // console.log(email)
    db.query("SELECT EXISTS (SELECT company_id FROM UserAccountInfo WHERE EMAIL=?) AS exist;",email,(err,result)=>{
        if(err) console.log(err)
        //중복된 이메일이 있으면 1 반환
        // console.log(result[0].exist)
        if(result){
            if(result[0].exist==1){
                res.send({message:"존재하는 이메일입니다!",flag:1})
            }else{
                res.send({message:"사용가능한 이메일입니다!",flag:0})
            }
        }
        else{
            
        }
    })
})
app.post("/api/changePwFromMyPage",(req,res)=>{
    const currentPw = req.body.currentPw;
    const pw1 = req.body.pw1;
    const pw2 = req.body.pw2;
    const currentId = req.session.user.company_id;
    // console.log(currentPw+"<->"+req.session.user.password)

    bcrypt.compare(currentPw, req.session.user.password, (error, response) => {
        // console.log(response);
        if (!response) {
           res.send({resultCode:1,message:"현재 비밀번호를 확인해주세요."})
        }
        else if(pw1 != pw2) res.send({resultCode:2,message:"비밀번호가 일치하지 않습니다."})
        else{
            bcrypt.hash(pw1,saltRounds, (err, hash) =>{
                if(err)console.log(err)
                db.query("UPDATE UserAccountInfo SET PASSWORD=? WHERE company_id = ?;",[hash,currentId],
                    (err, result) => {
                        if(err) console.log(err);
                        if(result){
                            res.send({resultCode:3,message:"비밀번호 변경 성공!"})
                        }else{
                            res.send({resultCode:4,message:"비밀번호 변경 실패!"})
                        }
                    }
                )
            })
            
        }
    })
    
})
app.post("/api/changePassword",(req,res)=>{
    // console.log(req.body)
    const companyId = req.body.companyId;
    const newPw = req.body.newPassword;
    bcrypt.hash(newPw,saltRounds, (err, hash) =>{
        if(err){
            console.log(err)
        }

        db.query("UPDATE UserAccountInfo SET PASSWORD=? WHERE company_id = ?;",[hash,companyId],
            (err, result) => {
                
                if(err) console.log(err);
                
                if(result){
                    res.send(result)
                }else{
                    res.send({message:"비밀번호 변경 실패!"})
                }
            }
        )
    })
})

app.post("/api/changeCompanyId",(req,res)=>{
    const inputCompanyId = req.body.inputCompanyId;
    db.query("UPDATE UserAccountInfo SET company_id = ? WHERE company_id = ?",[inputCompanyId,req.session.user.company_id]
    ,(err,result)=>{
        // console.log(result);
        if(err) res.send({resultCode:0,message:"사업자 번호 수정 실패"})
        if(result){
            req.session.user.company_id = inputCompanyId;
            res.send({resultCode:1,message:"사업자 번호 수정 완료"})
        }else{
            res.send({resultCode:0,message:"사업자 번호 수정 실패"})
        }
    })
})

app.post("/api/updateUserData",(req,res)=>{
    const name = req.body.name;
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;
    // console.log(name+"-"+phoneNumber+"-"+email)
    db.query("UPDATE UserAccountInfo SET manager =? , manager_phone_num =? , email =? WHERE company_id=?;",
    [name,phoneNumber,email,req.session.user.company_id],(err,result)=>{
        if(err) res.send({resultCode:0,message:"에러"}) 
        if(result){
            req.session.user.manager = name;
            req.session.user.manager_phone_num = phoneNumber;
            req.session.user.email = email;
                res.send({resultCode:1,message:"연락처를 성공적으로 수정하였습니다."})
        }
    })
})
app.get("/api/withDrawUserAccount",(req,res)=>{
    db.query("UPDATE UserAccountInfo SET isActive = 0 WHERE company_id=?;",req.session.user.company_id,
    (err,result)=>{
        if(err) res.send({resultCode:0,message:err})
        if(result){
            //세션에서 user 정보 제거 = 로그아웃
            req.session.destroy(function () {
                req.session;
            });
            res.send({resultCode:1,message:"탈퇴완료되었습니다."})
        }
    })
})
app.post("/api/adminLogin",(req,res)=>{
    const id = req.body.id;
    const pw = req.body.pw;
    db.query("SELECT COUNT(*) AS exist FROM AdminAccount WHERE adminId = ? AND PASSWORD =?;",[id,pw],(err,result)=>{
        if(err) {
            console.log(err);
            res.send({resultCode:'E',message:"에러났어요!",error:err});
        }
        if(result){
            if(result[0].exist){
                res.send({resultCode:'S',message:"로그인 성공!"});
            }else{
                res.send({resultCode:'E',message:"로그인 실패!"});
            }
        }else {
            res.send({resultCode:'E',message:"데이터 베이스 에러"});
        }
    })
})

app.get("/api/getAllUserData",(req,res)=>{
    db.query("SELECT * FROM UserAccountInfo",(err,result)=>{
        if(result.length > 0){
            // console.log(result);
            res.send(result);
        }
    })
})
app.get("/api/getBoothIdByCompanyId/:company_id",(req,res)=>{
    const companyId = req.params.company_id;
    db.query("SELECT booth_id FROM BoothInfo WHERE company_id=?;",companyId,(err,result)=>{
        if(result.length > 0){
            // console.log(result);
            res.send(result);
        }
    })
})
app.get("/api/getCompanyCount",(req,res)=>{
    db.query("SELECT COUNT(*) as num FROM UserAccountInfo;",(err,result)=>{
        if(result){
            if(result.length>0){
                // console.log(result[0]);
                res.send(result[0]);
            }
        }
    })
})
app.get("/api/getCompanyMemberCount/:companyId",(req,res)=>{
    const companyId = req.params.companyId;
    db.query("SELECT COUNT(*) AS member FROM Pass WHERE companyId = ?;",companyId,(err,result)=>{
        if(result){
            if(result.length>0){
                // console.log(result[0]);
                res.send(result[0]);
            }
        }
    })
})

app.get("/api/getCompanyInfoById/:companyId",(req,res)=>{
    const companyId = req.params.companyId;
    db.query("SELECT * FROM UserAccountInfo WHERE company_id = ?;",companyId,(err,result)=>{
        if(result){
            if(result.length>0){
                // console.log(result[0]);
                res.send(result[0]);
            }
        }
    })
})

app.post("/api/unActivateAccountById",(req,res)=>{
    const companyId = req.body.companyId;
    db.query("UPDATE UserAccountInfo SET isActive = 0 WHERE company_id=?;",companyId,(err,result)=>{
        if(result){
            // console.log(result);
            res.send(result);
        }
    })
})
app.post("/api/updateUserInfo",(req,res)=>{
       var manager = req.body.manager;
       var manager_phone_num = req.body.phoneNum;
       var email = req.body.email;
       var company_name = req.body.companyName;
       var company_phone_num = req.body.companyNum;
       var company_id = req.body.companyId;
       var isActive = req.body.isActive;
    db.query("UPDATE UserAccountInfo SET manager=?,manager_phone_num=?, email=?, company_name=?, company_phone_num=?,company_id=?,isActive = ? WHERE company_id=?;",
    [manager,manager_phone_num,email,company_name,company_phone_num,company_id,isActive,company_id],(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        if(result){
            res.send(result);
        }
    })
})
app.get("/api/getSearchData",(req,res)=>{
    db.query("SET @num:=0;SELECT @num:=@num+1 AS id, CONCAT(b.section, '_',b.type,'_', b.layer,'0', b.number) AS boothname, company_name  FROM UserAccountInfo AS u JOIN BoothInfo AS b  ON u.company_id = b.company_id WHERE (@num:=0)=0;",
    (err,result)=>{
        if(result){
            if(result.length>0){
                // console.log(result[1]);
                res.send(result)
            }
        }
    })
})
//회사 부스예약 정보
app.get("/api/companyList", (req, res) => {
    db.query("SELECT company_id AS id, company_name, (SELECT COUNT(NAME) FROM Pass WHERE companyId = u.company_id) AS personnel, (SELECT CONCAT(b.section, '-', b.`type`,b.layer, '0', b.number) FROM BoothInfo AS b WHERE company_id = u.company_id) AS booth FROM UserAccountInfo AS u;",
        (err, data) => {
            if (!err) {
                res.send(data);
            } else {
                console.log(err);
            }
        }
    )
})

//관리자 부스관리page 예약자정보
app.post("/api/getmanagerInfo", (req, res) => {
    
    const textquery = req.body.c_conpany;
    
    db.query("SELECT company_name, company_id, company_phone_num, manager, email, (SELECT COUNT(name) FROM Pass WHERE companyId = u.company_id) AS personnel FROM UserAccountInfo AS u WHERE company_name = ?;", textquery,
        (err, data) => {
            if (!err) res.send(data);
            else console.log(err);
        }
    )
})

//관리자 부스관리page 부스정보
app.post("/api/getboothInfo", (req, res) => {
    const textquery = req.body.c_booth;

    db.query("SELECT CONCAT(section, '-', `type`,layer, '0', number) AS bname, section, type, layer FROM BoothInfo WHERE CONCAT(section, '-', `type`,layer, '0', NUMBER) = ?;", textquery,
        (err, data) => {
            if(!err)res.send(data);
            else console.log(err);
        }
    )
})

//esl ftp연결함수
async function example() {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        await client.access({
            // host: "175.194.142.194",
            host: "192.168.0.11",
            user: "cgESLUser",
            password: "cgESLPassword",
            port : "2121",
            secure: false
        })
        await client.cd("/Import")
        // console.log(await client.list())
        console.log("성공")
        await client.uploadFrom("./esl_csvfile/import_20211127123456.csv", "import_20211127123456.csv");
    }
    catch (err) {
        console.log(err)
        console.log('에러')
    }
    client.close()
}

//esl 정보 가져오기 및 ftp연결
app.get("/api/eslinfo", (req, res) => {
    db.query("SELECT company_id AS eslid, company_name, manager AS name, manager_phone_num AS tel, email AS address, url AS page, (SELECT product_name FROM Product WHERE UserAccountInfo.company_id = Product.company_id GROUP BY Product.company_id) AS product_name, (SELECT product_price FROM Product WHERE UserAccountInfo.company_id = Product.company_id GROUP BY Product.company_id) AS product_price, (SELECT CONCAT(section, '-', `type`,layer, '0', NUMBER) FROM BoothInfo WHERE UserAccountInfo.company_id = BoothInfo.company_id) AS booth FROM UserAccountInfo;",
        (err, data) => {
            if (!err) {
                const csv_test = jsonToCSV(data);
                fs.writeFileSync('./esl_csvfile/import_20211127123456.csv', csv_test);

                // example();
            } else {
                console.log(err);
            }
        }
    )
})

//크롤링 해서 esl 정보 가져오기
app.get("/api/esl_crawler", (req, res) => {
    
    try {
        crawler().then((data) => {
            res.send(data);
        });
    } catch (err) {
        console.log(err)
        console.log('에러')
    }
})

app.get("/api/getNoticeContent/:id",(req,res)=>{
    const noticeId = req.params.id;
    db.query("SELECT notices FROM NOTICE WHERE id=?",noticeId,(err,result)=>{
        if(result){
            res.send(result);
        }
    })
})

app.get("/api/checkIfUserReserved",(req,res)=>{
    const companyId = req.session.user.company_id;
    db.query("SELECT COUNT(*) AS COUNT FROM RESERVATION WHERE companyId = ?;",companyId,(err,result)=>{
        if(result){
            // console.log(result)
            res.send(result)
        }else{
            res.send({err:err})
        }
    })
})

//공지사항 수정
app.post("/api/notices_change", (req, res) => {
    const n_title = req.body.n_title;
    const n_text = req.body.n_text;
    const id = req.body.id;

    db.query("UPDATE NOTICE SET title = ?, notices = ? WHERE id = ?;",
        [n_title, n_text, id]
    );
})

//공지사항 삭제
app.post("/api/notices_delete", (req, res) => {
    const id = req.body.id;

    db.query("DELETE FROM NOTICE WHERE id = ?;", id);
})

//공지사항 추가
app.post("/api/insert_notice", (req, res) => {
    const n_title = req.body.user.title;
    const n_text = req.body.user.content;
    const exhibition = req.body.user.exhibition;
    const today = new Date();

    db.query("SELECT MAX(id) as id FROM NOTICE;", (err, result) => {
        if (result) {
            const maxid = result[0].id + 1;
            db.query("INSERT INTO NOTICE (id, exhibition, title, notices, date) VALUE (?, ?, ? ,?, ?);", 
                [maxid, exhibition, n_title, n_text, today]
            );
        }
        else console.log(err);
    })

    // db.query("INSERT INTO NOTICE (id, exhibition, title, notices, date) VALUE (?, ?, ? ,?, ?);", 
    //     [maxID, exhibition, n_title, n_text, today]
    // );
})

//부스예약초기화
app.post("/api/delete_booth", (req, res) => {
    const Cname = req.body.Mname;

    db.query("SELECT company_id FROM UserAccountInfo WHERE company_name = ?;", Cname, (err, result) => {
        if (result) {
            const id = result[0].company_id;

            var sql1 = "DELETE FROM Product WHERE company_id = ?;";
            var sql1s = mysql.format(sql1, id);

            var sql2 = "DELETE FROM Pass WHERE companyId = ?;";
            var sql2s = mysql.format(sql2, id);

            var sql3 = "DELETE FROM RESERVATION WHERE companyId = ?;";
            var sql3s = mysql.format(sql3, id);

            var sql4 = "UPDATE BoothInfo SET company_id = 0, isReserved = 0 WHERE company_id = ?;";
            var sql4s = mysql.format(sql4, id);

            db.query(sql1s + sql2s + sql3s + sql4s, function (err, result) {
                if (err) {
                    console.error(err);
                }
            })

        }
        else console.log(err);
    })
})

//예약 리스트 가져오기
app.get("/api/getReservedList",(req,res)=>{
    const companyId = req.session.user.company_id;
    db.query(
    "SELECT b.section, SUBSTRING(b.TYPE,1,1) AS TYPE, e.startDate AS date, e.name "+
    "FROM BoothInfo b, ExhibitionList e "+
    "WHERE b.booth_id = (SELECT boothId FROM RESERVATION WHERE companyId = ?) "+
    "AND e.id = (SELECT exhibitionId FROM RESERVATION WHERE companyId = ?);",
    [companyId,companyId],
    (err,result)=>{
        if(err){
            console.log(err);
        }
        if(result){
            res.send(result);
        }
    })
})


app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "/build/index.html"));
});
app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "/build/index.html"));
});

app.listen(8001, () => console.log(`Listening on port 8001`));