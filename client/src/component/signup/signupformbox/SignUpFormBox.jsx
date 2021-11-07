import { BirthInputWithLabel, GenderInputWithLabel, InputWithLabel, TelInputWithLabel } from '../inputwithlabel/InputWithLabel'
import Verification from '../verification/Verification';
import axios from 'axios';
import './signupformbox.css'

import React, { Component, createRef, useState } from 'react'


export default function SignUpFormBox() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;

    const managerNum = document.getElementById("managerNum").value;

    const companyName = document.getElementById("companyName").value;
    const companyId = document.getElementById("companyId").value;

    const companyNum = () => {
      const companyNum_back = document.getElementById("companyNum").value;
      const companyNum_front_s = document.getElementById("telNumContainerSelect");
      const companyNum_front_value = companyNum_front_s.options[companyNum_front_s.selectedIndex].value;
      return (companyNum_front_value + " " + companyNum_back);
    }
    
    let user = {
      email: email,
      password: password,
      name: name,
      managerNum: managerNum,
      companyName: companyName,
      companyId: companyId,
      companyNum: companyNum(),
    };
    console.log(user);

    try{
      axios.post("http://localhost:5000/register",user)
      .then((response) => {
      console.log(response);
    });
    }catch(error){
      console.log(error);
    }
  }

  return (
    <form className="signUpFormBox" onSubmit={handleSubmit}>
      <InputWithLabel label="이메일" type="email" name="email" warningText="필수정보 입니다." />
      <Verification />
      <InputWithLabel label="비밀번호" type="password" name="password" warningText="8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요." />
      <InputWithLabel label="비밀번호 재확인" type="password" name="passwordcheck" warningText="비밀번호가 일치하지 않습니다." />
      <InputWithLabel label="담당자 성함" type="text" name="name" warningText="필수정보 입니다." />
      <TelInputWithLabel label="담당자 연락처" name="managerNum" warningText="필수정보 입니다." />
      <InputWithLabel label="회사명" type="text" name="companyName" warningText="필수정보 입니다." />
      <InputWithLabel label="사업자 번호" type="text" name="companyId" warningText="필수정보 입니다." />
      <TelInputWithLabel label="회사전화" name="companyNum" warningText="필수정보 입니다." />
      <input className="signUpButton" type="submit" value='가입하기' />
    </form>
  )
}