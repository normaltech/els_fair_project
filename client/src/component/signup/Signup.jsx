import React from 'react';
import './signup.css';
import Footer from '../footer/Footer';
import SignUpFormBox from './signupformbox/SignUpFormBox';
import Header from '../header/Header';

export default function Signup() {
  return (
    <div className="signup">
      <div className="Web_register">
        <img src="/assets/eslogo.png"
          srcSet="/assets/logo/logo@2x.png 2x,
            /assets/logo/logo@3x.png 3x"
          alt="logo"
          className="logo"
        />
        <SignUpFormBox />
      </div>
    </div>
  )
}