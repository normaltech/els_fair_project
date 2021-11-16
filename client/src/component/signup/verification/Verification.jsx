import './verification.css'
import React, {useState, useEffect} from 'react'
import axios from 'axios'


export default function Verification({setter, label, useremail, certification}) {

  const [email, setemail] = useState({
    email: ''
  })
  
  const [number, setnumber] = useState('인증번호생성')
  const [inputnumber, setinputnumber] = useState('인증번호입력')
  const [warningText, setwarningText] = useState('인증 번호 받기를 눌러주세요.')

  const checkbtn = () => {
    if(number == inputnumber){
      setwarningText('인증이 완료되었습니다.')
      certification(true)
    }
    else {
      setwarningText('인증 번호를 다시 확인해주시기 바랍니다.')
      certification(false)
    }

  }
  

  const call = () => {
    
    if(email.email === ''){
      alert('이메일을 입력해주세요')
    }
    else {
      console.log('성공')
      console.log(email.email)
      setwarningText('인증 번호를 입력해주세요.')
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

  useEffect(() => {
    setemail({
      ...email,
      email: useremail
    })
  }, [useremail])

  



  return (
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


