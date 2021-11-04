import React, { useState,useEffect } from 'react';
import './mainfirst.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ExMonth } from '../mainfristinfo/ExMonth';
import { Notice } from '../mainfristinfo/Notice';
import axios from 'axios';

function useFetch(url){
    const [data, setData] = useState([])
    async function fetchUrl(){
        const response = await fetch(url);
        const json = await response.json();

        setData(json);
    }

    useEffect(() => {
        fetchUrl();
     },[]);

    return data;
}

export default function Mainfirst() {
    const [num, setNum] = useState('1')
    const [exhibition, setExhibition] = useState('에스씨엠 페어 2021')
    const [title, setTitle] = useState('킨덱스 캠핑 박람회 참가 기업 모집')
    const [date, setDate] = useState('2021-10-03')
    const data = useFetch("/ExhibitionMonthList");
    const items = [];
    
    data.map(
        (item)=>{items.push(<ExMonth key={item.month} month={item.month}/>)}
    )

    const click = (e) => {
        console.log(e);
    }
    return(
        <>
            <Header />
            <div className="headerWrap">
                <div className="imgWrap"><img src="/assets/headerpic.png" alt="headerpicture" /></div>
                <div className="wordWrap">참가 접수 중인 전시회</div> 
            </div>
            {/* 공지사항 */}
            <div className="noticeContainer">
                <div className="borderSection">
                    <div className="notice">공지사항</div>
                    <hr className="line" />
                </div>
                <div className="noticeInfo">
                    <div className="noticeNav">
                        <div className="n1">번호</div>
                        <div className="n2">전시회</div>
                        <div className="n3">제목</div>
                        <div className="n4">날짜</div>
                        {/* <div className="n5">선택</div> */}
                    </div>
                    <Notice num={num} exhibition={exhibition} title={title} date={date} />
                    <Notice num={num} exhibition={exhibition} title={title} date={date} />
                    <Notice num={num} exhibition={exhibition} title={title} date={date} />
                    <Notice num={num} exhibition={exhibition} title={title} date={date} />
                    <Notice num={num} exhibition={exhibition} title={title} date={date} />
                    <div className="pageWrap">
                        <Stack className="page" spacing={2}>
                            <Pagination count={10} color="primary" onClick={click} />
                        </Stack>
                    </div>
                </div>
            </div>
            {/* 월별 전시정보 */}

            {/*
                1. 현재 년도를 받아온다.
                2. 현재 년도와 데이터베이스에서 받아온 년도와 일치한 데이터들만 받아온다.
                3. 1월 2월 3월... 11월 12월 월별로 데이터를 출력해야한다.
            */}
            {items}
            
            {/* <Footer /> */}
        </>
    )
}