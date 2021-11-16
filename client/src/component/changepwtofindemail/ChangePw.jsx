import React from 'react';
import './changepw.css';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

export default function ChangePw(){

    const click = (e) => {
        const value = document.querySelector('.changePw_input').value;
        const hidden = document.querySelector('.changePw_hidden');
        if(value === "")
        {
            hidden.style.display = "block"; // 일치하지않을경우도 조건식에 추가
        }
        else{
            // 만약 비밀번호가 일치하면 /success 경로로 이동
        }
    }
    return(
        <>
            <div className="changePw_wrap">
                <div className="changePw_contentWrap">
                    <img className="changePw_logo" src="/assets/eslogo.png" alt="로고" />
                    <div className="changePw_word1">비밀번호 변경</div>
                    <div><input className="changePw_input" type="password" placeholder="새로운 비밀번호 입력"/></div>
                    <div><input className="changePw_input" type="password" placeholder="비밀번호 확인"/></div>
                    <div className="changePw_hidden">비밀번호가 일치하지 않습니다.</div>
                    <div><button onClick={click} className="changePw_button">변경</button></div>
                    <div className="changePw_homeLink"><Link to="/" className="changePw_word3">홈으로 이동</Link></div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}