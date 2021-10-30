import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './spec.css'
import axios from 'axios';

export default function Spec() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById("defaultInfoTable_managerEmail").value;
    const name = document.getElementById("defaultInfoTable_managerName").value;

    const managerNum = document.getElementById("defaultInfoTable_managerNum").value;

    const companyName = document.getElementById("defaultInfoTable_companyName").value;
    const companyId = document.getElementById("defaultInfoTable_companyId").value;


    const companyNum = () => {
      const companyNum_back = document.getElementById("defaultInfoTable_companyNum").value;
      return companyNum_back;
    }

    const eslNum = document.getElementsByClassName("SelectedESLNum");
    const esl_E1 = eslNum[0].value;
    const esl_E2 = eslNum[1].value;
    const esl_E3 = eslNum[2].value;
    const eslArray = [esl_E1,esl_E2,esl_E3];

    const boothNum = document.getElementsByClassName("SelectedBoothType");
    const booth_B1 = boothNum[0].value;
    const booth_B2 = boothNum[1].value;
    const booth_B3 = boothNum[2].value;
    const boothArray = [booth_B1,booth_B2,booth_B3];

    const passNameRow = document.getElementsByClassName("passNameRow");
    const passRankRow = document.getElementsByClassName("passRankRow");
    const passTelRow = document.getElementsByClassName("passTelRow");
    
    const passTotalArray = [];
    for(let i=0; i<6; i++){
      const onePass = [];
      onePass.push(passNameRow[i].value, passRankRow[i].value, passTelRow[i].value);
      passTotalArray.push(onePass);
    }

    let selectionInfo = {
      email: email,
      name: name,
      managerNum: managerNum,
      companyName: companyName,
      companyId: companyId,
      companyNum: companyNum(),
      eslArray: eslArray,
      boothArray: boothArray,
      passArray: passTotalArray,
    };
    console.log(selectionInfo);

    // try{
    //   axios.post("http://localhost:5000/register",selectionInfo)
    //   .then((response) => {
    //   console.log(response);
    // });
    // }catch(error){
    //   console.log(error);
    // }
  }
  return (
    <div className="reservationContainer">
      <Header />
      <div className="specBanner">RESERVATION</div>
      <div className="specContainer">
        <div className="specContainerLeft">
          <div className="boothSpecSelection">
            <div className="SelectionItems">
              <div className="SelectionItem">
                <div className="SelectionItemTop">
                  <div className="SelectionItemIndex">2</div>
                  <div className="SelectionItemTitle">기본 정보 입력</div>
                </div>
                <div className="SelectionItemBottom">
                  <div className="defaultInfoTable">
                    <div className="inputTag">
                      <label className="InfoTableLabel" htmlFor="companyName">회사이름</label><br />
                      <input type="text" id="defaultInfoTable_companyName" />
                    </div>
                    <div className="inputTag">
                      <label className="InfoTableLabel" htmlFor="companyId">사업자 등록번호</label><br />
                      <input type="number" id="defaultInfoTable_companyId" />
                    </div>
                    <div className="inputTag">
                      <label className="InfoTableLabel" htmlFor="managerName">담당자 이름</label><br />
                      <input type="text" id="defaultInfoTable_managerName" />
                    </div>
                    <div className="inputTag">
                      <label className="InfoTableLabel" htmlFor="companyNum">회사 전화번호</label><br />
                      <input type="number" id="defaultInfoTable_companyNum" />
                    </div>
                    <div className="inputTag">
                      <label className="InfoTableLabel" htmlFor="managerNum">담당자 전화번호</label><br />
                      <input type="number" id="defaultInfoTable_managerNum" />
                    </div>
                    <div className="inputTag">
                      <label className="InfoTableLabel" htmlFor="managerEmail">담당자 이메일</label><br />
                      <input type="email" id="defaultInfoTable_managerEmail" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="SelectionItem">
                <div className="SelectionItemTop">
                  <div className="SelectionItemIndex">3</div>
                  <div className="SelectionItemTitle">부스 타입 선택</div>
                </div>
                <div className="SelectionItemBottom">
                  <div className="SelectionItemBottomItems">
                    <div className="SelectionItemBottomItem">
                      <img src="/assets/icons/622.png" alt="booth1" />
                      <div className="selectionConatiner">
                        <label htmlFor="B1">A타입</label>
                        <input type="radio" name="boothRadio" value="1" />
                      </div>
                    </div>
                    <div className="SelectionItemBottomItem">
                      <img src="/assets/icons/647.png" alt="booth2" />
                      <div className="selectionConatiner">
                        <label htmlFor="B2">B타입</label>
                        <input type="radio" name="boothRadio" value="2" />
                      </div>
                    </div>
                    <div className="SelectionItemBottomItem">
                      <img src="/assets/icons/649.png" alt="booth3" />
                      <div className="selectionConatiner">
                        <label htmlFor="B3">타입</label>
                        <input type="radio" name="boothRadio" value="3" />
                      </div>
                    </div>
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
                    <div className="SelectionItemBottomItem">
                      <img src="/assets/icons/esl.png" alt="esl image" />
                      <div className="selectionConatiner">
                        <label htmlFor="ESL_E1">E1</label>
                        <select name="ESL_E1" className="eslSelectionBOX">
                          <option value="0" selected>0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                    </div>
                    <div className="SelectionItemBottomItem">
                      <img src="/assets/icons/esl.png" alt="esl image" />
                      <div className="selectionConatiner">
                        <label htmlFor="ESL_E2">E2</label>
                        <select name="ESL_E2" className="eslSelectionBOX">
                          <option value="0" selected>0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                    </div>
                    <div className="SelectionItemBottomItem">
                      <img src="/assets/icons/esl.png" alt="esl image" />
                      <div className="selectionConatiner">
                        <label htmlFor="ESL_E3">E3</label>
                        <select name="ESL_E3" className="eslSelectionBOX">
                          <option value="0" selected>0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="SelectionItem">
                <div className="SelectionItemTop">
                  <div className="SelectionItemIndex">5</div>
                  <div className="SelectionItemTitle">출입증 신청</div>
                </div>
                <div className="SelectionItemBottom">
                  <div className="passEnrollTable">
                    <div className="passNum" id="passFieldRow">순번</div>
                    <div className="passName" id="passFieldRow">이름</div>
                    <div className="passRank" id="passFieldRow">직위</div>
                    <div className="passTel" id="passFieldRow">연락처</div>
                    <div className="passNumRow">1</div>
                    <input className="passNameRow" />
                    <input className="passRankRow" />
                    <input className="passTelRow" />
                    <div className="passNumRow">2</div>
                    <input className="passNameRow" />
                    <input className="passRankRow" />
                    <input className="passTelRow" />
                    <div className="passNumRow">3</div>
                    <input className="passNameRow" />
                    <input className="passRankRow" />
                    <input className="passTelRow" />
                    <div className="passNumRow">4</div>
                    <input className="passNameRow" />
                    <input className="passRankRow" />
                    <input className="passTelRow" />
                    <div className="passNumRow">5</div>
                    <input className="passNameRow" />
                    <input className="passRankRow" />
                    <input className="passTelRow" />
                    <div className="passNumRow">6</div>
                    <input className="passNameRow" />
                    <input className="passRankRow" />
                    <input className="passTelRow" />
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
            <div className="reservationDashboardButton" onClick={handleSubmit}>결제</div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}
