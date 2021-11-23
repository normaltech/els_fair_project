import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../mainfirst/mainfirst.css';
import axios from 'axios';

export const ExInfo = ({name, place, startDate, endDate, image}) => {       
    const [userExist, setUserExist] = useState(false)

    useEffect(() => { //session에서 받아온 유저정보
      try {
        axios.get("/getuserinfo")
        .then((response) => {
          if(response.data.manager){
            setUserExist(true);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }, []);
    const checkUserExist = () =>{
        if(userExist == true){
            window.location.href= "/selection"
        }else{
            alert("로그인이 필요한 서비스입니다.")
            window.location.href= "/login"
        }
    }
    return(
        <div className="exInfo">
            {/* <div className="exImg"><img src="/assets/eximg1.png" alt="전시회 사진" /></div> */}
            <div className="exImg"><img src={image} alt="전시회 사진" /></div>
            <div className="detailInfo">
                <div>
                    <span className="exinfo_span_title">전시회</span>
                    <span className="exinfo_span_info exinfo_sapn_first">{name}</span>
                </div>
                <div>
                    <span className="exinfo_span_title">장소</span>
                    <span className="exinfo_span_info">{place}</span>
                </div>
                <div>
                    <span className="exinfo_span_title">기간</span>
                    <span className="exinfo_span_info">{startDate} ~ {endDate}</span>
                </div>
            </div>
            <div className="moreInfo">
                <button className="exButton" type="button" onClick={checkUserExist}><span className="buttonWord">더보기</span><img className="arrowImg" src="/assets/arrow.png" alt="화살표이미지" /></button>
            </div>
        </div>   
    )
};