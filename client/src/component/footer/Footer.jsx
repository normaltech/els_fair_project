import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerInfo">
        <div>서울특별시 광진구 능동로 209 (군자동, 세종대학교)</div>
        <div className="line">|</div>
        <div>대표전화 : 02-xxx-xxxx</div>
        <div className="line">|</div>
        <div>이메일 : sejong@sju.ac.kr</div>
      </div>
      <div className="copyright">
        <span>COPYRIGHT 2021 Capstone Team No.5 ALL RIGHTS RESERVED.</span>
      </div>
    </div>
  )
}
