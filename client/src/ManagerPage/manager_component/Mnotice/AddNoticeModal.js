import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './notice.css';
import axios from 'axios';

export const AddNoticeModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //입력 변수값
    const [user, setUser] = useState({
        exhibition: '에스씨엠 페어 2021',
        title: '',
        content: '',
    });

    const clickAdd = () => {
        try {
            axios.post("/insert_notice", {user});
            alert('공지사항 추가');
        } catch {
            console.log('에러');
        }
        setOpen(false);
        window.location.replace("/managerpage/notice");
    }

    const exhibitionSetter = (value) => {
        setUser({
          ...user,
          exhibition: value
        })
    }
    const titleSetter = (value) => {
        setUser({
          ...user,
          title: value
        })
    }
    const contentSetter = (value) => {
        setUser({
          ...user,
          content: value
        })
    }

    return (
        <>
            {/* <span onClick={handleOpen} ></span> */}
            <button type="button" className="Mnotice_btn_add" onClick={handleOpen}>추가</button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box>
                {/* 추가버튼 -> 공지사항 모달창 */}
                <div className="Mnotice_noticeModal_wrap">
                    <div className="Mnotice_noticeModal_word"><span className="Mnotice_noticeModal_word_span">공지사항 작성</span></div>
                    <div className="Mnotice_noticeModal_selectTitle Mnotice_noticeModal_padding">전시회 선택</div>
                    <div className="Mnotice_noticeModal_padding">
                        <select className="Mnotice_noticeModal_selectInput" name="" id="" onChange={(e) => { exhibitionSetter(e.target.value);}}>
                            <option value="에스씨엠 페어 2021">에스씨엠 페어 2021</option>
                            <option value="에스씨엠 페어 2022">에스씨엠 페어 2022</option>
                            <option value="에스씨엠 페어 2023">에스씨엠 페어 2023</option>
                        </select>
                    </div>
                    <div className="Mnotice_noticeModal_title Mnotice_noticeModal_padding">제목</div>
                    <div className="Mnotice_noticeModal_padding"><input type="text" className="Mnotice_noticeModal_titleInput" placeholder="제목을 입력하세요." onChange={(e) => { titleSetter(e.target.value);}} /></div>
                    <div className="Mnotice_noticeModal_content Mnotice_noticeModal_padding">내용</div>
                    <div className="Mnotice_noticeModal_padding"><textarea className="Mnotice_noticeModal_textarea" cols="62" rows="10" placeholder="내용을 입력하세요." onChange={(e) => { contentSetter(e.target.value);}}></textarea></div>
                    <div className="Mnotice_noticeModal_btn_wrap">
                        <div><button type="button" className="Mnotice_noticeModal_btn_add" onClick={clickAdd}>추가</button></div>
                        <div><button type="button" className="Mnotice_noticeModal_btn_cancel" onClick={handleClose}>취소</button></div>
                    </div>
                </div>
            </Box>
            </Modal>
        </>
    )
}
