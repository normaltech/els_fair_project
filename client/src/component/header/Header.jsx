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
    const toggleClick = () => {
            const toggleBtn = document.querySelector('.headerToggle');
            const menu = document.querySelector('.headerMenu');
            const logout = document.querySelector('.headerRightSpan');
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
                    <li><Link className="headerMenuItem" to="#">전시회 목록</Link></li>
                    <li><Link className="headerMenuItem" to="#">부스 정보</Link></li>
                    <li><Link className="headerMenuItem" to="#">예약 안내</Link></li>
                    <li><Link className="headerMenuItem" to="#">전시 개요</Link></li> 
                </ul>

                <div className="headerRightContent">
                    <div className="headerRightPadding headerRightPerson"><strong>{person}, 환영합니다</strong></div>
                    <Link to="/" className="headerLogout" style={{textDecoration:"none"}}>
                        <span className="headerRightPadding headerRightSpan">로그아웃</span>
                    </Link>
                </div>

                <a href="#" className="headerToggle" onClick={toggleClick}><i class="fas fa-bars"></i></a>
            </div>
        </>
    )
}