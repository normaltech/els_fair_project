import React from 'react';
import './changebussinessnumber.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

export default function ChangeBussinessNumber(){

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
                    <div><input className="changeBussinessNumber_input" type="text" placeholder="사업자 번호"/></div>
                    <div><Link to="/userinfo"><button className="changeBussinessNumber_button changeBussinessNumber_button1">확인</button></Link></div>
                    <div><Link to="/userinfo"><button className="changeBussinessNumber_button">취소</button></Link></div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}