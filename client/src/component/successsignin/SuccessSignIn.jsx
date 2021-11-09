import React from 'react';
import './successsignin.css';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

export default function SuccessSignIn(){

    return(
        <>
            <div className="successSignIn_wrap">
                <div className="successSignIn_contentWrap">
                    <img className="successSignIn_logo" src="/assets/eslogo.png" alt="로고" />
                    <img className="successSignIn_balloon" src="/assets/balloon.png" alt="풍선사진" />
                    <div className="successSignIn_word1">회원가입 완료</div>
                    <div><Link to="/"><button className="successSignIn_button">로그인 페이지로 이동</button></Link></div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}