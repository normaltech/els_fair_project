import React, { useState,useEffect } from 'react';
import './mainfirst.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ExMonth } from '../mainfristinfo/ExMonth';
import { Notice } from '../mainfristinfo/Notice';
import axios from 'axios';

export default function Mainfirst() {
    const [num, setNum] = useState('1')
    const [exhibition, setExhibition] = useState('에스씨엠 페어 2021')
    const [title, setTitle] = useState('킨덱스 캠핑 박람회 참가 기업 모집')
    const [date, setDate] = useState('2021-10-03')
    const [month, setMonth] = useState('9월')
    const [exhibitionName, setExhibitionName] = useState('고카프 킨텍스 박람회')
    const [place, setPlace] = useState('킨텍스')
    const [period, setPeriod] = useState('2021년 10월 1일 (월) ~ 2021년 10월 8일 (월)')

    const [initData, setInitData] = useState([{
        inputData:{
            id:'',
            month:'',
            image:'',
            exhibitionName:'',
            place:'',
            startDate:'',
            endDate:''
        }
    }])

    const [initLastIdx, setInitLastIdx] = useState(0)

    useEffect(async() => {
        try{
            const res = await axios.get('/ExhibitionList')
            console.log(res)
            const _inputData = await res.data.map((rowData) => {
                setInitLastIdx(rowData.idx),
                {
                    id:rowData.id,
                    month:rowData.month,
                    image:rowData.image,
                    exhibitionName:rowData.name,
                    place:rowData.place,
                    startDate:rowData.startDate,
                    endDate:rowData.endDate
                }
            })
            setInitData(initData.concat(_inputData))
        }catch(e){
            console.error(e.message)
        }
    },[])

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(init_Data(initData))
        dispatch(init_lastIdx(initLastIdx))
    },[initData])
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

            <ExMonth month={month} exhibitionName={exhibitionName} place={place} period={period}/>
            {/* <Footer /> */}
        </>
    )
}