import React, { useState, useEffect } from 'react';
import './find.css';
import Footer from '../footer/Footer';
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom';

var nextButtonAllow = false;
export default function Find(){
    let history = useHistory();
    const [number, setnumber] = useState(0)

    const registBtn = () => {
        window.location.href="/signup"
    }
    const click = (e) => {
        const email = document.querySelector('.find_input').value;
        let data = {email : email}

        const hiddenTxt = document.querySelector('.find_hidden');
        const hiddenBtn = document.querySelector('.regist_button');
        try {
            axios.post("/checkEmail", data).then((res) => {
              console.log(res.data.flag)
                if(res.data.flag == 1){
                    axios.post("/sendEmail", data).then((response) => {
                        // /confirm으로 난수 보내기
                        console.log("메일코드:"+response.data.number)
                        hiddenTxt.textContent = "인증 번호 발송중..."
                        history.push({
                            pathname:'/confirm',
                            props:{
                                mailcode : response.data.number,
                                email : email
                            }
                        })
                    })
                // console.log(res.data.message);
                // nextButtonAllow = true;
                // console.log(nextButtonAllow);
                // hiddenTxt.style.display = "none";
                // hiddenTxt.textContent = "'다음'버튼을 클릭하여 비밀번호를 변경하세요!"
                // hiddenTxt.style.display = "block";
                // window.location.href="/confirm"
              }
              else{
                console.log(res.data.message);
                hiddenTxt.style.display = "block";
                hiddenBtn.style.display = "block";
              }
            });
        }catch (error) {
            console.log(error);
        }
    }
    return(
        <>
            <div className="find_wrap">
                <div className="find_contentWrap">
                    <img className="find_logo" src="/assets/eslogo.png" alt="로고" />
                    <div className="find_word1">아이디/비밀번호 찾기</div>
                    <div className="find_word2">아이디 비밀번호를 잊으셨습니까?</div>
                    <div className="find_word2">&lt;아래 칸에 이메일을 입력하세요&gt;</div>
                    <div><input className="find_input" type="email" placeholder="이메일을 입력하세요."/></div>
                    <div className="find_hidden">가입되어있지않은 메일입니다. 회원가입하시겠습니까?</div>
                    <div><button className="regist_button" onClick={registBtn}>회원 가입</button></div>
                    <div><button onClick={click} className="find_button">다음</button></div>
                    <div className="find_homeLink"><Link to="/" className="find_word3">홈으로 이동</Link></div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}