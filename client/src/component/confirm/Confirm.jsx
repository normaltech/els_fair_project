import React, { useState } from 'react';
import './confirm.css';
import Footer from '../footer/Footer';
import { Link, useHistory,useLocation} from 'react-router-dom';

export default function Confirm(){
    const location = useLocation();
    const history = useHistory();
    var mailCode = 0;
    var email = location.props.email;
    // console.log(location.props.mailcode)
    if(location.props != null){
        console.log("mailcode 삽입 성공");
        mailCode = location.props.mailcode;
    }
    const click = (e) => {
        const inputCode = document.querySelector('.confirm_input').value;
        const hiddenTxt = document.querySelector('.confirm_hidden');
        console.log("이메일에서 받은 코드 : "+mailCode)
        console.log("입력 코드 : "+inputCode)
        if(mailCode == inputCode)
        {
            //비밀번호 수정하는 페이지로 이동
            history.push({
                pathname:'/changePw',
                props:{
                    email : email
                }
            })
            hiddenTxt.style.display = "none";
        }
        else{
            hiddenTxt.style.display = "block";
        }
    }
    return(
        <>
            <div className="confirm_wrap">
                <div className="confirm_contentWrap">
                    <img className="confirm_logo" src="/assets/eslogo.png" alt="로고" />
                    <div className="confirm_word1">인증 번호를 입력하세요</div>
                    <div className="confirm_word2">입력한 메일주소로 이동하여</div>
                    <div className="confirm_word2">인증번호를 확인하여 인증하세요.</div>
                    <div><input className="confirm_input" type="number" placeholder="인증번호 6자리 입력"/></div>
                    <div className="confirm_hidden">잘못된 인증번호입니다. 다시 입력해주세요.</div>
                    <div><button onClick={click} className="confirm_button">인증</button></div>
                    <div className="confirm_homeLink"><Link to="#" className="confirm_word3">인증번호 재전송</Link></div>
                    <div className="confirm_homeLink"><Link to="/" className="confirm_word3">홈으로 이동</Link></div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}