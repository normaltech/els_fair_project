import React from 'react';
import './signup.css';
import Footer from '../footer/Footer';
import SignUpFormBox from './signupformbox/SignUpFormBox';
import Header from '../header/Header';

export default function Signup() {
  return (
    <div className="signUpPage">
    <Header/>
    <div className="signup">
      <div className="Web_register">
        <img src="/assets/eslogo.png"
          alt="logo"
          className="logo"
        />
        <SignUpFormBox />
      </div>
    </div>
    <Footer/>
    </div>
  )
}