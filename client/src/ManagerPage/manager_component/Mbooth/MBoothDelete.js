import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {AiFillDelete} from 'react-icons/ai';
import axios from 'axios';
import './boothManagement.css'

export const MBoothDelete = ({Mname}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const btn = () => {
        if(Mname === null)alert('예약이 없습니다.');
        else {
            console.log(Mname);
            try{
                axios.post("/api/delete_booth", {Mname});
                window.location.replace("/managerpage/boothManagement");
            }catch {
                alert('삭제 실패');
            }
        }
        setOpen(false);
    }

    return (
        <>
            {/* <span onClick={handleOpen} ></span> */}
            <div onClick={handleOpen} className="B_delete"><img className="B_delete2" src="/assets/reset.png" alt="초기화" /></div>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box>
               {/* 삭제버튼 -> 공지사항 삭제 모달창 */}
                <div className="Mnotice_deleteModal_wrap">
                    <div className="Mnotice_deleteModal_content_wrap">
                        <div className="Mnotice_deleteModal_img_wrap"><img className="Mnotice_deleteModal_img" src="/assets/delete_warning.png" alt="느낌표이미지" /></div>
                        <div className="Mnotice_deleteModal_right_content">
                            <div className="Mnotice_deleteModal_title">부스예약 초기화</div>
                            <div className="Mnotice_deleteModal_question">초기화 버튼을 누르게 되면 해당 내용은 복구할 수 없습니다. 그래도 초기화하시겠습니까?</div>
                            <div className="Mnotice_deleteModal_btn_wrap">
                                <div><button className="Mnotice_deleteModal_btn_delete" onClick={btn}>삭제</button></div>
                                <div><button className="Mnotice_deleteModal_btn_cancel" onClick={handleClose}>취소</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
            </Modal>
        </>
    )
}
