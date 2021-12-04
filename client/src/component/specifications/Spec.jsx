import React, { useState, useEffect } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './spec.css'
import axios from 'axios';
import { useLocation } from 'react-router';
import SpecModal from './specModal';

const isE1True = function () {
  try {
    const e1 = document.getElementById("e1Select");
    const e1Num = Number(e1.options[e1.selectedIndex].value);
    return (e1Num > 0 ? true : false);
  }
  catch (error) {
    return false;
  }
}
const isE2True = function () {
  try {
    const e2 = document.getElementById("e2Select");
    const e2Num = Number(e2.options[e2.selectedIndex].value);
    return (e2Num > 0 ? true : false);
  } catch (error) {
    return false;
  }
}

const E1InfoBox = () => {
  if (!isE1True()) {
    return null
  }
  return (
    <div className="SelectionItemBottomItem">
      <div className="e1DetailInfo">
        <label htmlFor="">회사 소개 사이트 주소</label><br />
        <input type="text" name="companyName" className="company_url" />
      </div>
    </div>
  )
}

const E2InfoBox = function () {
  if (!isE2True()) {
    return null
  }
  const result = []
  try {
    const e2 = document.getElementById("e2Select");
    const e2Num = Number(e2.options[e2.selectedIndex].value);
    for (let i = 0; i < e2Num; i++) {
      result.push(
        <div>
          <h5>품목{i + 1}</h5>
          <div className="e2DetailInfo">
            <label htmlFor="product">제품명</label><br />
            <input type="text" name="product" className="eslProductName" /><br />
            <label htmlFor="value">가격</label><br />
            <input type="text" name="value" className="eslProductPrice" />
          </div></div>)
    }
    return (
      <div className="SelectionItemBottomItemBottom">
        {result.map(item => (
          item
        ))}
      </div>
    );
  } catch (error) {
    return null
  }
}

export default function Spec() {

  const specs = useLocation().state;
  console.log(specs);

  const [totalPrice, setTotalPrice] = useState(0);

  const [eslNum, setEslNum] = useState([0, 0, 0]);
  var boothPrice = 0;
  if (specs.type == 'a') {
    boothPrice = 100;
  } else if (specs.type == 'b') {
    boothPrice = 150;
  } else if (specs.type == 'c') {
    boothPrice = 200;
  } else {
    boothPrice = 0;
  }

  const [booth, setBooth] = useState(boothPrice);

  const handleEslNum = (e) => {
    const e1 = document.getElementById("e1Select");
    const e2 = document.getElementById("e2Select");
    const e3 = document.getElementById("e3Select");
    const e1Num = Number(e1.options[e1.selectedIndex].value);
    const e2Num = Number(e2.options[e2.selectedIndex].value);
    const e3Num = Number(e3.options[e3.selectedIndex].value);
    setEslNum([e1Num, e2Num, e3Num]);
    // setEslPrice(eslNum[0]*2 + eslNum[1]*3 + eslNum[2]*4);
  }

  const [atype, setAType] = useState(specs.type == 'a' ? true : false);
  const [btype, setBType] = useState(specs.type == 'b' ? true : false);
  const [ctype, setCType] = useState(specs.type == 'c' ? true : false);

  // const [companyURL, setcompanyURL] = useState("https://eservate.com");

  const handleBoothPrice = (e) => {
    const boothType = e.target.value;

    if (boothType == 1) {
      setBooth(100)
    } else if (boothType == 2) {
      setBooth(150);
    }
    else if (boothType == 3) {
      setBooth(200);
    }
  }




  const handleSubmit = (e) => {
    // e.preventDefault();
    const email = document.getElementById("defaultInfoTable_managerEmail").value;
    const name = document.getElementById("defaultInfoTable_managerName").value;

    const managerNum = document.getElementById("defaultInfoTable_managerNum").value;

    const companyName = document.getElementById("defaultInfoTable_companyName").value;
    const companyId = document.getElementById("defaultInfoTable_companyId").value;


    const companyNum = () => {
      const companyNum_back = document.getElementById("defaultInfoTable_companyNum").value;
      return companyNum_back;
    }

    const passNameRow = document.getElementsByClassName("passNameRow");
    const passRankRow = document.getElementsByClassName("passRankRow");
    const passTelRow = document.getElementsByClassName("passTelRow");

    const passTotalArray = [];
    for (let i = 0; i < 6; i++) {
      if (passNameRow[i].value != '') {
        passTotalArray.push({
          'companyId': companyId,
          'name': passNameRow[i].value,
          'position': passRankRow[i].value,
          'number': passTelRow[i].value
        })
      }
    }

    const eslProductName = document.getElementsByClassName("eslProductName");
    const eslProductPrice = document.getElementsByClassName("eslProductPrice");

    const eslproduct = [];
    for (let i = 0; i < eslNum[1]; i++) {
      if (eslProductName[i].value != '') {
        eslproduct.push({
          'product_name': eslProductName[i].value,
          'product_price': eslProductPrice[i].value
        })
      }
    }

    const eslCompanyUrl = document.getElementsByClassName("company_url");

    const eslurl = [];
    for (let i = 0; i < eslNum[0]; i++) {
      if (eslCompanyUrl[i].value != '') {
        eslurl.push({
          'url': eslCompanyUrl[i].value
        })
      }
    }


    // let selectionInfo = {
    //   boothId: specs.boothId,
    //   email: email,
    //   name: name,
    //   managerNum: managerNum,
    //   companyName: companyName,
    //   companyId: companyId,
    //   companyNum: companyNum(),
    //   passArray: passTotalArray,
    //   eslNum: eslNum,
    //   totalPrice: eslNum[0]*2 + eslNum[1]*3 + eslNum[2]*4 + booth
    // };
    let selectionInfo = {
      boothId: specs.boothId,
      companyId: companyId,
      passArray: passTotalArray,
      eslNum: eslNum,
      eslproduct: eslproduct,
      eslurl: eslurl,
      totalPrice: eslNum[0] * 2 + eslNum[1] * 3 + eslNum[2] * 4 + booth
    };

    console.log(selectionInfo);
    var reserveResultMsg = "";
    try {
      axios.post("/reservateBooth", selectionInfo)
        .then((res) => {
          // console.log(res);
          if (res.data.resultCd == 'S') {
            reserveResultMsg = res.data.msg;
          } else if (res.data.resultCd == 'E') {
            reserveResultMsg = res.data.msg;
          }
          alert(reserveResultMsg)
          window.location.href = "/selection"
          // console.log(reserveResultMsg)
        });
    } catch (error) {
      console.log(error);
    }
  }
  //사용자 기본 정보 값 가져와서 초기화 해놓기
  const [companyName, setCompanyName] = useState();
  const [companyId, setCompanyId] = useState();
  const [managerName, setManagerName] = useState();
  const [companyNum, setCompanyNum] = useState();
  const [managerNum, setManagerNum] = useState();
  const [managerEmail, setManagerEmail] = useState();

  useEffect(() => { //session에서 받아온 유저정보
    try {
      axios.get("/getUserInfoFromSession")
        .then((response) => {
          if (response.data != null) {
            setCompanyName(response.data.companyName);
            setCompanyId(response.data.companyId);
            setManagerName(response.data.managerName);
            setCompanyNum(response.data.companyNum);
            setManagerNum(response.data.managerNum);
            setManagerEmail(response.data.managerEmail);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  // data.map((item)=>{
  //   setManagerEmail(item.email)
  //   console.log(item.email)
  // });

  //  setCompanyName(userData.company_name)
  //  setCompanyId(userData.company_id)
  //  setManagerName(userData.manager)
  //  setCompanyNum(userData.company_phone_num)
  //  setManagerNum(userData.manager_phone_num)
  //  setManagerEmail(userData.email)
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
                  <div className="SelectionItemIndex">1</div>
                  <div className="SelectionItemTitle">기본 정보 입력</div>
                </div>
                <div className="SelectionItemBottom">
                  <div className="defaultInfoTable">
                    <div className="inputTag">
                      <label className="InfoTableLabel" htmlFor="companyName">회사이름</label><br />
                      <input type="text" className="specInput" id="defaultInfoTable_companyName" defaultValue={companyName} />
                    </div>
                    <div className="inputTag">
                      <label className="InfoTableLabel" htmlFor="companyId">사업자 등록번호</label><br />
                      <input type="number" className="specInput" id="defaultInfoTable_companyId" defaultValue={companyId} />
                    </div>
                    <div className="inputTag">
                      <label className="InfoTableLabel" htmlFor="managerName">담당자 이름</label><br />
                      <input type="text" className="specInput" id="defaultInfoTable_managerName" defaultValue={managerName} />
                    </div>
                    <div className="inputTag">
                      <label className="InfoTableLabel" htmlFor="companyNum">회사 전화번호</label><br />
                      <input type="text" className="specInput" id="defaultInfoTable_companyNum" defaultValue={companyNum} />
                    </div>
                    <div className="inputTag">
                      <label className="InfoTableLabel" htmlFor="managerNum">담당자 전화번호</label><br />
                      <input type="text" className="specInput" id="defaultInfoTable_managerNum" defaultValue={managerNum} />
                    </div>
                    <div className="inputTag">
                      <label className="InfoTableLabel" htmlFor="managerEmail">담당자 이메일</label><br />
                      <input type="email" className="specInput" id="defaultInfoTable_managerEmail" defaultValue={managerEmail} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="SelectionItem">
                <div className="SelectionItemTop">
                  <div className="SelectionItemIndex">2</div>
                  <div className="SelectionItemTitle">부스 타입 선택</div>
                </div>
                <div className="SelectionItemBottom">
                  <div className="SelectionItemBottomItems">
                    <div className="SelectionItemBottomItem">
                      <img src="/assets/icons/622.png" alt="booth1" />
                      <div className="selectionConatiner">
                        <label htmlFor="B1">A타입<br />100만원</label>
                        <input id="typea" type="radio" name="boothRadio" checked={atype} value="a" onChange={handleBoothPrice} />
                      </div>
                    </div>
                    <div className="SelectionItemBottomItem">
                      <img src="/assets/icons/647.png" alt="booth2" />
                      <div className="selectionConatiner">
                        <label htmlFor="B2">B타입<br />150만원</label>
                        <input id="typeb" type="radio" name="boothRadio" checked={btype} value="b" onChange={handleBoothPrice} />
                      </div>
                    </div>
                    <div className="SelectionItemBottomItem">
                      <img src="/assets/icons/649.png" alt="booth3" />
                      <div className="selectionConatiner">
                        <label htmlFor="B3">C타입<br />200만원</label>
                        <input id="typec" type="radio" name="boothRadio" checked={ctype} value="c" onChange={handleBoothPrice} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="SelectionItem">
                <div className="SelectionItemTop">
                  <div className="SelectionItemIndex">3</div>
                  <div className="SelectionItemTitle">ESL 대여</div>
                </div>
                <div className="SelectionItemBottom">
                  <div className="SelectionItemBottomItems">
                    <div className="newSelectionItemContainer">
                      <div className="SelectionItemBottomItem">
                        <h4>회사안내 ESL</h4>
                        <img src="/assets/icons/esl1.png" alt="esl image" />
                        <div className="selectionConatiner">
                          <label htmlFor="ESL_E1">E1<br />기기당<br />2만원</label>
                          <select id="e1Select" name="ESL_E1" className="eslSelectionBOX" onChange={handleEslNum}>
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                          </select>
                        </div>
                      </div>
                      {
                        isE1True() && <E1InfoBox />
                      }
                    </div>
                    <div className="newSelectionItemContainer">
                      <div className="SelectionItemBottomItem">
                        <h4>제품 안내 ESL</h4>
                        <img src="/assets/icons/esl2.png" alt="esl image" />
                        <div className="selectionConatiner">
                          <label htmlFor="ESL_E2">E2<br />기기당<br />3만원</label>
                          <select id="e2Select" name="ESL_E2" className="eslSelectionBOX" onChange={handleEslNum}>
                            <option defaultValue value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                      </div>
                      {
                        isE2True() && <E2InfoBox />
                      }
                    </div>
                    <div className="SelectionItemBottomItem">
                      <h4>기타 ESL</h4>
                      <img src="/assets/icons/esl.png" alt="esl image" />
                      <div className="selectionConatiner">
                        <label htmlFor="ESL_E3">E3<br />기기당<br />4만원</label>
                        <select id="e3Select" name="ESL_E3" className="eslSelectionBOX" onChange={handleEslNum}>
                          <option value="0">0</option>
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
                  <div className="SelectionItemIndex">4</div>
                  <div className="SelectionItemTitle">출입증 신청</div>
                </div>
                <div className="SelectionItemBottom">
                  <div className="passEnrollTable">
                    <div className="passFieldRow" id="passNum">순번</div>
                    <div className="passFieldRow" id="passName">이름</div>
                    <div className="passFieldRow" id="passRank">직위</div>
                    <div className="passFieldRow" id="passTel">연락처</div>
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
                <div className="DescTopBoothnum">{specs.section}-{specs.type}{specs.layer}{specs.number}</div>
                {/* 앞의 페이지에서 고른 정보 가져와서 구여 타입 부스넘버 적을 것 */}
                <div className="DescTopBoothnumDetail">{specs.section}구역 {specs.type}타입 {specs.layer}{specs.number}</div>
                {/* 앞의 페이지에서 고른 정보 가져와서 구여 타입 부스넘버 적을 것 */}
              </div>
              <div className="DashboardDescBottom">
                <div className="DescBottomItemDate">
                  <div className="DescBottomItemTitle">기간</div>
                  <div className="DescBottomItemDetail">21년 10월 5일 (수) ~<br /> 10월 9일 (월)</div>
                </div>
                <div className="DescBottomItem">
                  <div className="DescBottomItemTitle">부스</div>
                  <div className="DescBottomItemDetail">{booth}만원</div>
                </div>
                <div className="DescBottomItem">
                  <div className="DescBottomItemTitle">ESL</div>
                  <div className="DescBottomItemDetail">
                    {eslNum[0] + eslNum[1] + eslNum[2] == 0 ? 0 : eslNum[0] * 2 + eslNum[1] * 3 + eslNum[2] * 4}만원
                  </div>
                </div>
                <div className="eslClasses">
                  <div className="eslClass">
                    <div className="eslClassTitle">E1</div>
                    <div className="eslClassNum">{eslNum[0] == 0 ? 0 : eslNum[0]}개</div>
                  </div>
                  <div className="eslClass">
                    <div className="eslClassTitle">E2</div>
                    <div className="eslClassNum">{eslNum[1] == 0 ? 0 : eslNum[1]}개</div>
                  </div>
                  <div className="eslClass">
                    <div className="eslClassTitle">E3</div>
                    <div className="eslClassNum">{eslNum[2] == 0 ? 0 : eslNum[2]}개</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reservationDashboardCost">
              <div className="reservationDashboardCostTitle">총 금액</div>
              <div className="reservationDashboardCostNum">{eslNum[0] * 2 + eslNum[1] * 3 + eslNum[2] * 4 + booth == 0 ? 0 : eslNum[0] * 2 + eslNum[1] * 3 + eslNum[2] * 4 + booth}만원</div>
            </div>
            <SpecModal handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}