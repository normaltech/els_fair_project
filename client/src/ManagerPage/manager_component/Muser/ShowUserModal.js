import React, { useState,useEffect } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './userManagement.css';
import axios from 'axios';
function MemberCount(companyId){
    const [data, setData] = useState([])
    async function fetchUrl(){
        axios.get("/getCompanyMemberCount/"+companyId).then((res) => {
            setData(res.data.member)
        })
    }

    useEffect(() => {
        fetchUrl();
     },[]);

    return data;
}
export const ShowUserModal = ({company, primaryNum, boothId, manager, phoneNum, email, isActive,companyNum}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    var member = MemberCount(primaryNum);
    return (
        <>
            {/* <span onClick={handleOpen} ></span> */}
            <td className="userManagement_table_padding" onClick={handleOpen}>{company}</td>
            <td className="userManagement_table_padding" onClick={handleOpen}>{primaryNum}</td>
            {/* <td className="userManagement_table_padding" onClick={handleOpen}>{boothId}</td> */}
            <td className="userManagement_table_padding" onClick={handleOpen}>{manager}</td>
            <td className="userManagement_table_padding" onClick={handleOpen}>{phoneNum}</td>
            <td className="userManagement_table_padding" onClick={handleOpen}>{email}</td>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box>
                    {/* 사용자 자세히 모달창 */}
                    <div className="userManagement_userDetailModal_wrap">
                        <div className="userManagement_userDetailModal_content_wrap">
                            <div className="userManagement_userDetailModal_leftContent_wrap">
                                <div className="userManagement_userDetailModal_leftContent_img_wrap userManagement_userDetailModal_leftContent_padding"><img src="/assets/avatar2.png" width="170px"/></div>
                                <div className="userManagement_userDetailModal_leftContent_name userManagement_userDetailModal_leftContent_padding" >{manager}</div>
                                <div className="userManagement_userDetailModal_leftContent_phoneNum userManagement_userDetailModal_leftContent_padding" >{phoneNum}</div>
                                <div className="userManagement_userDetailModal_leftContent_email userManagement_userDetailModal_leftContent_padding">{email}</div>
                            </div>
                            <div className="userManagement_userDetailModal_rightContent_wrap">
                                <div className="userManagement_userDetailModal_rightUpContent_wrap">
                                    {/* 왼쪽 오른쪽으로 구역 나눔 */}
                                    <div className="userManagement_userDetailModal_rightUpTitle_wrap">
                                        <div className="userManagement_userDetailModal_rightUpTitle_style userManagement_userDetailModal_rightUpContent_padding">회사</div>
                                        <div className="userManagement_userDetailModal_rightUpTitle_style userManagement_userDetailModal_rightUpContent_padding">회사번호</div>
                                        <div className="userManagement_userDetailModal_rightUpTitle_style userManagement_userDetailModal_rightUpContent_padding">고유번호</div>
                                    </div>
                                    <div className="userManagement_userDetailModal_rightUpTitleInfo_wrap">
                                        <div className="userManagement_userDetailModal_rightUpTitleInfo_style userManagement_userDetailModal_rightUpContent_padding">{company}</div>
                                        <div className="userManagement_userDetailModal_rightUpTitleInfo_style userManagement_userDetailModal_rightUpContent_padding">{companyNum}</div>
                                        <div className="userManagement_userDetailModal_rightUpTitleInfo_style userManagement_userDetailModal_rightUpContent_padding">{primaryNum}</div>
                                    </div>
                                </div>
                                <div className="userManagement_userDetailModal_rightDownContent_wrap">
                                    {/* 위 아래로 구역 나눔 */}
                                    {/* 위 */}
                                    <div className="userManagement_userDetailModal_rightDownUp_wrap">
                                        <div className="userManagement_userDetailModal_rightDownUp_user_wrap">
                                            <div className="userManagement_userDetailModal_rightDownUp_user_title userManagement_userDetailModal_rightDownContent_padding">부스</div>
                                            <div className="userManagement_userDetailModal_rightDownUp_isUsing userManagement_userDetailModal_rightDownContent_padding">사용중</div>
                                            <div className="userManagement_userDetailModal_rightDownUp_userInfo">A-a101</div>
                                        </div>
                                        <div className="userManagement_userDetailModal_rightDownUp_numOfPeople_wrap">
                                            <div className="userManagement_userDetailModal_rightDownUp_numofPeople_title userManagement_userDetailModal_rightDownContent_padding">인원</div>
                                            <div className="userManagement_userDetailModal_rightDownUp_numofPeople userManagement_userDetailModal_rightDownContent_padding">{member}</div>
                                        </div>
                                        <div className="userManagement_userDetailModal_rightDownUp_authority_wrap">
                                            <div className="userManagement_userDetailModal_rightDownUp_authority_title userManagement_userDetailModal_rightDownContent_padding">권한</div>
                                            <div className="userManagement_userDetailModal_rightDownUp_authority userManagement_userDetailModal_rightDownContent_padding">{isActive}</div>
                                        </div>
                                    </div>
                                    {/* 중앙 */}
                                    <div className="userManagement_userDetailModal_rightDownDown_wrap">
                                        <div className="userManagement_userDetailModal_rightDownDown_esl_wrap">
                                            <div className="userManagement_userDetailModal_rightDownDown_esl_title userManagement_userDetailModal_rightDownContent_padding">ESL</div>
                                            <div className="userManagement_userDetailModal_rightDownDown_isLending userManagement_userDetailModal_rightDownContent_padding">대여중</div>
                                        </div>
                                        <div className="userManagement_userDetailModal_rightDownDown_created_wrap">
                                            <div className="userManagement_userDetailModal_rightDownDown_created_title userManagement_userDetailModal_rightDownContent_padding">Created</div>
                                            <div className="userManagement_userDetailModal_rightDownDown_created userManagement_userDetailModal_rightDownContent_padding">2021/10/01 08:30 PM</div>
                                        </div>
                                        <div className="userManagement_userDetailModal_rightDownDown_lastLogin_wrap">
                                            <div className="userManagement_userDetailModal_rightDownDown_lastLogin_title userManagement_userDetailModal_rightDownContent_padding">Last login</div>
                                            <div className="userManagement_userDetailModal_rightDownDown_lastLogin userManagement_userDetailModal_rightDownContent_padding">2021/10/04 11:30 PM</div>
                                        </div>
                                    </div>
                                    {/* 아래 */}
                                    <div className="userManagement_userDetailModal_rightDownDown_btn_wrap"><button className="userManagement_userDetailModal_rightDownDown_btn" onClick={handleClose}>확인</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}
