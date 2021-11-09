import React, { useState } from 'react';
import './confirm.css';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

export default function Confirm(){
    const click = (e) => {
        const value = document.querySelector('.confirm_input').value;
        const hidden = document.querySelector('.confirm_hidden');
        if(value === "")
        {
            hidden.style.display = "block"; // 일치하지않을경우도 조건식에 추가
        }
        else{
            // 만약 인증번호가 맞으면 /changePw 경로로 이동
        }
    }
    return(
        <>
            <div className="confirm_wrap">
                <div className="confirm_contentWrap">
                    <img className="confirm_logo" src="/assets/eslogo.png" alt="로고" />
                    <div className="confirm_word1">인증 번호를 입력하세요</div>
                    <div className="confirm_word2">입력한 메일주소로 이동하여</div>
                    <div className="confirm_word2">인증번호를 확인하여 인증하세요.</div>
                    <div><input className="confirm_input" type="password" placeholder="인증번호 6자리 입력"/></div>
                    <div className="confirm_hidden">잘못된 인증번호입니다. 다시 입력해주세요.</div>
                    <div><button onClick={click} className="confirm_button">인증</button></div>
                    <div className="confirm_homeLink"><Link to="#" className="confirm_word3">인증번호 재전송</Link></div>
                    <div className="confirm_homeLink"><Link to="/" className="confirm_word3">홈으로 이동</Link></div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}