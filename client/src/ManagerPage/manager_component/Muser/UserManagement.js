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

    // table ?????? (??????, ????????????, ??????ID, ?????????, ????????? ????????????, ?????????)
    // const [company, setCompany] = useState('????????????');
    // const [primaryNum, setPrimaryNum] = useState('A0102203');
    // const [userId, setuserId] = useState('A-a101');
    // const [manager, setManager] = useState('?????????');
    // const [phoneNum, setPhoneNum] = useState('010-****-****');
    // const [email, setEmail] = useState('***@gmail.com');

    useEffect(()=>{
        const fetchPosts = async () =>{
          setLoading(true);
          const res = await axios.get('/getAllUserData'); // ?????????????????? ????????????
          setPosts(res.data);
          setAllData(res.data);
          setFilteredData(res.data);
          setLoading(false);
        }
    
        fetchPosts();
      }, [])

    // ?????????????????? ??????
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);
    //?????? ?????? ????????????
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    //????????? ?????????
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // console.log(currentPosts)

    //?????? ??????
    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState(allData);
    
    const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);
    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        // console.log(value);
        result = allData.filter((data) => {
        return data.company_name.search(value) != -1;
        });
        setFilteredData(result);
    }
    return (
        <>
            <div className='userManagement_wrap'>
                {/* ?????? ????????? */}
                <div className="userManagement_search">
                    <input type="text" id="searchInput" onChange={(event) =>handleSearch(event)} className="userManagement_input" placeholder="???????????? ???????????????." />
                    <RiUserSearchFill size="28"/>
                </div>
                {/* ???????????? content */}
                <div className="userManagement_table_wrap">
                    <table className="userManagement_table">
                        <tr className="userManagement_table_tr">
                            <th className="userManagement_table_padding">??????</th>
                            <th className="userManagement_table_padding">????????????</th>
                            {/* <th className="userManagement_table_padding">??????ID</th> */}
                            <th className="userManagement_table_padding">?????????</th>
                            <th className="userManagement_table_padding">????????? ????????????</th>
                            <th className="userManagement_table_padding">?????????</th>
                            <th className="userManagement_table_padding">??????</th>
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
                                    <option value="">?????????</option>
                                    <option value="">????????????</option>
                                </select>
                            </td>
                            <td className="userManagement_table_padding">
                                <button className="userManagement_table_btn"><img src="/assets/user_modify.png" alt="??????"  onClick={onClickUserModify}/></button>
                                <button className="userManagement_table_btn"><img className="userManagement_table_deleteImg" src="/assets/user_delete.png" alt="??????" onClick={onClickDelete} /></button>
                            </td>
                        </tr> */}
                        <MuserPosts posts={currentPosts} loading={loading}/>
                    </table>
                </div>
                <div className="userManagement_bottom_content_wrap">
                    <div className="userManagement_pagination">
                        {/* ????????? ?????????????????? */}
                        <MuserPagenation postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
                        {/* <div><button>??????????????????</button></div> */}
                    </div>
                    {/* <div>
                        <AddUserModal />
                    </div>               */}
                </div>
            </div>

            {/* ???????????? display: none?????? ????????? ????????? */}
            {/* ???????????? ????????? */}
            <div className="userManagement_black_bg"></div>
           {/* ?????????????????? */}
        
            {/* ???????????? ???????????? ????????? */}
            <div className="userManagement_deleteSuccess_wrap">
                <div className="userManagement_deleteSuccess_content_wrap">
                    <div className="userManagement_deleteSuccess_title">?????? ??????</div>
                    <div><button type="button" className="userManagement_deleteSuccess_btn" onClick={onClickOk}>??????</button></div>
                </div>
            </div>
            {/* ???????????? ????????? */}
            <div className="userManagement_modifyFailModal_wrap">
                <div className="userManagement_modifyFailModal_content_wrap">
                    <div className="userManagement_modifyFailModal_img_wrap"><img className="userManagement_modifyFailModal_img" src="/assets/delete_warning.png" alt="??????????????????" /></div>
                    <div className="userManagement_modifyFailModal_right_content">
                        <div className="userManagement_modifyFailModal_title">?????? ??????</div>
                        <div className="userManagement_modifyFailModal_question">?????? ?????? ?????? ?????????</div>
                        <div><button className="userManagement_modifyFailModal_btn_back" onClick={onClickModifyBack}>????????????</button></div>         
                    </div>
                </div>
            </div>
            {/* ???????????? ????????? */}
            <div className="userManagement_deleteFailModal_wrap">
                <div className="userManagement_deleteFailModal_content_wrap">
                    <div className="userManagement_deleteFailModal_img_wrap"><img className="userManagement_deleteFailModal_img" src="/assets/delete_warning.png" alt="??????????????????" /></div>
                    <div className="userManagement_deleteFailModal_right_content">
                        <div className="userManagement_deleteFailModal_title">?????? ??????</div>
                        <div className="userManagement_deleteFailModal_question">?????? ?????? ?????? ?????????</div>
                        <div><button className="userManagement_deleteFailModal_btn_back" onClick={onClickDelBack}>????????????</button></div>        
                    </div>
                </div>
            </div>
            {/* ???????????? ????????? */}
            <div className="userManagement_registerFailModal_wrap">
                <div className="userManagement_registerFailModal_content_wrap">
                    <div className="userManagement_registerFailModal_img_wrap"><img className="userManagement_registerFailModal_img" src="/assets/delete_warning.png" alt="??????????????????" /></div>
                    <div className="userManagement_registerFailModal_right_content">
                        <div className="userManagement_registerFailModal_title">?????? ??????</div>
                        <div className="userManagement_registerFailModal_question">?????? ?????? ?????? ?????????</div>
                        <div><button className="userManagement_registerFailModal_btn_back" onClick={onClickUserRegisterBack}>????????????</button></div>           
                    </div>
                </div>
            </div>
            
            {/* ????????? ???????????? ????????? */}
            <div className="userManagement_modifySuccess_wrap">
                <div className="userManagement_modifySuccess_content_wrap">
                    <div className="userManagement_modifySuccess_title">?????? ??????</div>
                    <div><button type="button" className="userManagement_modifySuccess_btn" onClick={onClickOk}>??????</button></div>
                </div>
            </div>
            
            {/* ????????????????????? ????????? */}
            <div className="userManagement_userRegisterSuccess_wrap">
                <div className="userManagement_userRegisterSuccess_content_wrap">
                    <div className="userManagement_userRegisterSuccess_title">?????? ??????</div>
                    <div><button type="button" className="userManagement_userRegisterSuccess_btn" onClick={onClickOk}>??????</button></div>
                </div>
            </div>
        </>
    )
}

export default UserManagement