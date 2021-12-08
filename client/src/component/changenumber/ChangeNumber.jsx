import React from 'react';
import './changenumber.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

export default function ChangeNumber(){
    const location = useLocation();
    const name = location.props.name;
    const number = location.props.number;
    const email = location.props.email;

    const btnUpdate = () => {
        const ipName = document.getElementById("manager").value;
        const ipNumber = document.getElementById("phoneNumber").value;
        const ipEmail = document.getElementById("email").value;

        let data = {
            name : ipName,
            phoneNumber : ipNumber,
            email : ipEmail
        }
        axios.post("/api/updateUserData",data).then((res)=>{
            const code = res.data.resultCode;
            const message = res.data.message;
            alert(message)
            if(code == 1){
                window.location.href="/userInfo"
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
            <div className="changeNumber_wrap">
                <div className="changeNumber_contentWrap">
                    <div className="changeNumber_word1">연락처 수정</div>
                    <div><input id="manager" className="changeNumber_input" type="text" placeholder="이름" defaultValue={name}/></div>
                    <div><input id="phoneNumber" className="changeNumber_input" type="text" placeholder="전화번호" defaultValue={number}/></div>
                    <div><input id="email" className="changeNumber_input" type="email" placeholder="메일" defaultValue={email}/></div>
                    <div className="changeNumber_btn_wrap">
                        <div><button className="changeNumber_button changeNumber_button1" onClick={btnUpdate}>확인</button></div>
                        <div><Link to="/userinfo"><button className="changeNumber_button">취소</button></Link></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}