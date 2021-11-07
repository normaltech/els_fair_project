import React, { useState,useEffect } from 'react';
import './mainfirst.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Stack from '@mui/material/Stack';
import { ExMonth } from '../mainfristinfo/ExMonth';
import { Notice } from '../mainfristinfo/Notice';
import Pagenation from '../mainfristinfo/Pagenation';
import Posts from '../mainfristinfo/Posts';
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
    // const [num, setNum] = useState('1')
    // const [exhibition, setExhibition] = useState('에스씨엠 페어 2021')
    // const [title, setTitle] = useState('킨덱스 캠핑 박람회 참가 기업 모집')
    // const [date, setDate] = useState('2021-10-03')

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(5);
  
    useEffect(()=>{
      const fetchPosts = async () =>{
        setLoading(true);
        const res = await axios.get('/getNotice');
        setPosts(res.data);
        setLoading(false);
      }
  
      fetchPosts();
    }, [])
  
    //현재 파일 가져오기
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    //페이지 바꾸기
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                    {console.log('postPerPage :'+postPerPage +'\n'+'postslength: :'+posts.length)}
                    <Posts posts={currentPosts} loading={loading}/>
                    <Pagenation postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
                   
                    {/* <Notice num={num} exhibition={exhibition} title={title} date={date} />
                    <Notice num={num} exhibition={exhibition} title={title} date={date} />
                    <Notice num={num} exhibition={exhibition} title={title} date={date} />
                    <Notice num={num} exhibition={exhibition} title={title} date={date} />
                    <Notice num={num} exhibition={exhibition} title={title} date={date} />
                    <div className="pageWrap">
                        <Stack className="page" spacing={2}>
                            <Pagination count={10} color="primary" onClick={click} />
                        </Stack>
                    </div> */}
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