import React, { useState } from 'react';
import './find.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

export default function Find(){

    const click = (e) => {
        const value = document.querySelector('.find_input').value;
        const hidden = document.querySelector('.find_hidden');
        if(value === "")
        {
            hidden.style.display = "block"; // 일치하지않을경우도 조건식에 추가
        }
        else{
            // 만약 가입된 메일이라면 /confirm 경로로 이동
        }
    }
    return(
        <>
            <Header />
            <div className="find_wrap">
                <div className="find_contentWrap">
                    <img className="find_logo" src="/assets/eslogo.png" alt="로고" />
                    <div className="find_word1">아이디/비밀번호 찾기</div>
                    <div className="find_word2">아이디 비밀번호를 잊으셨습니까?</div>
                    <div className="find_word2">&lt;아래 칸에 이메일을 입력하세요&gt;</div>
                    <div><input className="find_input" type="email" placeholder="이메일을 입력하세요."/></div>
                    <div className="find_hidden">가입되어있지않은 메일입니다. 회원가입하시겠습니까?</div>
                    <div><button onClick={click} className="find_button">다음</button></div>
                    <div className="find_homeLink"><Link to="/" className="find_word3">홈으로 이동</Link></div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}