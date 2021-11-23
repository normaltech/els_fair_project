import React,{useState,useEffect} from 'react';
import '../mainfirst/mainfirst.css';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const style ={
    display: 'block',
    width: 600,
    height: 550,
    position: 'absolute',
    top: '48%',
    left: '48%',
    margin: '-250px 0 0 -250px',
    backgroundColor: '#fff',
    borderRadius: '15px',
    padding: '20px 30px',
    zIndex: 2,
}

function useFetch(id){
    const [data, setData] = useState([])
    async function fetchUrl(){
        axios.get("/getNoticeContent/"+id).then((res)=>{
            setData(res.data[0].notices)
        })
    }

    useEffect(() => {
        fetchUrl();
     },[]);

    return data;
}
function NoticeModal({id,exhibition,title}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    var content = useFetch(id);
    
    
    return(
        <React.Fragment>
            <Button className="n3 mainpage_n3" onClick={handleOpen}>{title}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box sx={style} className="mainpage_box">
                <div className="mainpage_noticeModal_word"><span className="mainpage_noticeModal_word_span">공지사항 작성</span></div>
                <div className="mainpage_noticeModal_selectTitle mainpage_noticeModal_padding">전시회 선택</div>
                <div className="mainpage_noticeModal_padding" >
                    <input type="text" className="mainpage_noticeModal_exhibitionInput" defaultValue={exhibition} disabled/>  
                </div>
                <div className="mainpage_noticeModal_title mainpage_noticeModal_padding">제목</div>
                <div className="mainpage_noticeModal_padding">
                    <input type="text" className="mainpage_noticeModal_titleInput" defaultValue={title} disabled/>
                </div>
                <div className="mainpage_noticeModal_content mainpage_noticeModal_padding">내용</div>
                <div className="mainpage_noticeModal_padding">
                    <textarea className="mainpage_noticeModal_textarea" cols="62" rows="10" defaultValue={content} disabled/>
                </div>
            </Box>
            </Modal>
        </React.Fragment>
    );
}

export const Notice = ({num, exhibition, title, date}) => (
    <div className="noticeDetail">
        <div className="n1">{num}</div>
        <div className="n2">{exhibition}</div>
        <NoticeModal id ={num} exhibition = {exhibition} title={title} />
        <div className="n4">{date}</div>
    </div>
);