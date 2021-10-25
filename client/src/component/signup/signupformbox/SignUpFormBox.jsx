import { BirthInputWithLabel, GenderInputWithLabel, InputWithLabel, TelInputWithLabel } from '../inputwithlabel/InputWithLabel'
import Verification from '../verification/Verification';
import axios from 'axios';

import React, { Component, createRef } from 'react'

export default function SignUpFormBox() {
  // state = {
  //   manager: {  //구글클라우드 클래스다이어그램보고 변수명 책정 manager와 company로 2차 분기해서 멤버로 들어가야함
  //     email: '',
  //     passwordForm: {
  //       password: '',
  //       passwordCheck: '',
  //     },
  //     name: '',
  //     birthday: {
  //       year: 0,
  //       month: 0,
  //       day: 0,
  //     },
  //     gender: true, //true면 남자 false면 여자
  //     managerNum: 0,
  //   },
  //   company: {
  //     companyName: '',
  //     companyId: 0,
  //     companyNum: 0,
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;

    const birth = () => {
      const birth_year_s = document.getElementById("birthYear");
      const birth_year_value = birth_year_s.options[birth_year_s.selectedIndex].value;
      const birth_month_s = document.getElementById("birthMonth");
      const birth_month_value = birth_month_s.options[birth_month_s.selectedIndex].value;
      const birth_day_s = document.getElementById("birthDay");
      const birth_day_value = birth_day_s.options[birth_day_s.selectedIndex].value;
      return birth_year_value + " " + birth_month_value + " " + birth_day_value;
    }

    const gender_s = document.getElementById("genderRadioButtonContainer");
    const gender_value = gender_s.options[gender_s.selectedIndex].value === "male" ? true : false;

    const managerNum = document.getElementById("managerNum").value;

    const companyName = document.getElementById("companyName").value;
    const companyId = document.getElementById("companyId").value;

    const companyNum = () => {
      const companyNum_back = document.getElementById("companyNum").value;
      const companyNum_front_s = document.getElementById("telNumContainerSelect");
      const companyNum_front_value = companyNum_front_s.options[companyNum_front_s.selectedIndex].value;
      return (companyNum_front_value + " " + companyNum_back);
    }
    
    // console.log(email);
    // const companyNum = companyNum_back + " " + companyNum_front_value;

    // this.setState({
    //   manager: {  //구글클라우드 클래스다이어그램보고 변수명 책정 manager와 company로 2차 분기해서 멤버로 들어가야함
    //     email: '',
    //     passwordForm: {
    //       password: '',
    //       passwordCheck: '',
    //     },
    //     name: '',
    //     birthday: {
    //       year: 0,
    //       month: 0,
    //       day: 0,
    //     },
    //     gender: false,
    //     managerNum: 0,
    //   },
    //   company: {
    //     companyName: '',
    //     companyId: 0,
    //     companyNum: 0,
    //   }
    // })
    let user = {
      email: email,
      password: password,
      name: name,
      gender: gender_value,
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
    
    // let response = fetch('', {  // 서버에서 어디로보낼지 로그인 api 첫번째인자에 정해야됨
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8'
    //   },
    //   body: JSON.stringify(user)
    // });
    // try {
    //   await axios.post("/",user);
    // } catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <form className="signUpFormBox" onSubmit={handleSubmit}>
      <InputWithLabel label="이메일" type="email" name="email" warningText="필수정보 입니다." />
      <Verification />
      <InputWithLabel label="비밀번호" type="password" name="password" warningText="8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요." />
      <InputWithLabel label="비밀번호 재확인" type="password" name="passwordcheck" warningText="비밀번호가 일치하지 않습니다." />
      <InputWithLabel label="이름" type="text" name="name" warningText="필수정보 입니다." />
      <BirthInputWithLabel label="생년월일" name="birth" warningText="생년월일을 선택해주세요." />
      <GenderInputWithLabel label="성별" name="gender" warningText="성별을 선택해주세요." />
      <TelInputWithLabel label="휴대전화" name="managerNum" warningText="필수정보 입니다." />
      <InputWithLabel label="회사명" type="text" name="companyName" warningText="필수정보 입니다." />
      <InputWithLabel label="사업자 번호" type="text" name="companyId" warningText="필수정보 입니다." />
      <TelInputWithLabel label="회사전화" name="companyNum" warningText="필수정보 입니다." />
      <input className="signUpButton" type="submit" value='가입하기' />
    </form>
  )
}