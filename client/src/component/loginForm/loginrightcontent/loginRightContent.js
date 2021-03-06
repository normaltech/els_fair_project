import React from 'react';
import { Link } from 'react-router-dom';
import './loginRightContent.css';

export const LoginRightContent = ({ inputId, inputPw, changeId, changePw, changeBorderColor, clickButton, loginStatus }) => (
  <div className="loginRightContent">
    <div>
      <img className="eservateLogo" src="/assets/eservatelogo.png" alt="" />
    </div>
    <form className="loginForm" action="/" method="get">
      <input required className="loginInput" id="input_id" name="input_id" value={inputId} type="email" placeholder="이메일" onChange={changeId} onClick={changeBorderColor} />
      <input required className="loginInput" id="input_pw" name="input_pw" value={inputPw} type="password" placeholder="비밀번호" onChange={changePw} onClick={changeBorderColor} />
      <div className="loginAlert">{loginStatus}</div>
      <div><button className="loginButton" type="submit" onClick={clickButton}><span className="loginMessage">로그인</span></button></div>
    </form>
    <div className="signIn">
      <span className="signInAsk">계정이 없으신가요?</span>
      {/* 회원가입페이지로 이동 */}
      <Link to="/signup" style={{textDecoration:"none"}}>  
        <button className="signInButton">
          <div className="signInMessage">회원가입</div>
        </button>
      </Link>
    </div>
    <div className="findEmailOrPwd">
      <Link to="/findIdPw"><span className="findInfo">가입한 이메일 찾기 / 비밀번호 찾기</span></Link>
      {/* <span>&nbsp;&nbsp;&nbsp;<strong>|</strong>&nbsp;&nbsp;&nbsp;</span>
      <Link to="/find"><span className="findInfo">비밀번호 찾기</span></Link> */}
    </div>
  </div>
);