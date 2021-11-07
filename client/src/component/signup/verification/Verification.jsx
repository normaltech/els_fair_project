import './verification.css'
import React from 'react'

export default function Verification({setter}) {

  const handleVerivationSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.email.value, event.target.name.value);
  }
  return (
    <div className="verificationNum" onSubmit={handleVerivationSubmit}>
      <input onChange={(e)=>setter(e.target.value)} className="verificationNumInput" type="text" />
      <input className="verificationNumButton" type="submit" value="인증번호 받기" />
      <div className="warningText">인증 번호를 다시 확인해주시기 바랍니다.</div>
    </div>
  )

}


