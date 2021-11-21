import React, {useState, useEffect} from 'react';
import './changepw.css';
import Footer from '../footer/Footer';
import axios from 'axios'
import { Link ,useLocation} from 'react-router-dom';
function useFetch(emailData){
    const [data, setData] = useState()
    async function fetchUrl(){
        axios.post("/getCompanyIdByEmail", emailData).then((res) => {
            setData(res.data.companyId)
        })
    }

    useEffect(() => {
        fetchUrl();
     },[]);

    return data;
}

export default function ChangePw(){
    const location = useLocation();
    const email = location.props.email;
    let emailData = {email:email}
    // var companyId = 0;
    var companyId = useFetch(emailData);
    console.log(companyId)
    const click = (e) => {
        const value1 = document.getElementById('pw1').value;
        const value2 = document.getElementById('pw2').value;
        
        const warningText = document.querySelector('.changePw_hidden');
        if(value1 === value2){
            warningText.style.display = "block";
            warningText.textContent= "비밀번호가 일치합니다!";
            //받아온 이메일로 회사 ID가져오기
           
            console.log("받아온 이메일:"+ email)
            // axios.post("/getCompanyIdByEmail", emailData).then((res) => {
            //     // companyId = res.data.companyId
            //     data = changeData(res.data.companyId)
            // })
            console.log("회사 id:"+ companyId)
            let data = {companyId : companyId, newPassword : value2}
            axios.post("/changePassword", data).then((res) => {
                console.log(res)
                window.location.href="/login"
            })
        }else{
            warningText.style.display = "block";
        }
    }
    return(
        <>
            <div className="changePw_wrap">
                <div className="changePw_contentWrap">
                    <img className="changePw_logo" src="/assets/eslogo.png" alt="로고" />
                    <div className="changePw_word1">비밀번호 변경</div>
                    <div><input id="pw1" className="changePw_input" type="password" placeholder="새로운 비밀번호 입력"/></div>
                    <div><input id="pw2" className="changePw_input" type="password" placeholder="비밀번호 확인"/></div>
                    <div id="pwAlert" className="changePw_hidden">비밀번호가 일치하지 않습니다.</div>
                    <div><button onClick={click} className="changePw_button">변경</button></div>
                    <div className="changePw_homeLink"><Link to="/" className="changePw_word3">홈으로 이동</Link></div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}