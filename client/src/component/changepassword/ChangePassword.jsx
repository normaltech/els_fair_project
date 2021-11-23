import React from 'react';
import './changepassword.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ChangePassword(){

    const btnChangePw = () =>{
        const currentPw = document.getElementById("currentPw").value;
        const pw1 = document.getElementById("pw1").value;
        const pw2 = document.getElementById("pw2").value;
        if(pw1 == "" || pw1 == ""){
            alert("비밀번호를 입력하세요.")
            return;
        }
        let data = {
            currentPw : currentPw,
            pw1: pw1,
            pw2:pw2
        }
        axios.post("/changePwFromMyPage",data).then((res)=>{
            console.log(res);
            const code = res.data.resultCode;
            const message = res.data.message;
            alert(message);
            if(code == 3){
                window.location.href="/userinfo"
            }
        })
    }
    
    return(
        <>
            <Header/>
            <div className="userinfoOrReservationlistMenuBar">
                <div className="uorMenuContainer">
                <span className="uorMenu">회원정보</span>
                <span className="uorMenu">예약 내역</span>
                </div>
            </div>
            <div className="changePassword_wrap">
                <div className="changePassword_contentWrap">
                    <div className="changePassword_word1">비밀번호 변경</div>
                    <div><input id="currentPw" className="changePassword_input changePassword_input1" type="password" placeholder="현재 비밀번호 입력"/></div>
                    <div><input id="pw1" className="changePassword_input" type="password" placeholder="새 비밀번호"/></div>
                    <div><input id="pw2" className="changePassword_input" type="password" placeholder="새 비밀번호 확인"/></div>
                    <div><button className="changePassword_button changePassword_button1" onClick={btnChangePw}>확인</button></div>
                    <div><button className="changePassword_button">취소</button></div>
                </div>
            </div>
            {/* <Footer/> */}
        </>
    )
}
