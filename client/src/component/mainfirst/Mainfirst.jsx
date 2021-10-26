import React from 'react';
import './mainfirst.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Mainfirst() {
    return(
        <>
            <Header />
            <div className="headerWrap">
                <div className="imgWrap"><img src="/assets/headerpic.png" alt="headerpicture" /></div>
                <div className="wordWrap">참가중인 전시회</div>  {/* 폭 줄일때 글씨가 내려감 */}
            </div>
            {/* 공지사항 */}
            <div className="noticeContainer">
                <div className="borderSection">
                    <div className="notice">공지사항</div>
                    <hr className="line" />
                </div>
                {/* mui material */}
                <div className="noticeInfo">
                    <div className="noticeNav">
                        <div className="n1">번호</div>
                        <div className="n2">전시회</div>
                        <div className="n3">제목</div>
                        <div className="n4">날짜</div>
                        <div className="n5">선택</div>
                    </div>
                    <div className="noticeDetail">
                        <div className="n1">1</div>
                        <div className="n2">에스씨엠 페어 2021</div>
                        <div className="n3">킨덱스 캠핑 박람회 참가 기업 모집</div>
                        <div className="n4">2021-10-03</div>
                        <div className="n5"><input type="checkbox" /></div>
                    </div>
                    <div className="noticeDetail">
                        <div className="n1">2</div>
                        <div className="n2">에스씨엠 페어 2021</div>
                        <div className="n3">킨덱스 캠핑 박람회 참가 기업 모집</div>
                        <div className="n4">2021-10-03</div>
                        <div className="n5"><input type="checkbox" /></div>
                    </div>
                    <div className="noticeDetail">
                        <div className="n1">3</div>
                        <div className="n2">에스씨엠 페어 2021</div>
                        <div className="n3">킨덱스 캠핑 박람회 참가 기업 모집</div>
                        <div className="n4">2021-10-03</div>
                        <div className="n5"><input type="checkbox" /></div>
                    </div>
                    <div className="noticeDetail">
                        <div className="n1">4</div>
                        <div className="n2">에스씨엠 페어 2021</div>
                        <div className="n3">킨덱스 캠핑 박람회 참가 기업 모집</div>
                        <div className="n4">2021-10-03</div>
                        <div className="n5"><input type="checkbox" /></div>
                    </div>
                    <div className="noticeDetail">
                        <div className="n1">5</div>
                        <div className="n2">에스씨엠 페어 2021</div>
                        <div className="n3">킨덱스 캠핑 박람회 참가 기업 모집</div>
                        <div className="n4">2021-10-03</div>
                        <div className="n5"><input type="checkbox" /></div>
                    </div>
                    <div className="pageWrap">
                        <Stack className="page" spacing={2}>
                            <Pagination count={10} color="primary" />
                        </Stack>
                    </div>
                </div>
            </div>
            {/* 월별 전시정보 */}
            <div className="infoContainer">
                <div className="borderSection">
                    <div className="notice">9월</div>
                    <hr className="line" />
                </div>
                <div className="exInfo">
                    <div className="exImg"><img src="/assets/eximg1.png" alt="전시회 사진" /></div>
                    <div className="detailInfo">
                        <div>
                            <span>전시회</span>
                            <span>고카프 킨텍스 박람회</span>
                        </div>
                        <div>
                            <span>장소</span>
                            <span>킨텍스</span>
                        </div>
                        <div>
                            <span>기간</span>
                            <span>2021년 10월 1일 (월) ~ 2021년 10월 8일 (월)</span>
                        </div>
                    </div>
                    <div className="moreInfo">
                        <button className="exButton" type="button"><span className="buttonWord">더 알아보기</span><img className="arrowImg" src="/assets/arrow.png" alt="화살표이미지" /></button>
                    </div>
                </div>
                <div className="exInfo">
                    <div className="exImg"><img src="/assets/eximg2.png" alt="전시회 사진" /></div>
                    <div className="detailInfo">
                        <div>
                            <span>전시회</span>
                            <span>고카프 킨텍스 박람회</span>
                        </div>
                        <div>
                            <span>장소</span>
                            <span>킨텍스</span>
                        </div>
                        <div>
                            <span>기간</span>
                            <span>2021년 10월 1일 (월) ~ 2021년 10월 8일 (월)</span>
                        </div>
                    </div>
                    <div className="moreInfo">
                        <button className="exButton" type="button"><span className="buttonWord">더 알아보기</span><img className="arrowImg" src="/assets/arrow.png" alt="화살표이미지" /></button>
                    </div>
                </div>
            </div> 
            <div className="infoContainer">
                <div className="borderSection">
                    <div className="notice">10월</div>
                    <hr className="line" />
                </div>
                <div className="exInfo">
                    <div className="exImg"><img src="/assets/eximg1.png" alt="전시회 사진" /></div>
                    <div className="detailInfo">
                        <div>
                            <span>전시회</span>
                            <span>고카프 킨텍스 박람회</span>
                        </div>
                        <div>
                            <span>장소</span>
                            <span>킨텍스</span>
                        </div>
                        <div>
                            <span>기간</span>
                            <span>2021년 10월 1일 (월) ~ 2021년 10월 8일 (월)</span>
                        </div>
                    </div>
                    <div className="moreInfo">
                        <button className="exButton" type="button"><span className="buttonWord">더 알아보기</span><img className="arrowImg" src="/assets/arrow.png" alt="화살표이미지" /></button>
                    </div>
                </div>
                <div className="exInfo">
                    <div className="exImg"><img src="/assets/eximg2.png" alt="전시회 사진" /></div>
                    <div className="detailInfo">
                        <div>
                            <span>전시회</span>
                            <span>고카프 킨텍스 박람회</span>
                        </div>
                        <div>
                            <span>장소</span>
                            <span>킨텍스</span>
                        </div>
                        <div>
                            <span>기간</span>
                            <span>2021년 10월 1일 (월) ~ 2021년 10월 8일 (월)</span>
                        </div>
                    </div>
                    <div className="moreInfo">
                        <button className="exButton" type="button"><span className="buttonWord">더 알아보기</span><img className="arrowImg" src="/assets/arrow.png" alt="화살표이미지" /></button>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}