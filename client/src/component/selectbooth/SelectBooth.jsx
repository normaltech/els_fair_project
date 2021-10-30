import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header';
import './selectbooth.css';

export default function SelectBooth() {
  return (
    <>
      <Header/>
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
        <div className="boothInfoContainerMain">
          <div className="boothInfoContainerLeftBox">
            <div className="boothInfoSearchContainer">
              <div className="sectionBox">
                <div className="section">A 구역</div>
                <div className="section">B 구역</div>
                <div className="section">C 구역</div>
                <div className="section">D 구역</div>
                <div className="section">E 구역</div>
                <div className="section">F 구역</div>
                <div className="section">G 구역</div>
                <div className="section">H 구역</div>
                <div className="section">I 구역</div>
              </div>
              <div className="boothSearchBarContainer">
                <input type="text" className="searchBarInput" placeholder="검색하실 기업을 입력해주세요."/>
                <img src="/assets/icons/iconAwesomeSearch.png" alt="" className="searchMirror" />
              </div>
            </div>
            <div className="boothMainPicuture">
                boothmain
            </div>
          </div>
          <div className="boothInfoContainerRightBox">
            <div className="selectFloorButtons">
              <div className="floor">
                <div className="floorNum">1층</div>
                <div className="hallName">전시홀 A</div>
              </div>
              <div className="floor">
                <div className="floorNum">2층</div>
                <div className="hallName">전시홀 B</div>
              </div>
              <div className="floor">
                <div className="floorNum">3층</div>
                <div className="hallName">전시홀 C</div>
              </div>
            </div>
            <div className="enlargeConatiner">
              <div className="enlargeButton">+</div>
              <div className="enlargeButton">-</div>
            </div>
          </div>
        </div>
      </div>
      {/*부스정보칸 */}
{/* 
      <Footer/> */}
    </>
  )
}
