import './verification.css'
import React, {useState, useEffect} from 'react'
import axios from 'axios'


export default function Verification({setter, label, useremail}) {

  // const handleVerivationSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.email.value, event.target.name.value);
  // }   
  
  

  const [email, setemail] = useState({
    email: ''
  })
  
  const [number, setnumber] = useState(123456)
  const [inputnumber, setinputnumber] = useState(123456)
  const [warningText, setwarningText] = useState('인증 번호를 다시 확인해주시기 바랍니다.')

  const checkbtn = () => {
    if(number == inputnumber){
      setwarningText('인증이 완료되었습니다.')
    }
    else {
      setwarningText('인증 번호를 다시 확인해주시기 바랍니다.')
    }

  }
  

  const call = () => {
    
    if(email.email === ''){
      console.log('이메일 입력하세요')
    }
    else {
      console.log('성공')
      console.log(email.email)
      // 제대로된 이메일 양식을 입력 안했을때 안보내기위해서 일단 주석처리해놨음.
      // try {  
      //   axios.post("http://localhost:5000/sendEmail", email)
      //     .then((response) => {
      //       setnumber(response.data.number)
      //     })
      //   console.log('메일전송완료')
      // } catch (error) {
      //   console.log(error);
      // }
    }
  }

  const test = () => {
    console.log(useremail)
  }

  useEffect(() => {
    setemail({
      ...email,
      email: useremail
    })
  }, [useremail])

  



  return (
    // <div className="verificationNum" onSubmit={handleVerivationSubmit}>
    //   <input onChange={(e)=>setter(e.target.value)} className="verificationNumInput" type="text" />
    //   <button className="verificationNumButton" type="submit" onClick={call}>인증번호 받기</button>
    //   <div className="warningText">인증 번호를 다시 확인해주시기 바랍니다.</div>
    // </div>
    <div className="verificationNum">
      <label className="inputTagLabel" >{label}</label><br />
      <input onChange={(e) => { setter(e.target.value); setinputnumber(e.target.value) }} className="verificationNumInput" type="text" />

      <div>
        <button className="verificationNumButton" onClick={call}>인증번호 받기</button>
        <button className="verificationNumButton" onClick={checkbtn}>확인</button>
      </div>
      <div className="warningText">{warningText}</div>
    </div>
  )

}


