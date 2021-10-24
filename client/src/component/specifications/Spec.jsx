import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './spec.css'

export default function Spec() {
  return (
    <>
      <Header/>
        <div className="specBanner">RESERVATION</div>
        <div className="specContainer">
          <div className="specContainerLeft">
            <div className="boothSpecSelection">
              <div className="SelectionItems">
                <div className="SelectionItem">
                  <div className="SelectionItemTop">
                    <div className="SelectionItemIndex">1</div>
                    <div className="SelectionItemTitle">전시 일자 선택</div>
                  </div>
                  <div className="SelectionItemBottom"></div>
                </div>
                <div className="SelectionItem">
                  <div className="SelectionItemTop">
                    <div className="SelectionItemIndex">2</div>
                    <div className="SelectionItemTitle">기본 정보 입력</div>
                  </div>
                  <div className="SelectionItemBottom"></div>
                </div>
                <div className="SelectionItem">
                  <div className="SelectionItemTop">
                    <div className="SelectionItemIndex">3</div>
                    <div className="SelectionItemTitle">부스 타입 선택</div>
                  </div>
                  <div className="SelectionItemBottom">
                  <div className="SelectionItemBottomItems">
                      <div className="SelectionItemBottomItem"></div>
                      <div className="SelectionItemBottomItem"></div>
                      <div className="SelectionItemBottomItem"></div>
                    </div>
                  </div>
                </div>
                <div className="SelectionItem">
                  <div className="SelectionItemTop">
                    <div className="SelectionItemIndex">4</div>
                    <div className="SelectionItemTitle">ESL 대여</div>
                  </div>
                  <div className="SelectionItemBottom">
                    <div className="SelectionItemBottomItems">
                      <div className="SelectionItemBottomItem"></div>
                      <div className="SelectionItemBottomItem"></div>
                      <div className="SelectionItemBottomItem"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="eslSelection">

            </div>
          </div>
          <div className="specContainerRight">
            <div className="reservationDashboard">
              <div className="DashboardTitle">예약현황</div>
              <div className="DashboardDesc">
                <div className="DashboardDescTop">
                  <div className="DescTopTitle">부스번호</div>
                  <div className="DescTopBoothnum">B-a106</div>
                  <div className="DescTopBoothnumDetail">B구역 a타입 106</div>
                </div>
                <div className="DashboardDescBottom">
                  <div className="DescBottomItemDate">
                    <div className="DescBottomItemTitle">기간</div>
                    <div className="DescBottomItemDetail">21년 10월 5일 (수) ~ 10월 9일 (월)</div>
                  </div>
                  <div className="DescBottomItem">
                    <div className="DescBottomItemTitle">부스</div>
                    <div className="DescBottomItemDetail">1,500,000 원</div>
                  </div>
                  <div className="DescBottomItem">
                      <div className="DescBottomItemTitle">ESL</div>
                      <div className="DescBottomItemDetail">500,000 원</div>
                  </div>
                  <div className="eslClasses">
                      <div className="eslClass">
                        <div className="eslClassTitle">E1</div>
                        <div className="eslClassNum">6개</div>
                      </div>
                      <div className="eslClass">
                        <div className="eslClassTitle">E2</div>
                        <div className="eslClassNum">8개</div>
                      </div>
                      <div className="eslClass">
                        <div className="eslClassTitle">E3</div>
                        <div className="eslClassNum">5개</div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="reservationDashboardCost">
                <div className="reservationDashboardCostTitle">총 금액</div>
                <div className="reservationDashboardCostNum" onChange>2,000,000원</div>
              </div>
              <div className="reservationDashboardButton">결제</div>
            </div>
          </div>
        </div>
      <Footer/>
    </>
  )
}
