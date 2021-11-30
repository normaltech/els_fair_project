import React,  { useState, useEffect } from 'react'
import './userManagement.css';
import axios from 'axios';
import MuserPosts from './MuserPosts';
import { MuserNotice } from './MuserNotice';
import MuserPagenation from './MuserPagenation';
import { AddUserModal } from './AddUserModal';
import {RiUserSearchFill} from 'react-icons/ri';
function UserManagement() {

    const onClickContent = () => {
        document.querySelector('.userManagement_black_bg').style.display = 'block';
        document.querySelector('.userManagement_userDetailModal_wrap').style.display = 'block';
    }

    const onClickDelete = () => {
        document.querySelector('.userManagement_black_bg').style.display = 'block';
        document.querySelector('.userManagement_deleteModal_wrap').style.display = 'block';
    }
    const onClickDelInDel = () => {
        document.querySelector('.userManagement_deleteModal_wrap').style.display = 'none';
        document.querySelector('.userManagement_deleteSuccess_wrap').style.display = 'block';
    }
    const onClickOk = () => {
        document.querySelector('.userManagement_black_bg').style.display = 'none';
        document.querySelector('.userManagement_deleteSuccess_wrap').style.display = 'none';
        document.querySelector('.userManagement_userDetailModal_wrap').style.display = 'none';
        document.querySelector('.userManagement_modifySuccess_wrap').style.display = 'none';
        document.querySelector('.userManagement_userRegisterSuccess_wrap').style.display = 'none';
    }
    const onClickCancel = () => {
        document.querySelector('.userManagement_black_bg').style.display = 'none';
        document.querySelector('.userManagement_deleteModal_wrap').style.display = 'none';
        document.querySelector('.userManagement_userModifyModal_wrap').style.display = 'none';
        document.querySelector('.userManagement_userRegister_wrap').style.display = 'none';
    }
    const onClickModify = () => {
        document.querySelector('.userManagement_userModifyModal_wrap').style.display = 'none';
        document.querySelector('.userManagement_modifySuccess_wrap').style.display = 'block';
    }
    const onClickDelBack = () => {
        document.querySelector('.userManagement_deleteFailModal_wrap').style.display = 'none';
        document.querySelector('.userManagement_deleteModal_wrap').style.display = 'block';
        document.querySelector('.userManagement_black_bg').style.display = 'block';
    }
    const onClickUserModify = () => {
        document.querySelector('.userManagement_black_bg').style.display = 'block';
        document.querySelector('.userManagement_userModifyModal_wrap').style.display = 'block';
    }
    
    const onClickModifyBack = () => {
        document.querySelector('.userManagement_modifyFailModal_wrap').style.display = 'none';
        document.querySelector('.userManagement_userModifyModal_wrap').style.display = 'block';
        document.querySelector('.userManagement_black_bg').style.display = 'block';
    }
    const onClickUserAdd = () => {
        document.querySelector('.userManagement_black_bg').style.display = 'block';
        document.querySelector('.userManagement_userRegister_wrap').style.display = 'block';
    }
    const onClickUserRegister = () => {
        document.querySelector('.userManagement_userRegister_wrap').style.display = 'none';
        document.querySelector('.userManagement_userRegisterSuccess_wrap').style.display = 'block';
    }
    const onClickUserRegisterBack = () => {
        document.querySelector('.userManagement_black_bg').style.display = 'block';
        document.querySelector('.userManagement_registerFailModal_wrap').style.display = 'none';
        document.querySelector('.userManagement_userRegister_wrap').style.display = 'block';
    }

    // table 변수 (회사, 고유번호, 부스ID, 담당자, 담당자 전화번호, 이메일)
    // const [company, setCompany] = useState('캠피스트');
    // const [primaryNum, setPrimaryNum] = useState('A0102203');
    // const [userId, setuserId] = useState('A-a101');
    // const [manager, setManager] = useState('강낭콩');
    // const [phoneNum, setPhoneNum] = useState('010-****-****');
    // const [email, setEmail] = useState('***@gmail.com');

    useEffect(()=>{
        const fetchPosts = async () =>{
          setLoading(true);
          const res = await axios.get('/getAllUserData'); // 데이터베이스 가져오기
          setPosts(res.data);
          setAllData(res.data);
          setFilteredData(res.data);
          setLoading(false);
        }
    
        fetchPosts();
      }, [])

    // 페이지네이션 변수
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);
    //현재 파일 가져오기
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    //페이지 바꾸기
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // console.log(currentPosts)

    //검색 기능
    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState(allData);
    
    const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);
    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log(value);
        result = allData.filter((data) => {
        return data.company_name.search(value) != -1;
        });
        setFilteredData(result);
    }
    return (
        <>
            <div className='userManagement_wrap'>
                {/* 상단 검색바 */}
                <div className="userManagement_search">
                    <input type="text" id="searchInput" onChange={(event) =>handleSearch(event)} className="userManagement_input" placeholder="회사명을 입력하세요." />
                    <RiUserSearchFill size="28"/>
                </div>
                {/* 공지사항 content */}
                <div className="userManagement_table_wrap">
                    <table className="userManagement_table">
                        <tr className="userManagement_table_tr">
                            <th className="userManagement_table_padding">회사</th>
                            <th className="userManagement_table_padding">고유번호</th>
                            {/* <th className="userManagement_table_padding">부스ID</th> */}
                            <th className="userManagement_table_padding">담당자</th>
                            <th className="userManagement_table_padding">담당자 전화번호</th>
                            <th className="userManagement_table_padding">이메일</th>
                            <th className="userManagement_table_padding">권한</th>
                            <th className="userManagement_table_padding">Action</th>
                        </tr>
                        {/* <tr> 
                            <td className="userManagement_table_padding" onClick={onClickContent}>{company}</td>
                            <td className="userManagement_table_padding" onClick={onClickContent}>{primaryNum}</td>
                            <td className="userManagement_table_padding" onClick={onClickContent}>{userId}</td>
                            <td className="userManagement_table_padding" onClick={onClickContent}>{manager}</td>
                            <td className="userManagement_table_padding" onClick={onClickContent}>{phoneNum}</td>
                            <td className="userManagement_table_padding" onClick={onClickContent}>{email}</td>
                            <td className="userManagement_table_padding">
                                <select name="" id="">
                                    <option value="">활성화</option>
                                    <option value="">비활성화</option>
                                </select>
                            </td>
                            <td className="userManagement_table_padding">
                                <button className="userManagement_table_btn"><img src="/assets/user_modify.png" alt="수정"  onClick={onClickUserModify}/></button>
                                <button className="userManagement_table_btn"><img className="userManagement_table_deleteImg" src="/assets/user_delete.png" alt="삭제" onClick={onClickDelete} /></button>
                            </td>
                        </tr> */}
                        <MuserPosts posts={currentPosts} loading={loading}/>
                    </table>
                </div>
                <div className="userManagement_bottom_content_wrap">
                    <div className="userManagement_pagination">
                        {/* 여기에 페이지네이션 */}
                        <MuserPagenation postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
                        {/* <div><button>페이지네이션</button></div> */}
                    </div>
                    <div>
                        <AddUserModal />
                    </div>              
                </div>
            </div>

            {/* 여기부터 display: none으로 처리된 모달창 */}
            {/* 배경흐림 모달창 */}
            <div className="userManagement_black_bg"></div>
           {/* 사용자자세히 */}
        
            {/* 공지사항 삭제완료 모달창 */}
            <div className="userManagement_deleteSuccess_wrap">
                <div className="userManagement_deleteSuccess_content_wrap">
                    <div className="userManagement_deleteSuccess_title">삭제 완료</div>
                    <div><button type="button" className="userManagement_deleteSuccess_btn" onClick={onClickOk}>확인</button></div>
                </div>
            </div>
            {/* 수정실패 모달창 */}
            <div className="userManagement_modifyFailModal_wrap">
                <div className="userManagement_modifyFailModal_content_wrap">
                    <div className="userManagement_modifyFailModal_img_wrap"><img className="userManagement_modifyFailModal_img" src="/assets/delete_warning.png" alt="느낌표이미지" /></div>
                    <div className="userManagement_modifyFailModal_right_content">
                        <div className="userManagement_modifyFailModal_title">수정 실패</div>
                        <div className="userManagement_modifyFailModal_question">수정 실패 이유 메세지</div>
                        <div><button className="userManagement_modifyFailModal_btn_back" onClick={onClickModifyBack}>돌아가기</button></div>         
                    </div>
                </div>
            </div>
            {/* 삭제실패 모달창 */}
            <div className="userManagement_deleteFailModal_wrap">
                <div className="userManagement_deleteFailModal_content_wrap">
                    <div className="userManagement_deleteFailModal_img_wrap"><img className="userManagement_deleteFailModal_img" src="/assets/delete_warning.png" alt="느낌표이미지" /></div>
                    <div className="userManagement_deleteFailModal_right_content">
                        <div className="userManagement_deleteFailModal_title">삭제 실패</div>
                        <div className="userManagement_deleteFailModal_question">삭제 실패 이유 메세지</div>
                        <div><button className="userManagement_deleteFailModal_btn_back" onClick={onClickDelBack}>돌아가기</button></div>        
                    </div>
                </div>
            </div>
            {/* 등록실패 모달창 */}
            <div className="userManagement_registerFailModal_wrap">
                <div className="userManagement_registerFailModal_content_wrap">
                    <div className="userManagement_registerFailModal_img_wrap"><img className="userManagement_registerFailModal_img" src="/assets/delete_warning.png" alt="느낌표이미지" /></div>
                    <div className="userManagement_registerFailModal_right_content">
                        <div className="userManagement_registerFailModal_title">등록 실패</div>
                        <div className="userManagement_registerFailModal_question">등록 실패 이유 메세지</div>
                        <div><button className="userManagement_registerFailModal_btn_back" onClick={onClickUserRegisterBack}>돌아가기</button></div>           
                    </div>
                </div>
            </div>
            
            {/* 사용자 수정완료 모달창 */}
            <div className="userManagement_modifySuccess_wrap">
                <div className="userManagement_modifySuccess_content_wrap">
                    <div className="userManagement_modifySuccess_title">수정 완료</div>
                    <div><button type="button" className="userManagement_modifySuccess_btn" onClick={onClickOk}>확인</button></div>
                </div>
            </div>
            
            {/* 사용자등록완료 모달창 */}
            <div className="userManagement_userRegisterSuccess_wrap">
                <div className="userManagement_userRegisterSuccess_content_wrap">
                    <div className="userManagement_userRegisterSuccess_title">등록 완료</div>
                    <div><button type="button" className="userManagement_userRegisterSuccess_btn" onClick={onClickOk}>확인</button></div>
                </div>
            </div>
        </>
    )
}

export default UserManagement