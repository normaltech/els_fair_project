import React, { useContext, useEffect, useState } from 'react';
import { LoginRightContent } from '../loginrightcontent/loginRightContent';
import Footer from '../../footer/Footer';
import './login.css';
import axios from 'axios';
import { loginCall } from '../../../apiCalls';
import { AuthContext } from '../../../context/AuthContext';
import Header from '../../header/Header';


export default function Login() {

  axios.defaults.withCredentials = true;

  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')
  const[loginStatus, setLoginStatus] = useState('')

  const changeId = (e) => {
    setInputId(e.target.value);
  }

  const changePw = (e) => {
    setInputPw(e.target.value);
  }

  const clickButton = async (e) => {
    e.preventDefault();

    const idTag = document.getElementById("input_id");
    const pwTag = document.getElementById("input_pw");
    const warnColor = "#ff0000";

    if (inputId === '' && inputPw === '') {
      // alert('로그인 정보를 입력해주세요');
      idTag.style.borderColor = warnColor;
      pwTag.style.borderColor = warnColor;
    } else if (inputId == '') {
      // alert('이메일을 입력해주세요');
      idTag.style.borderColor = warnColor;
    } else if (inputPw == '') {
      // alert('비밀번호를 입력해주세요');
      pwTag.style.borderColor = warnColor;
    } else {
      // 둘다 입력됐을때
      let user = {
        email: idTag.value,
        password: pwTag.value
      };
      console.log(user);
      // let response = fetch('', {  // 서버에서 어디로보낼지 로그인 api 첫번째인자에 정해야됨
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json;charset=utf-8'
      //   },
      //   body: JSON.stringify(user)
      // });
      try {
        await axios.post("/login", user).then((res) => {
          const code = res.data.resultCode;
          const message=res.data.message;

          if(code==0){
            window.location.href = "/mainpage"
          }else{
            alert(message);
          }
          // if(response.data.message)
          //   setLoginStatus(response.data.message)
          // else{
          //   setLoginStatus(response.data[0].manager+"님 환영합니다!")
          //   window.location.href = "/mainpage"
          // }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
 
  /*
  - 세션관리
  현재 로그인이 되어있는지 안되어있는지 확인하기위한 메소드
  */  
  useEffect(()=>{
    axios.get("/login").then((response)=>{
      if(response.data.loggedIn == true){
        setLoginStatus(response.data.user.manager+"님 환영합니다!")
      }
    })
  }, [])
  const changeBorderColor = (e) => {
    if (e.target.id === "input_id") {
      document.getElementById("input_id").style.borderColor = "#0d47a1";
    } else {
      document.getElementById("input_pw").style.borderColor = "#0d47a1";
    }
  }
  return (
    <div className="loginContentContainer">
      <Header />
      <div className="loginContent">
        {/* 왼쪽사진 */}
        <div className="loginLeftContent">
          <img className="loginPicture" src="/assets/loginpic.png" alt="loginPicture" />
        </div>
        {/* 오른쪽 로그인폼 */}
        <LoginRightContent inputId={inputId} inputPw={inputPw} changeId={changeId} changePw={changePw}
          changeBorderColor={changeBorderColor} clickButton={clickButton} loginStatus={loginStatus}/>
      </div>
      <Footer/>
    </div>
  )
}

