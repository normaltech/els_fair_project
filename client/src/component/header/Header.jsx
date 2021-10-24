import React from 'react'
import './header.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div className="headerContainer">
                <div className="headerLeftContent">
                    <img className="headerLogo" src="/assets/headerlogo.png" alt="headerlogo" />
                </div>
                <div className="headerRightContent">
                    <div className="headerRightPadding">Hongildong님, 환영합니다</div>
                    <Link to="/" style={{textDecoration:"none"}}>
                        <span className="headerRightPadding">로그아웃</span>
                    </Link>
                </div>
            </div>
        </>
    )
}