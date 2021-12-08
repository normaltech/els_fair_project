import React, { useState, useEffect } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import { Link } from 'react-router-dom';
import './reservationlist.css'
import axios from 'axios';

function useFetch(url){
  const [data, setData] = useState([])
  async function fetchUrl(){
      axios.get(url).then((res) => {
          setData(res.data[0])
      })
  }

  useEffect(() => {
      fetchUrl();
   },[]);

  return data;
}
function leftPad(value) {
  if (value >= 10) {
      return value;
  }
  return `0${value}`;
}

function toStringByFormatting(source, delimiter = '-') {
  const year = source.getFullYear();
  const month = leftPad(source.getMonth() + 1);
  const day = leftPad(source.getDate());
  return [year, month, day].join(delimiter);
}
export default function ReservationList() {
  const data = useFetch("/api/getReservedList");
  return (
    <div className="reservationListPage">
      <Header />
      <div className="userinfoOrReservationlistMenuBar">
        <div className="uorMenuContainer">
          <Link to="/mypage/userinfo" className="uorMenu">회원 정보</Link>
          <Link to="/mypage/reservationlist" className="uorMenu activatedUorMenu">예약 내역</Link>
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
            <div className="rListItem">부스구역</div>
            <div className="rListItem">부스타입</div>
          </div>
          <div className="rListTableRow">
                <div className="rListItem">{toStringByFormatting(new Date(data.date))}</div>
                <div className="rListItem">{data.name}</div>
                <div className="rListItem">{data.section}</div>
                <div className="rListItem">{data.TYPE}</div>  
            {/* {data.map((item)=>{
              return(
              <>
                <div className="rListItem">{item.date}</div>
                <div className="rListItem">{item.name}</div>
                <div className="rListItem">{item.section}</div>
                <div className="rListItem">{item.TYPE}</div>
              </>)
            })} */}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
