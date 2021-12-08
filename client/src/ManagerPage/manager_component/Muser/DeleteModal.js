import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../../../component/booth/booth.css'
import { orange } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import {AiFillDelete} from 'react-icons/ai';
import './userManagement.css';
import axios from 'axios';

// const style = {
//   diplay:'block',
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 500,
//   height: 200,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   borderRadius: '10px',
//   boxShadow: 24,
//   p: 4,
// }

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: orange[600],
  '&:hover': {
    backgroundColor: orange[700],
  },
  fontSize: 20,
  fontWeight: "bold",
  color: "white",
}));

export default function DeleteModal({companyId}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let data = {
    companyId : companyId
  }
  const deleteAccount = () => {
    axios.post("/api/unActivateAccountById",data).then((res)=>{
      if(res.data.changedRows >= 1){
        window.location.reload()
        handleClose();
      }
    })
  }
  return (
    <>
      <span onClick={handleOpen} ><AiFillDelete/></span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
           {/* 사용자 수정 모달창 */}
         {/* 삭제버튼 -> 공지사항 삭제 모달창 */}
         <div className="userManagement_deleteModal_wrap">
                <div className="userManagement_deleteModal_content_wrap">
                    <div className="userManagement_deleteModal_img_wrap"><img className="userManagement_deleteModal_img" src="/assets/delete_warning.png" alt="느낌표이미지" /></div>
                    <div className="userManagement_deleteModal_right_content">
                        <div className="userManagement_deleteModal_title">사용자 삭제</div>
                        <div className="userManagement_deleteModal_question">삭제 버튼을 누르게 되면 해당 내용은 복구할 수 없습니다. 그래도 삭제하시겠습니까?</div>
                        <div className="userManagement_deleteModal_btn_wrap">
                            <div><button className="userManagement_deleteModal_btn_delete" onClick={deleteAccount}>삭제</button></div>
                            <div><button className="userManagement_deleteModal_btn_cancel" onClick={handleClose}>취소</button></div>
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
