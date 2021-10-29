import React from 'react';
import './changebussinessnumber.css';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

export default function ChangeBussinessNumber(){

    return(
        <>
            <div className="changeBussinessNumber_contentWrap">
                <div className="changeBussinessNumber_word1">사업자 번호 수정</div>
                <div><input className="changeBussinessNumber_input" type="text" placeholder="사업자 번호"/></div>
                <div><Link to="#"><button className="changeBussinessNumber_button changeBussinessNumber_button1">확인</button></Link></div>
                <div><Link to="#"><button className="changeBussinessNumber_button">취소</button></Link></div>
            </div>
            {/* <Footer /> */}
        </>
    )
}