import React, {useState, useEffect} from 'react';
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './userinfo.css'

function useFetch(url) {
  const [data, setData] = useState([])
  async function fetchUrl() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
  }

  useEffect(() => {
      fetchUrl();
  }, []);

  return data;
}



export default function UserInfo() {

  const data = useFetch("/userinfo");
  console.log(data);
  
  return (
    <>
      <Header/>
      <div className="userinfoOrReservationlistMenuBar">
        <div className="uorMenuContainer">
          <span className="uorMenu">회원정보</span>
          <span className="uorMenu">예약 내역</span>
        </div>
      </div>
      <div className="userinfoOrReservationlistContainer" id="userInfoBox">
        <div className="userInfoBoxItem">
          <div className="userInfoBoxItemDesc">
            <div className="userInfoBoxItemTitle">비밀번호 수정</div>
            <div className="userInfoBoxItemSub">이메일 인증을 통해 비밀번호를 찾을 수 있습니다.</div>
          </div>
          <div className="userInfoBoxItemLeft">
            <div className="userInfoBoxItemButton">수정</div>
          </div>
        </div>
        <div className="userInfoBoxItem">
          <div className="userInfoBoxItemDesc">
            <div className="userInfoBoxItemTitle">사업자번호</div>
            <div className="userInfoBoxItemSub">{data[0].company_id}</div>
          </div>
          <div className="userInfoBoxItemLeft">
            <div className="userInfoBoxItemButton">수정</div>
          </div>
        </div>
        <div className="userInfoBoxItem">
          <div className="userInfoBoxItemDesc">
            <div className="userInfoBoxItemTitle">연락처 수정</div>
            <div className="userInfoBoxItemSub">
              <div className="userInfoAddressContainer">
                <span className="uIACKey">이름</span>&nbsp;
                <span className="uIACValue">{data[0].manager}</span>
              </div>
              <div className="userInfoAddressContainer">
                <span className="uIACKey">전화번호</span>&nbsp;
                <span className="uIACValue">{data[0].manager_phone_num}</span>
              </div>
              <div className="userInfoAddressContainer">
                <span className="uIACKey">이메일</span>&nbsp;
                <span className="uIACValue">{data[0].email}</span>
              </div>
            </div>
          </div>
          <div className="userInfoBoxItemLeft">
            <div className="userInfoBoxItemButton">수정</div>
          </div>
        </div>
        <div className="userInfoBoxItem">
          <div className="userInfoBoxItemDesc">
            <div className="userInfoBoxItemTitle">회원 탈퇴</div>
            <div className="userInfoBoxItemSub">회원 탈퇴를 하게 되면 예약 정보가 모두 삭제됩니다.</div>
          </div>
          <div className="userInfoBoxItemLeft">
            <div className="userInfoBoxItemButton">탈퇴</div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
