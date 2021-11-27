import React from 'react';
import './changebussinessnumber.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function ChangeBussinessNumber(){
    const btnChangePw = () =>{
        const inputId = document.getElementById("inputId").value;
        if(inputId == ""){
            alert("사업자번호를 입력하세요.")
            return;
        }
        let data = {
            inputCompanyId : inputId
        }
        axios.post("/changeCompanyId",data).then((res)=>{
            const code = res.data.resultCode;
            const message = res.data.message;
            alert(message);
            if(code == 1){
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
            <div className="changeBussinessNumber_wrap">
                <div className="changeBussinessNumber_contentWrap">
                    <div className="changeBussinessNumber_word1">사업자 번호 수정</div>
                    <div><input id="inputId" className="changeBussinessNumber_input" type="number" placeholder="사업자 번호"/></div>
                    <div><button className="changeBussinessNumber_button changeBussinessNumber_button1" onClick={btnChangePw}>확인</button></div>
                    <div><button className="changeBussinessNumber_button">취소</button></div>
                </div>
            </div>
            <Footer />
        </>
    )
}