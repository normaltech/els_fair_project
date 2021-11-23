import React from 'react';
import './withdraw.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Withdraw(){

    const btnWithDraw = () =>{
        axios.get("/withDrawUserAccount").then((res)=>{
            const code = res.data.resultCode;
            const message = res.data.message;
            alert(message)
            if(code == 1) {
                window.location.href="/";
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
            <div className="withdraw_wrap">
                <div className="withdraw_contentWrap">
                    <div className="withdraw_word1">회원 탈퇴</div>
                    <div className="withdraw_word2">탈퇴하시겠습니까?</div>
                    <div className="withdraw_word3">탈퇴하시게 되면 개인정보 및 예약하신 데이터들이 모두 삭제됩니다.</div>
                    <div><button className="withdraw_button withdraw_button1" onClick={btnWithDraw}>탈퇴</button></div>
                    <div><Link to="/userinfo"><button className="withdraw_button">취소</button></Link></div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}