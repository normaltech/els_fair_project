import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import { Link } from 'react-router-dom';
import './reservationlist.css'

export default function ReservationList() {
  return (
    <>
      <Header />
      <div className="userinfoOrReservationlistMenuBar">
        <div className="uorMenuContainer">
          <Link to="/userinfo"><span className="uorMenu">회원정보</span></Link>
          <Link to="/reservationlist"><span className="uorMenu">예약 내역</span></Link>
        </div>
      </div>
      <div className="userinfoOrReservationlistContainer" id="reservationInfoBox">
        <div className="rListTitleAndSub">
          <div className="rListTitle">예약 내역 확인</div>
          <div className="rListSub">부스 예약 정보를 확인할 수 있습니다.</div>
        </div>
        <div className="rListTable">
          <div className="rListTableRow" id="rListTableField">
            <div className="rListItem">날짜</div>
            <div className="rListItem">전시회</div>
            <div className="rListItem">부스번호</div>
            <div className="rListItem">부스타입</div>
          </div>
          <div className="rListTableRow">
            <div className="rListItem">tempt</div>
            <div className="rListItem">tempt</div>
            <div className="rListItem">tempt</div>
            <div className="rListItem">tempt</div>
          </div>
        </div>
        <div className="rListTable" >
          <div className="rListTableRow" id="rListTableField">
            <div className="rListItem">ESL</div>
            <div className="rListItem">금액</div>
          </div>
          <div className="rListTableRow">
            <div className="rListItem">tempt</div>
            <div className="rListItem">tempt</div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
