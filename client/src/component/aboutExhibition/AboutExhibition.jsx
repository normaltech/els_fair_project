import React, { useState, useEffect } from 'react';
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './aboutexhibition.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AboutExhibition() {
  const [company_id, setcompany_id] = useState('');
  const [manager, setmanager] = useState('');
  const [manager_phone_num, setmanager_phone_num] = useState('');
  const [email, setemail] = useState('');


  useEffect(() => { //session에서 받아온 유저정보
    try {
      axios.get("/getuserinfo")
        .then((response) => {
          setcompany_id(response.data.company_id);
          setmanager(response.data.manager);
          setmanager_phone_num(response.data.manager_phone_num);
          setemail(response.data.email);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);


  return (
    <div className="aboutExhibitionPage">
      <Header />
      <div className="aboutExhibitionContainer">
        <div className="exhibitionInfo time">
          <h2>전시장 정보</h2>
          <div className="ainfoContainer">
            <div className="infoSubTitle">관람 시간 안내</div>
            <div className="infoParagraph bigger">월~화 10:00 ~ 18:00</div>
          </div>
          <div className="ainfoContainer">
            <div className="infoSubTitle">전시장 층별 안내도</div>
            <div className="infoParagraph bigger">1층 메인 전시관</div>
            <div className="infoParagraph bigger">2층 컨퍼런스홀</div>
            <div className="infoParagraph bigger">3층 대강당</div>
          </div>
        </div>
        <div className="exhibitionInfo howtocome">
          <h2>오시는 길</h2>
          <div className="howtocomeParagraph">
            <div className="howtocomeLeft">
              <img src="/assets/exhibition/19.png" alt="mapimg" />
            </div>
            <div className="howtocomeRight">
              <div className="ainfoContainer">
                <div className="infoSubTitle">세종 전시장</div>
                <div className="infoParagraphContainer">
                  <div className="infoParagraph bigger sp st">도로명</div>
                  <div className="infoParagraph bigger sp">서울 광진구 능동로 209 세종대학교</div>
                </div>
                <div className="infoParagraphContainer">
                  <div className="infoParagraph bigger sp st">지번</div>
                  <div className="infoParagraph bigger sp">서울 광진구 군자동 98 세종대학교</div>
                </div>
                <div className="infoParagraphContainer">
                  <div className="infoParagraph bigger sp st">우편</div>
                  <div className="infoParagraph bigger sp">05006</div>
                </div>
              </div>
              <div className="ainfoContainer">
                <div className="infoSubTitle">찾아오는 길</div>
                <div className="infoParagraph bigger">어린이대공원역 6번 출구에서 약 300M거리에 위치함</div>
              </div>
            </div>
          </div>
        </div>
        <div className="exhibitionInfo developers">
          <h2>개발자</h2>
          <div className="developersParagraph">
            <div className="developersLeft ainfoContainer">
              <div className="part">
                <div className="infoSubTitle part">FrontEnd</div>
                <div className="partHan">프론트엔드 개발자</div>
              </div>
              <div className="developerNameContainer">
                <div className="developerName">박재형</div>
                <div className="developerName">심재호</div>
              </div>
              <div className="stacks">
                <div className="infoParagraph">- HTML</div>
                <div className="infoParagraph">- CSS</div>
                <div className="infoParagraph">- REACT JS</div>
              </div>
            </div>
            <div className="developersRight ainfoContainer">
              <div className="part">
                <div className="infoSubTitle part">BackEnd</div>
                <div className="partHan">백엔드 개발자</div>
              </div>
              <div className="developerNameContainer">
                <div className="developerName">최종혁</div>
                <div className="developerName">정행석</div>
              </div>
              <div className="stacks">
                <div className="infoParagraph">- REACT JS</div>
                <div className="infoParagraph">- NODE JS</div>
                <div className="infoParagraph">- MYSQL</div>
              </div>
            </div>
          </div>
        </div>
        <div className="exhibitionInfo corps">
          <h2>산학 연계 기업</h2>
          <div className="aboutCorp ainfoContainer">
            <div className="corpLogoBox">
              <img src="/assets/exhibition/aetsLogo.png" alt="corpLogo" />
            </div>
            <div className="corpTitle">
              <img src="/assets/exhibition/659.png" alt="" />
            </div>
          </div>
          <div className="projectHistory">
            <img src="/assets/exhibition/658.png" alt="historyline" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}