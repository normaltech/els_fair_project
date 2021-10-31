import React from 'react';
import '../mainfirst/mainfirst.css';

export const ExInfo = ({name, place, startDate, endDate}) => (       
                <div className="exInfo">
                    <div className="exImg"><img src="/assets/eximg1.png" alt="전시회 사진" /></div>
                    <div className="detailInfo">
                        <div>
                            <span>전시회</span>
                            <span>{name}</span>
                        </div>
                        <div>
                            <span>장소</span>
                            <span>{place}</span>
                        </div>
                        <div>
                            <span>기간</span>
                            <span>{startDate} ~ {endDate}</span>
                        </div>
                    </div>
                    <div className="moreInfo">
                        <button className="exButton" type="button"><span className="buttonWord">더 알아보기</span><img className="arrowImg" src="/assets/arrow.png" alt="화살표이미지" /></button>
                    </div>
                </div>    
);