import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './boothmodal.css'
import { styled } from '@mui/material/styles';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  height: 520,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  display: 'flex',
  p: 4,
}


export default function BoothModal({ isReserved, boothId, className, section, type, layer, number, company_id }) {
  
  const [Cname, setCname] = useState('-');
  const [Cid, setCid] = useState('-');
  const [Mname, setMname] = useState('-');
  const [Mnum, setMnum] = useState('-');
  const [Memail, setMemail] = useState('-');

  useEffect(() => {
    if(company_id !== 0){
      axios.get("/api/getCompanyInfoById/" + company_id).then((res) => {
          setCname(res.data.company_name);
          setMname(res.data.manager);
          setMnum(res.data.manager_phone_num);
          setMemail(res.data.email)
          setCid(company_id);
      })
    }
  }, [])
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const history = useHistory(null);
  const searchRef = useRef(null);
  const checkIfUserReserved = () => {
    axios.get("/api/checkIfUserReserved").then((res) => {
      const data = res.data[0].COUNT;
      if (data == 1) {
        alert("예약 내역이 존재합니다!");
        return;
      } else {
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
  if (isReserved == 1) {
    reservedCheck = "예약 불가능";
    inReserveBgColor = "inReserveBgColorO";//예약가능시 노란 배경
  }

  return (
    <>
      <span className={`${className} ${inReserveBgColor}`} onClick={handleOpen} ref={searchRef}>{section}-{type}{layer}{number}</span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="managerBoothModalLeft">
            <CloseIcon className="modalCloseButton" onClick={handleClose} />
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
            </div>
          </div>
          <div className="managerBoothModalRight">
            <div className="mBMRReserverInfo">예약자 정보</div>
            <div className="mBMRCompanyName">{`회사명:  ${Cname}`}</div>
            <div className="mBMRCompanyId">{`사업자번호:  ${Cid}`}</div>
            <div className="mBMRManagerName">{`담당자이름:  ${Mname}`}</div>
            <div className="mBMRManagerNum">{`담당자번호:  ${Mnum}`}</div>
            <div className="mBMRManagerEmail">{`담당자이메일:  ${Memail}`}</div>
          </div>
        </Box>
      </Modal>
    </>
  )
}
