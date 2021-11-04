import React from 'react';
import './changepassword.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

export default function ChangePassword(){

    return(
        <>
            <Header/>
            <div className="userinfoOrReservationlistMenuBar">
                <div className="uorMenuContainer">
                <span className="uorMenu">회원정보</span>
                <span className="uorMenu">예약 내역</span>
                </div>
            </div>
            <div className="changePassword_contentWrap">
                <div className="changePassword_word1">비밀번호 변경</div>
                <div><input className="changePassword_input changePassword_input1" type="password" placeholder="현재 비밀번호 입력"/></div>
                <div><input className="changePassword_input" type="password" placeholder="새 비밀번호"/></div>
                <div><input className="changePassword_input" type="password" placeholder="새 비밀번호 확인"/></div>
                <div><Link to="/userinfo"><button className="changePassword_button changePassword_button1">확인</button></Link></div>
                <div><Link to="/userinfo"><button className="changePassword_button">취소</button></Link></div>
            </div>
            {/* <Footer/> */}
        </>
    )
}