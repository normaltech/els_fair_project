import React, { useState, useRef,useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './boothmodal.css'
import { orange } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
}

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

export default function BoothModal({ isReserved, searchData, boothId, className, section,type,layer,number}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const history = useHistory(null);
  const searchRef = useRef(null);
  const checkIfUserReserved = () =>{
    axios.get("/checkIfUserReserved").then((res)=>{
      const data = res.data[0].COUNT;
      if(data == 1){
        alert("예약 내역이 존재합니다!");
        return;
      }else{
        history.push({
          pathname: "/reservation",
          state: {
            boothId: boothId,
            section: section,
            type: type,
            number: number,
            layer: layer
          }
        })
      }
     
    })
    // window.history.go(0)
  }
  var reservedCheck = "예약 가능";
  let inReserveBgColor = "inReserveBgColorX"; //예약가능시 하얀색 배경
  if(isReserved == 1){
    reservedCheck = "예약 불가능"; 
    inReserveBgColor = "inReserveBgColorO";//예약가능시 노란 배경
  }
  function showButton(){
    if(isReserved==0){
      return(
        <div className="boothmodalButton">
          <ColorButton size="large" variant="contained" display="flex" disableElevation onClick={checkIfUserReserved}>부스 신청</ColorButton>
        </div>
      )
    }else{
      return(<div className="reservedBooth">예약이 완료된 부스입니다.</div>)
    }
  }
  //한번 클릭하면 animation이 바뀌어 있어서 바로 animation을 null로 바꿔줘야됨
  // console.log(searchData+"<->"+className.substring(2))
  searchData.map((value)=>{
    //value에서 boothname을 none으로 받으면 안보이게 설정
    if(value === className.substring(2)){
      searchRef.current.style.color = "white";
      searchRef.current.style.border = "";
      searchRef.current.style.backgroundColor = "#F6C652";
      searchRef.current.style.animation = "blink-effect 1s step-end infinite";
    }
    // else{
    //   searchRef.current.style.color = "black";
    //   searchRef.current.style.border = "solid 1px #707070";
    //   searchRef.current.style.backgroundColor = " #fff";
    //   searchRef.current.style.animation = "";
    // }
  })
  return (
    <>
      <span id={`section_${section}`} className={`${className} ${inReserveBgColor}`} onClick={handleOpen} ref={searchRef} style={{inReserveBgColor}}>{section}-{type}{layer}{number}</span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon className="modalCloseButton" onClick={handleClose}/>
          <Typography textAlign="center" id="modal-modal-title" variant="h5" component="div" marginBottom="30px" fontSize="32px" fontWeight="Bold">
            {reservedCheck}
          </Typography>
          <div className="modalCenterMakeHelper">
            <Box className="modalBoothType" marginBottom="30px">
              <div className="modalBoothTypeLeft">
                <Typography component="div" fontSize="16px">
                  부스번호
                </Typography>
                <Typography component="div" fontSize="25px" fontWeight="bold">
                  {section}-{type}{layer}{number}
                </Typography>
              </div>
              <div className="modalBoothTypeRight">
                <Typography component="div">
                  {section}구역
                </Typography>
                <Typography component="div">
                  {type}타입
                </Typography>
                <Typography component="div">
                  {layer}{number}
                </Typography>
              </div>
            </Box>
            <img src="/assets/icons/622.png" alt="" />
            <Box className="rentEslConatiner">
              <Typography component="span" fontSize="15px" color="#4b4b4b">
                대여 가능한 ESL 개수
              </Typography>
              <Button>
                자세히
              </Button>
              <Box className="modalEslKind">
                <Box className="modalEslKindItem">
                  <div className="modalEslKindItemValue">E1</div>
                  <div className="modalEslKindItemValue">{10}개</div>
                  <div className="modalEslKindItemValue">10000원</div>
                </Box>
                <Box className="modalEslKindItem">
                  <div className="modalEslKindItemValue">E2</div>
                  <div className="modalEslKindItemValue">{8}개</div>
                  <div className="modalEslKindItemValue">12000원</div>
                </Box>
                <Box className="modalEslKindItem">
                  <div className="modalEslKindItemValue">E3</div>
                  <div className="modalEslKindItemValue">{5}개</div>
                  <div className="modalEslKindItemValue">30000원</div>
                </Box>
              </Box>
            </Box>
            <Typography fontSize="15px" color="#4b4b4b">
              기본 제공 서비스
            </Typography>
            <Box className="defaultSeriveConatiner" display="flex">
              <Box className="defaultSeriveItem" display="flex">
                <Typography fontSize="12px">조명</Typography>
                <Typography fontSize="15px" fontWeight="bold">{10}개</Typography>
              </Box>
              <Box className="defaultSeriveItem" display="flex">
                <Typography fontSize="12px">전기</Typography>
                <Typography fontSize="15px" fontWeight="bold">기본{1}kW</Typography>
              </Box>
              <Box className="defaultSeriveItem" display="flex">
                <Typography fontSize="12px">인터넷</Typography>
                <Typography fontSize="15px" fontWeight="bold">{1}회선</Typography>
              </Box>
            </Box>
            {showButton()}
          </div>
        </Box>
      </Modal>
    </>
  )
}
