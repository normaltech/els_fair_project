import React, { useState, useEffect } from 'react'
import './notice.css';
import axios from 'axios';
import MnoticePosts from './MnoticePosts';
import { MnoticeNotice } from './MnoticeNotice';
import MnoticePagenation from './MnoticePagenation';

function Notice() {

    // const [MnoticeNum, setMnoticeNum] = useState('1')
    // const [MnoticeShow, setMnoticeShow] = useState('에스씨엠 페어 2021')
    // const [MnoticeTitle, setMnoticeTitle] = useState('킨텍스 캠핑 박람회 참가 기업 모집')
    // const [MnoticeDate, setMnoticeDate] = useState('2021-10-03')

    const onClickAdd = () => {
        document.querySelector('.Mnotice_black_bg').style.display = 'block';
        document.querySelector('.Mnotice_noticeModal_wrap').style.display = 'block';
    }

    const onClickCancel = () => {
        document.querySelector('.Mnotice_black_bg').style.display = 'none';
        document.querySelector('.Mnotice_noticeModal_wrap').style.display = 'none';
        document.querySelector('.Mnotice_deleteModal_wrap').style.display = 'none';
    }

    const onClickAddInAdd = () => {
        document.querySelector('.Mnotice_noticeModal_wrap').style.display = 'none';
        document.querySelector('.Mnotice_addSuccess_wrap').style.display = 'block';
    }

    const onClickOk = () => {
        document.querySelector('.Mnotice_black_bg').style.display = 'none';
        document.querySelector('.Mnotice_addSuccess_wrap').style.display = 'none';
        document.querySelector('.Mnotice_deleteSuccess_wrap').style.display = 'none';
    }

    const onClickDelete = () => {
        document.querySelector('.Mnotice_black_bg').style.display = 'block';
        document.querySelector('.Mnotice_deleteModal_wrap').style.display = 'block';
    }

    const onClickDelInDel = () => {
        document.querySelector('.Mnotice_deleteModal_wrap').style.display = 'none';
        document.querySelector('.Mnotice_deleteSuccess_wrap').style.display = 'block';
    }

    // 페이지네이션 변수
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);
    //현재 파일 가져오기
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    //페이지 바꾸기
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(()=>{
        const fetchPosts = async () =>{
          setLoading(true);
          const res = await axios.get(''); // 데이터베이스 가져오기
          setPosts(res.data);
          setLoading(false);
        }
    
        fetchPosts();
      }, [])

    return (
        <>
            <div className='Mnotice_wrap'>
                {/* 상단 검색바 */}
                <div className="Mnotice_search">
                    <input type="text" className="Mnotice_input" placeholder="검색어를 입력하세요." />
                    <img src="/assets/icons/iconAwesomeSearch.png" alt="검색이미지" className="Mnotice_img" />
                </div>
                {/* 공지사항 content */}
                <div className="Mnotice_table_wrap">
                    <table className="Mnotice_table">
                        <tr className="Mnotice_table_tr">
                            <th className="Mnotice_table_padding">번호</th>
                            <th className="Mnotice_table_padding">전시회</th>
                            <th className="Mnotice_table_padding">제목</th>
                            <th className="Mnotice_table_padding">날짜</th>
                            <th className="Mnotice_table_padding">선택</th>
                        </tr>
                        {/* <tr>
                            <td className="Mnotice_table_padding">{MnoticeNum}</td>
                            <td className="Mnotice_table_padding">{MnoticeShow}</td>
                            <td className="Mnotice_table_padding">{MnoticeTitle}</td>
                            <td className="Mnotice_table_padding">{MnoticeDate}</td>
                            <td className="Mnotice_table_padding"><input type="checkbox" /></td>
                        </tr> */}
                        <MnoticePosts posts={currentPosts} loading={loading}/>
                    </table>
                    {/* 여기에도 넣어보기 */}
                </div>
                <div className="Mnotice_bottom_content_wrap">
                    <div className="Mnotice_pagination">
                        {/* 여기에 페이지네이션 */}
                        <MnoticePagenation postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
                        {/* <div><button>페이지네이션</button></div> */}
                    </div>
                    <div className="Mnotice_btn_wrap">
                        <div><button type="button" className="Mnotice_btn_add" onClick={onClickAdd}>추가</button></div>
                        <div><button type="button" className="Mnotice_btn_delete" onClick={onClickDelete}>삭제</button></div>
                    </div>
                </div>
            </div>
            
            {/* 배경흐림 모달창 */}
            <div className="Mnotice_black_bg"></div>
            {/* 추가버튼 -> 공지사항 모달창 */}
            <div className="Mnotice_noticeModal_wrap">
                <div className="Mnotice_noticeModal_word"><span className="Mnotice_noticeModal_word_span">공지사항 작성</span></div>
                <div className="Mnotice_noticeModal_selectTitle Mnotice_noticeModal_padding">전시회 선택</div>
                <div className="Mnotice_noticeModal_padding">
                    <select className="Mnotice_noticeModal_selectInput" name="" id="">
                        <option value="">에스씨엠 페어 2021</option>
                        <option value="">에스씨엠 페어 2022</option>
                        <option value="">에스씨엠 페어 2023</option>
                    </select>
                </div>
                <div className="Mnotice_noticeModal_title Mnotice_noticeModal_padding">제목</div>
                <div className="Mnotice_noticeModal_padding"><input type="text" className="Mnotice_noticeModal_titleInput" placeholder="제목을 입력하세요." /></div>
                <div className="Mnotice_noticeModal_content Mnotice_noticeModal_padding">내용</div>
                <div className="Mnotice_noticeModal_padding"><textarea className="Mnotice_noticeModal_textarea" cols="62" rows="10" placeholder="내용을 입력하세요."></textarea></div>
                <div className="Mnotice_noticeModal_btn_wrap">
                    <div><button type="button" className="Mnotice_noticeModal_btn_add" onClick={onClickAddInAdd}>추가</button></div>
                    <div><button type="button" className="Mnotice_noticeModal_btn_cancel" onClick={onClickCancel}>취소</button></div>
                </div>
            </div>
            {/* 공지사항 추가완료 모달창 */}
            <div className="Mnotice_addSuccess_wrap">
                <div class="Mnotice_addsuccess_content_wrap">
                    <div className="Mnotice_addsuccess_title">공지사항이 추가되었습니다!</div>
                    <div><button type="button" className="Mnotice_addsuccess_btn" onClick={onClickOk}>확인</button></div>
                </div>
            </div>
            {/* 삭제버튼 -> 공지사항 삭제 모달창 */}
            <div className="Mnotice_deleteModal_wrap">
                <div className="Mnotice_deleteModal_content_wrap">
                    <div className="Mnotice_deleteModal_img_wrap"><img className="Mnotice_deleteModal_img" src="/assets/delete_warning.png" alt="느낌표이미지" /></div>
                    <div className="Mnotice_deleteModal_right_content">
                        <div className="Mnotice_deleteModal_title">공지사항 삭제</div>
                        <div className="Mnotice_deleteModal_question">삭제 버튼을 누르게 되면 해당 내용은 복구할 수 없습니다. 그래도 삭제하시겠습니까?</div>
                        <div className="Mnotice_deleteModal_btn_wrap">
                            <div><button className="Mnotice_deleteModal_btn_delete" onClick={onClickDelInDel}>삭제</button></div>
                            <div><button className="Mnotice_deleteModal_btn_cancel" onClick={onClickCancel}>취소</button></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 공지사항 삭제완료 모달창 */}
            <div className="Mnotice_deleteSuccess_wrap">
                <div className="Mnotice_deleteSuccess_content_wrap">
                    <div className="Mnotice_deleteSuccess_title">삭제 완료</div>
                    <div><button type="button" className="Mnotice_deleteSuccess_btn" onClick={onClickOk}>확인</button></div>
                </div>
            </div>
        </>
    )
}

export default Notice