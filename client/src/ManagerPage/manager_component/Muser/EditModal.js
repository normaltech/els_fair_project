import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import '../../../component/booth/booth.css'
import {TiEdit} from 'react-icons/ti';
import './userManagement.css';
import axios from 'axios';
import {VscAccount} from "react-icons/vsc";

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
function MemberInfo(companyId){
    const [data, setData] = useState([])
    async function fetchUrl(){
        axios.get("/getCompanyInfoById/"+companyId).then((res) => {
            setData(res.data)
        })
    }

    useEffect(() => {
        fetchUrl();
     },[]);

    return data;
}

export default function EditModal({companyId}) {
    var member = MemberCount(companyId);
    // console.log("인원:"+member);
    var companyInfo = MemberInfo(companyId);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleUpdateUser = () =>{
        //   const manager = getElementById
    }
    
    //입력 변수값
    const [user, setUser] = useState({
        manager: '',
        managerPhone: '',
        email: '',
        company: '',
        companyPhone: '',
        companyId: '',
        member: '',
    });

    const submitUpdate = () =>{
        const manager = document.getElementById('manager').value;
        const phoneNum = document.getElementById('phoneNum').value;
        const email = document.getElementById('email').value;
        const companyName = document.getElementById('companyName').value;
        const companyNum = document.getElementById('companyNum').value;
        const companyId = document.getElementById('companyId').value;
        const isActive = document.getElementById('isActive').value;
        let data = {
            manager : manager,
            phoneNum : phoneNum,
            email : email,
            companyName : companyName,
            companyNum : companyNum,
            companyId : companyId,
            isActive : isActive,
            companyId : companyId
        }
        axios.post("/updateUserInfo",data).then((res)=>{
            // console.log(res);
            if(res.data.affectedRows >= 1){
                alert("사용자 정보가 수정되었습니다!");
                window.location.reload();
                handleClose();
            }
        })
    }

    const managerSetter = (value) => {
        setUser({
        ...user,
        manager: value
        })
    }
    const managerPhoneSetter = (value) => {
        setUser({
        ...user,
        managerPhone: value
        })
    }
    const emailSetter = (value) => {
        setUser({
        ...user,
        email: value
        })
    }
    const companySetter = (value) => {
        setUser({
        ...user,
        company: value
        })
    }
    const companyPhoneSetter = (value) => {
        setUser({
        ...user,
        companyPhone: value
        })
    }
    const companyIdSetter = (value) => {
        setUser({
        ...user,
        companyId: value
        })
    }
    const memberSetter = (value) => {
        setUser({
        ...user,
        member: value
        })
    }

  return (
    <>
      <span onClick={handleOpen} ><TiEdit/></span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
           {/* 사용자 수정 모달창 */}
         <div className="userManagement_userModifyModal_wrap">
                <div className="userManagement_userModifyModal_topTitle">- 수 정 -</div>
               <div className="userManagement_userModifyModal_content_wrap">
                   <div className="userManagement_userModifyModal_leftContent_wrap">
                       <div className="userManagement_userModifyModal_leftContent_img_wrap userManagement_userModifyModal_leftContent_padding"><img src="/assets/avatar.png" width="170px"/></div>
                       {/* <div className="userManagement_userModifyModal_leftContent_pic userManagement_userModifyModal_leftContent_padding">
                            <form action="" method="post" encType="multipart/form-data" name="">
                                <input className="userManagement_userModifyModal_leftContent_pic_input" type="file" name="FileName"/>
                            </form>
                       </div> */}
                       <div className="userManagement_userModifyModal_leftContent_name userManagement_userModifyModal_leftContent_padding">
                           <div className="userManagement_userModifyModal_leftContent_name_title">이름</div>
                           <div className="userManagement_userModifyModal_leftContent_name_info"><input type="text" id="manager" className="userManagement_userModifyModal_leftContent_input" defaultValue={companyInfo.manager} onChange={(e) => { managerSetter(e.target.value);}}/></div>
                       </div>
                       <div className="userManagement_userModifyModal_leftContent_phoneNum userManagement_userModifyModal_leftContent_padding">
                           <div className="userManagement_userModifyModal_leftContent_phoneNum_title">전화번호</div>
                           <div className="userManagement_userModifyModal_leftContent_phoneNum_info"><input type="text" id="phoneNum" className="userManagement_userModifyModal_leftContent_input" defaultValue={companyInfo.manager_phone_num} onChange={(e) => { managerPhoneSetter(e.target.value);}}/></div>
                       </div>
                       <div className="userManagement_userModifyModal_leftContent_email userManagement_userModifyModal_leftContent_padding">
                           <div className="userManagement_userModifyModal_leftContent_email_title">이메일</div>
                           <div className="userManagement_userModifyModal_leftContent_email_info"><input type="email" id="email" className="userManagement_userModifyModal_leftContent_input" defaultValue={companyInfo.email} onChange={(e) => { emailSetter(e.target.value);}}/></div>
                       </div>
                   </div>
                   <div className="userManagement_userModifyModal_rightContent_wrap">
                       <div className="userManagement_userModifyModal_rightUpContent_wrap">
                           {/* 왼쪽 오른쪽으로 구역 나눔 */}
                           <div className="userManagement_userModifyModal_rightUpTitle_wrap">
                               <div className="userManagement_userModifyModal_rightUpTitle_style userManagement_userModifyModal_rightUpContent_padding">회사</div>
                               <div className="userManagement_userModifyModal_rightUpTitle_style userManagement_userModifyModal_rightUpContent_padding">회사번호</div>
                               <div className="userManagement_userModifyModal_rightUpTitle_style userManagement_userModifyModal_rightUpContent_padding">고유번호</div>
                           </div>
                           <div className="userManagement_userModifyModal_rightUpTitleInfo_wrap">
                               <div className="userManagement_userModifyModal_rightUpTitleInfo_style userManagement_userModifyModal_rightUpContent_padding"><input id="companyName" className="userManagement_userModifyModal_rightContent_input" type="text" defaultValue={companyInfo.company_name} onChange={(e) => { companySetter(e.target.value);}}/></div>
                               <div className="userManagement_userModifyModal_rightUpTitleInfo_style userManagement_userModifyModal_rightUpContent_padding"><input id="companyNum" className="userManagement_userModifyModal_rightContent_input" type="text" defaultValue={companyInfo.company_phone_num} onChange={(e) => { companyPhoneSetter(e.target.value);}}/></div>
                               <div className="userManagement_userModifyModal_rightUpTitleInfo_style userManagement_userModifyModal_rightUpContent_padding"><input id="companyId" className="userManagement_userModifyModal_rightContent_input" type="text" defaultValue={companyId} onChange={(e) => { companyIdSetter(e.target.value);}}/></div>
                           </div>
                       </div>
                       <div className="userManagement_userModifyModal_rightDownContent_wrap">
                           {/* 위 아래로 구역 나눔 */}
                           {/* 위 */}
                           <div className="userManagement_userModifyModal_rightDownUp_wrap">
                               <div className="userManagement_userModifyModal_rightDownUp_user_wrap">
                                   <div className="userManagement_userModifyModal_rightDownUp_user_title userManagement_userModifyModal_rightDownContent_padding">부스</div>
                                   <div className="userManagement_userModifyModal_rightDownContent_padding">
                                        <select name="" id="">
                                            <option value="">사용중</option>
                                            <option value="">사용가능</option>
                                            <option value="">사용불가능</option>
                                        </select>
                                   </div>
                               </div>
                               <div className="userManagement_userModifyModal_rightDownUp_numOfPeople_wrap">
                                   <div className="userManagement_userModifyModal_rightDownUp_numofPeople_title userManagement_userModifyModal_rightDownContent_padding">인원</div>
                                   <div className="userManagement_userModifyModal_rightDownUp_numofPeople userManagement_userModifyModal_rightDownContent_padding">
                                       <input className="userManagement_userModifyModal_rightDownUp_numOfPeople_input" type="number" readOnly defaultValue={member} onChange={(e) => { memberSetter(e.target.value);}}/>
                                   </div>
                               </div>
                               <div className="userManagement_userModifyModal_rightDownUp_authority_wrap">
                                   <div className="userManagement_userModifyModal_rightDownUp_authority_title userManagement_userModifyModal_rightDownContent_padding">권한</div>
                                   <div className="userManagement_userModifyModal_rightDownContent_padding">
                                        <select name="" id="isActive">
                                            <option value="1">활성화</option>
                                            <option value="0">비활성화</option>
                                        </select>
                                   </div>
                               </div>
                           </div>
                           {/* 중앙 */}
                           <div className="userManagement_userModifyModal_rightDownDown_wrap">
                               <div className="userManagement_userModifyModal_rightDownDown_esl_wrap">
                                   <div className="userManagement_userModifyModal_rightDownDown_esl_title userManagement_userModifyModal_rightDownContent_padding">ESL</div>
                                   <div className="userManagement_userModifyModal_rightDownContent_padding">
                                        <select name="" id="">
                                            <option value="">대여중</option>
                                            <option value="">대여가능</option>
                                            <option value="">대여불가능</option>
                                        </select>
                                   </div>
                               </div>
                               <div className="userManagement_userModifyModal_rightDownDown_created_wrap">
                                   <div className="userManagement_userModifyModal_rightDownDown_created_title userManagement_userModifyModal_rightDownContent_padding">Created</div>
                                   <div className="userManagement_userModifyModal_rightDownDown_created userManagement_userModifyModal_rightDownContent_padding">2021/10/01 08:30 PM</div>
                               </div>
                               <div className="userManagement_userModifyModal_rightDownDown_lastLogin_wrap">
                                   <div className="userManagement_userModifyModal_rightDownDown_lastLogin_title userManagement_userModifyModal_rightDownContent_padding">Last login</div>
                                   <div className="userManagement_userModifyModal_rightDownDown_lastLogin userManagement_userModifyModal_rightDownContent_padding">2021/10/04 11:30 PM</div>
                               </div>
                           </div>
                           {/* 아래 */}
                           <div className="userManagement_userModifyModal_rightDownDown_btn_wrap">
                               <button className="userManagement_userModifyModal_rightDownDown_btn" onClick={submitUpdate}>수정</button>
                               <button className="userManagement_userModifyModal_rightDownDown_btn" onClick={handleClose}>취소</button>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
            {/* <Link to={{pathname: "/"}}><ColorButton size="large" variant="contained" display="flex" disableElevation >수정</ColorButton></Link> */}
        </Box>
      </Modal>
    </>
  )
}
