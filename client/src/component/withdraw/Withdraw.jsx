import React from 'react';
import './withdraw.css';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

export default function Withdraw(){

    return(
        <>
            <div className="withdraw_contentWrap">
                <div className="withdraw_word1">회원 탈퇴</div>
                <div className="withdraw_word2">탈퇴하시겠습니까?</div>
                <div className="withdraw_word3">탈퇴하시게 되면 개인정보 및 예약하신 데이터들이 모두 삭제됩니다.</div>
                <div><Link to="#"><button className="withdraw_button withdraw_button1">탈퇴</button></Link></div>
                <div><Link to="#"><button className="withdraw_button">취소</button></Link></div>
            </div>
            {/* <Footer /> */}
        </>
    )
}