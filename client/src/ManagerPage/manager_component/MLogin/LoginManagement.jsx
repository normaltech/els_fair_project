import React, { useState } from 'react'
import './loginManagement.css';
import axios from 'axios';
export default function LoginManagement() {

    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    const changeId = (e) => {
        setInputId(e.target.value);
    }
    
    const changePw = (e) => {
        setInputPw(e.target.value);
    }

    const clickButton = async (e) => {
        let adminInfo = {
            id : inputId,
            pw : inputPw
        }
        e.preventDefault();
        await axios.post('/adminLogin',adminInfo).then((res)=>{
            if(res.data){
                if(res.data.resultCode == 'S'){
                    window.location.href="/managerpage";
                }else{
                    console.log(res.data.message);
                }
            }
        }) 
    }

    return(
        <>
            <div className="loginManagement_wrap">
                <form action="#" method="get">
                    <div className="loginManagement_content_wrap">
                        <div className="loginManagement_logo_wrap"><img src="/assets/eslogo.png" alt="eservate로고" className="loginManagement_logo"/></div>
                        <div className="loginManagement_label">관리자 전용 페이지</div>
                        <div><input className="loginManagement_input" type="text" placeholder="관리자 ID" id="ad_id" name="ad_id" value={inputId} onChange={changeId} /></div>
                        <div><input className="loginManagement_input" type="password" placeholder="관리자 비밀번호" id="ad_pw" name="ad_pw" value={inputPw} onChange={changePw} /></div>
                        <div className="loginManagement_button_wrap"><button className="loginManagement_button" type="submit" onClick={clickButton}>로그인</button></div>
                    </div>
                </form>
            </div>
        </>
    )
}