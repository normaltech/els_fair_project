import React, { useState } from 'react'
import './header.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Header() {
    const [person, setPerson] = useState('HongilDong')
    const toggleBtn = document.querySelector('.headerToggle');
    const menu = document.querySelector('.headerMenu');
    const logout = document.querySelector('.headerRightSpan');
    const toggleClick = () => {
            menu.classList.toggle('active');
            logout.classList.toggle('active');
    }
    return (
        <>
            <div className="headerContainer">
                <div className="headerLeftContent">
                    <img id="black_logo" className="headerLogo" src="/assets/headerlogo.png" alt="headerlogo" />
                    <img id="white_logo" src="/assets/eservate_white.png" alt="로고흰색버전" />
                </div>

                <ul className="headerMenu">
                    <li className="headerMenuItem"><a href="#">전시회 목록</a></li>
                    <li className="headerMenuItem"><a href="#">부스 정보</a></li>
                    <li className="headerMenuItem"><a href="#">예약 안내</a></li>
                    <li className="headerMenuItem"><a href="#">전시 개요</a></li> 
                </ul>

                <div className="headerRightContent">
                    <div className="headerRightPadding headerRightPerson"><strong>{person}, 환영합니다</strong></div>
                    <Link to="/" className="headerLogout" style={{textDecoration:"none"}}>
                        <span className="headerRightPadding headerRightSpan">로그아웃</span>
                    </Link>
                </div>

                <a href="#" className="headerToggle" onClick={toggleClick}><i className="fas fa-bars"></i></a>
            </div>
        </>
    )
}