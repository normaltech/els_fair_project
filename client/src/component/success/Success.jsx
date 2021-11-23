import React from 'react';
import './success.css';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

export default function Success(){

    return(
        <>
            <div className="success_wrap">
                <div className="success_contentWrap">
                    <img className="success_logo" src="/assets/eslogo.png" alt="로고" />
                    <img className="success_balloon" src="/assets/balloon.png" alt="풍선사진" />
                    <div className="success_word1">완료</div>
                    <div><Link to="/"><button className="success_button">로그인 페이지로 이동</button></Link></div>
                </div>
            </div>
            <Footer />
        </>
    )
}