import { BirthInputWithLabel, GenderInputWithLabel, InputWithLabel, TelInputWithLabel } from '../inputwithlabel/InputWithLabel'
import Verification from '../verification/Verification';
import axios from 'axios';
import './signupformbox.css'
import React, { Component, useEffect, useState } from 'react'

export default function SignUpFormBox() {

  const [vericationCode, setVericationCode] = useState('');
  const [certification, setcertification] = useState(false);
  const [checkinput, setcheckinput] = useState(false)
  const [count, setcount] = useState(0)

  const checkin = () => {

      setcount(0)

      if(user.email === '')setcount(1)
      if(user.password === '')setcount(2)
      if(user.passwordCheck === '')setcount(3)
      if(user.managerName === '')setcount(4)
      if(user.managerNum === '')setcount(5)
      if(user.companyName === '')setcount(6)
      if(user.companyId === '')setcount(7)
      if(user.companyNum === '')setcount(8)

      if(count == 0)setcheckinput(true)
      else setcheckinput(false)
  }

  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    managerName: '',
    managerNum: '',
    companyName: '',
    companyId: '',
    companyNum: '',
  });

  const certificationSetter = (value) => {
    setcertification(value);
  }

  const vericationCodeSetter = (value) => {
    setVericationCode(value);
  }

  const emailSetter = (value) => {
    setUser({
      ...user,
      email: value
    })
  }
  const passwordSetter = (value) => {
    setUser({
      ...user,
      password: value
    })
  }
  const passwordCheckSetter = (value) => {
    setUser({
      ...user,
      passwordCheck: value
    })
  }
  const managerNameSetter = (value) => {
    setUser({
      ...user,
      managerName: value
    })
  }
  const managerNumSetter = (value) => {
    setUser({
      ...user,
      managerNum: value
    })
  }

  const companyNameSetter = (value) => {
    setUser({
      ...user,
      companyName: value
    })
  }
  const companyIdSetter = (value) => {
    setUser({
      ...user,
      companyId: value
    })
  }
  const companyNumSetter = (value) => {
    setUser({
      ...user,
      companyNum: value
    })
  }

  const handleSubmit = async (e) => {

    if (checkinput === true) {
      if (certification === true) {

        console.log('성공')
        // e.preventDefault();

        // const managerNum = () => {
        //   const managerNum_front_s = document.getElementById("telNumContainerSelect");
        //   const managerNum_front_value = managerNum_front_s.options[managerNum_front_s.selectedIndex].value;
        //   return (managerNum_front_value + " " + user.managerNum);
        // }
        // const companyNum = () => {
        //   const companyNum_front_s = document.getElementById("telNumContainerSelect");
        //   const companyNum_front_value = companyNum_front_s.options[companyNum_front_s.selectedIndex].value;
        //   return (companyNum_front_value + " " + user.companyNum);
        // }

        // const userInfo = {
        //   email: user.email,
        //   password: user.password,
        //   name: user.managerName,
        //   managerNum: managerNum(),
        //   companyName: user.companyName,
        //   companyId: user.companyId,
        //   companyNum: companyNum(),
        // };

        // try {
        //   axios.post("http://localhost:5000/register", userInfo)
        //     .then((response) => {
        //       console.log(response);
        //     });
        // } catch (error) {
        //   console.log(error);
        // }
      }
      else {
        console.log('인증번호 확인하세요')
      }
    }
    else console.log('비어있는 칸이 있음')
  }

  useEffect(() => {
    setcount(0)

    if (user.email === '') setcount(1)
    if (user.password === '') setcount(2)
    if (user.passwordCheck === '') setcount(3)
    if (user.managerName === '') setcount(4)
    if (user.managerNum === '') setcount(5)
    if (user.companyName === '') setcount(6)
    if (user.companyId === '') setcount(7)
    if (user.companyNum === '') setcount(8)

    if (count == 0) setcheckinput(true)
    else setcheckinput(false)
  }, [handleSubmit])



  return (
    <div className="signUpFormBox">
      <InputWithLabel setter={emailSetter} label="이메일" type="email" name="email" warningText="필수정보 입니다." />
      <Verification setter={vericationCodeSetter} label="인증번호" useremail={user.email} certification={certificationSetter} />
      <InputWithLabel setter={passwordSetter} label="비밀번호" type="text" name="password" warningText="8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요." />
      <InputWithLabel setter={passwordCheckSetter} label="비밀번호 재확인" type="password" name="passwordcheck" warningText="비밀번호가 일치하지 않습니다." />
      <InputWithLabel setter={managerNameSetter} label="담당자 성함" type="text" name="managerName" warningText="필수정보 입니다." />
      <TelInputWithLabel setter={managerNumSetter} label="담당자 연락처" name="managerNum" warningText="필수정보 입니다." />
      <InputWithLabel setter={companyNameSetter} label="회사명" type="text" name="companyName" warningText="필수정보 입니다." />
      <InputWithLabel setter={companyIdSetter} label="사업자 번호" type="text" name="companyId" warningText="필수정보 입니다." />
      <TelInputWithLabel setter={companyNumSetter} label="회사전화" name="companyNum" warningText="필수정보 입니다." />
      <input className="signUpButton" type="submit" value='가입하기' onClick={handleSubmit} />
    </div>
  )
}