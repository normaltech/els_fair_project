import React, { useEffect, useRef, useState } from 'react'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Footer from '../footer/Footer'
import Header from '../header/Header';
import Booth from '../booth/Booth';
import './selectbooth.css';
import {RiUserSearchFill} from 'react-icons/ri';
import Modal from './boothmodal/BoothModal';
import BoothModal from './boothmodal/BoothModal';
import axios from 'axios';

export default function SelectBooth() {
  const layer_1 = 1;
  const layer_2 = 2;
  const layer_3 = 3;

  //검색기능 구현
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  useEffect(()=>{
    const searchInput = document.getElementById("searchInput").value;
    axios.get("/getSearchData").then((res)=>{
      // console.log(res.data[1]);
      setAllData(res.data[1]);
      //처음 랜더링 될때 데이터가 들어가서 깜빡이는 현상 없애기 위한 코드
      if(searchInput.length != 0){
        setFilteredData(res.data[1]);
      }
    })
  },[])
  
  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value.length)
    if(value.length>0){
    // result = allData.filter
    result = allData.filter((data)=>{
      if(data.company_name.search(value) != -1){
        return data.boothname;
      }
      // return data.company_name.search(value) != -1;
    });
    setFilteredData(result);
    }else{
      //boothname을 none으로 설정해서 값을 보내야지 값이 초기화된다.
      setFilteredData([{id:"1",boothname:"none"}]);
    }
  }

  //구역 선택시 해당 구역 색상 표시
  const clickSection = (e) => {
    // console.log((e.target.id).slice(-1)==="A" ? true : false);
    toggleSectionColor(e.target.id); //section_A
    const targetClassName = (e.target.id).slice(-1); //A나 B
    toggleBoothColor(targetClassName);
  }

  const toggleSectionColor = (target) => {
    if(document.getElementsByClassName('fontActive')){
      const pre = document.getElementsByClassName('fontActive');
      for(let i = 0; i < pre.length; i++){
        pre[i].classList.toggle('fontActive');
      }
    }
    document.getElementById(target).classList.toggle('fontActive');
  }

  const toggleBoothColor = (target) => {
    if(document.querySelectorAll('.borderActive')){
      const pre = document.querySelectorAll('.borderActive');  
      console.log(pre);
      for(let item of pre){
        console.log(item);
        item.classList.toggle('borderActive');
      }
    }
    console.log(`.${target}`);
    const targetBoothes = document.querySelectorAll(`.${target}`); //부스들
    targetBoothes.forEach((booth)=>{
      booth.classList.toggle('borderActive');
    })
  }
  //현재 기기 해상도 가로 세로 크기 가져오기
  function getDisplayInfo() {
    var size = {
      width: window.innerWidth || document.body.clientWidth,
      height: window.innerHeight || document.body.clientHeight
    }
    return size;
  }
  function setElementById(obj, value) {
    var target = document.getElementById(obj);
    target.innerHTML = value;
  }
  const handleWidth = () =>{
    var size = getDisplayInfo();
    setElementById("boothInfo",size.width);
  }

  const [ratio, setRatio] = useState(1);
  const booth_module = useRef();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFloorButton = (e) => {
    if(document.querySelector('.rightButtonActive')){
      const pre = document.querySelector('.rightButtonActive');
      pre.classList.toggle('rightButtonActive');
    }
    document.getElementById(e.currentTarget.id).classList.toggle('rightButtonActive');
  }

  return (
    <div className="selectionPageConainer">
      <Header />
      <img src="/assets/icons/eservate.png" alt="" className="selectBoothImg" />

      {/* 상단 배너 */}

      <div id="boothGuide" className="boothGuideContainer">
        <div className="boothGuideContainerTitle">예약 안내</div>
        <div className="boothGuideContainerStepsContiner">
          <div className="step">
            <div className="stepTitle">STEP 1</div>
            <div className="stepImgBox">
              <img src="/assets/icons/user.png" alt="user" className="stepImg" />
            </div>
            <div className="stepName">로그인 (회원가입)</div>
            <div className="stepDescription">부스를 예약하기 위해 로그인 및 회원가입을 해주셔야 합니다.</div>
          </div>
          <div className="step">
            <div className="stepTitle">STEP 2</div>
            <div className="stepImgBox">
              <img src="/assets/icons/159.png" alt="booth info check" className="stepImg" />
            </div>
            <div className="stepName">부스 정보 확인</div>
            <div className="stepDescription">아래 도면을 확인하고 부스에 대한 정보를 상세히 파악한 후, 예약 버튼을 눌러 예약을 진행하세요.</div>
          </div>
          <div className="step">
            <div className="stepTitle">STEP 3</div>
            <div className="stepImgBox">
              <img src="/assets/icons/notes.png" alt="note image" className="stepImg" />
            </div>
            <div className="stepName">온라인 참가신청서 작성</div>
            <div className="stepDescription">양식에 맞춰 모든 항목에 대한 내용을 기입하고 결제를 진행하세요.</div>
          </div>
          <div className="step">
            <div className="stepTitle">STEP 4</div>
            <div className="stepImgBox">
              <img src="/assets/icons/esl.png" alt="esl image" className="stepImg" />
            </div>
            <div className="stepName">ESL 대여</div>
            <div className="stepDescription">회사 설명 및 물품 설명에 도움이 될 ESL기기를 대여하세요.</div>
          </div>
        </div>
      </div>

      {/*예약안내칸 */}

      <div className="boothInfoContainer" id="boothInfo">
        <div className="boothInfoContainerTitle">
          <img src="" alt="" className="boothInfoContainerTitleImg" />
          <div className="boothInfoContainerTitleText">부스 배치도</div>
        </div>
        <TransformWrapper
          initialScale={1} 
          disabled={true}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <React.Fragment>
              {/* <div className="tools">
                    <button onClick={() => zoomIn()}>+</button>
                    <button onClick={() => zoomOut()}>-</button>
                    <button onClick={() => resetTransform()}>x</button>
                  </div> */}
              <a name="booth_target"></a>
              <div className="boothInfoContainerMain">
                <div className="boothInfoContainerLeftBox">
                  <div className="boothInfoSearchContainer">
                    <div className="sectionBox">
                      <button id="section_A" className="section" onClick={clickSection}>A 구역</button>
                      <button id="section_B" className="section" onClick={clickSection}>B 구역</button>
                      <button id="section_C" className="section" onClick={clickSection}>C 구역</button>
                      <button id="section_D" className="section" onClick={clickSection}>D 구역</button>
                      <button id="section_E" className="section" onClick={clickSection}>E 구역</button>
                      <button id="section_F" className="section" onClick={clickSection}>F 구역</button>
                      <button id="section_G" className="section" onClick={clickSection}>G 구역</button>
                      <button id="section_H" className="section" onClick={clickSection}>H 구역</button>
                      <button id="section_I" className="section" onClick={clickSection}>I 구역</button>
                    </div>
                      {/* <div>{filteredData.map((value,index)=>{
                        return(<div key={value.id}>{value.boothname}</div>)
                      })}</div> */} 
                    <div className="boothSearchBarContainer">
                      <input type="text" id="searchInput" className="searchBarInput" onChange={(event)=> handleSearch(event)} placeholder="검색하실 기업을 입력해주세요." />
                      <div className="searchMirror" ratio={ratio}><RiUserSearchFill size="28"/></div>
                    </div>
                  </div>
                  <TransformComponent>
                    <div className="boothMainPicuture">
                      <Booth className="selectbooth_layer1" searchData={filteredData.map((value)=>{return value.boothname})} layer={layer_1} ref={booth_module} handleOpen={handleOpen} handleClose={handleClose}/>
                      {/* <Booth className="selectbooth_layer2" layer = {layer_2}/> */}
                      {/* <Booth className="selectbooth_layer3" layer = {layer_3}/> */}
                      {/* 3개의 Booth태그 대신 옆에 층을 클릭했을때(className="floor") 나타나게 하는방식으로 props로 층을주고 */}
                    </div>
                  </TransformComponent>
                </div>
                <div className="boothInfoContainerRightBox">
                  <div className="selectFloorButtons">
                    <button id="rightA" onClick={handleFloorButton} className="floor rightButtonActive">
                      <div className="floorNum">1층</div>
                      <div className="hallName">전시홀 A</div>
                    </button>
                    <button id="rightB" onClick={handleFloorButton} className="floor">
                      <div className="floorNum">2층</div>
                      <div className="hallName">전시홀 B</div>
                    </button>
                    <button id="rightC" onClick={handleFloorButton} className="floor">
                      <div className="floorNum">3층</div>
                      <div className="hallName">전시홀 C</div>
                    </button>
                  </div>
                  <div className="enlargeConatiner">
                    <button className="enlargeButton" onClick={() => zoomIn()}>+</button>
                    <button className="enlargeButton" onClick={() => zoomOut()}>-</button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </TransformWrapper>
      </div>
    </div>
  )
}
