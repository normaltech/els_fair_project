import React from 'react';
import './changenumber.css';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

export default function ChangeNumber(){

    return(
        <>
            <div className="changeNumber_contentWrap">
                <div className="changeNumber_word1">연락처 수정</div>
                <div><input className="changeNumber_input" type="text" placeholder="이름"/></div>
                <div><input className="changeNumber_input" type="text" placeholder="전화번호"/></div>
                <div><input className="changeNumber_input" type="email" placeholder="메일"/></div>
                <div><Link to="#"><button className="changeNumber_button changeNumber_button1">확인</button></Link></div>
                <div><Link to="#"><button className="changeNumber_button">취소</button></Link></div>
            </div>
            {/* <Footer /> */}
        </>
    )
}