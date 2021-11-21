import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './header.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Header() {
  const [person, setPerson] = useState()

  useEffect(() => { //session에서 받아온 유저정보
    try {
      axios.get("/getuserinfo")
      .then((response) => {
        if(response.data[0].manager){
            setPerson(response.data[0].manager);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const toggleClick = (e) => {
    e.preventDefault();
    const toggleBtn = document.querySelector('.headerToggle');
    const menu = document.querySelector('.headerMenu');
    const logout = document.querySelector('.headerRightSpan');
    menu.classList.toggle('active');
    logout.classList.toggle('active');
  }

  const btn = () => {
      try {
        axios.get("/logout")
      } catch (error) {
        console.log(error);
      }
  }

  const loginlogout = () =>{
    if(person != null){
      return (
        <>
          <Link to="/userinfo">
            <div className="headerRightPadding headerRightPerson"><strong>{person}님 환영합니다</strong></div>
          </Link>
          <Link to="/" className="headerLogout" style={{ textDecoration: "none" }}>
            <span className="headerRightPadding headerRightSpan" onClick={btn}>로그아웃</span>
          </Link>
        </>
      )
    }else{
      return (
        <>
          <Link to="/login" className="headerLogout" style={{ textDecoration: "none" }}>
            <span className="headerRightPadding headerRightSpan">로그인</span>
          </Link>
        </>
      )
    }
  }

    
    return (
        <>
            <div className="headerContainer">
                <div className="headerLeftContent">
                    <Link to="/mainpage"><img title="메인페이지로 이동" id="black_logo" className="headerLogo" src="/assets/headerlogo.png" alt="headerlogo" /></Link>
                    <Link to="/mainpage"><img title="메인페이지로 이동" id="white_logo" src="/assets/eservate_white.png" alt="로고흰색버전" /></Link>
                </div>

        <ul className="headerMenu">
          <li className="headerMenuItem"><Link to="/mainpage">전시회 목록</Link></li>
          <li className="headerMenuItem"><Link to="#">부스 정보</Link></li>
          <li className="headerMenuItem"><Link to="/selection">예약 안내</Link></li>
          <li className="headerMenuItem"><Link to="#">전시 개요</Link></li>
        </ul>

        <div className="headerRightContent">
          {loginlogout()}
        </div>

        <a className="headerToggle" onClick={toggleClick}><i className="fas fa-bars"></i></a>
      </div>
    </>
  )
}