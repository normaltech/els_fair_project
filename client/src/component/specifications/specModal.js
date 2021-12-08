import React, { useState, useRef,useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import '../selectbooth/boothmodal/boothmodal.css'
import { orange } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { Box, flexbox } from '@mui/system';
import { Typography } from '@mui/material';
import axios from 'axios';

const style = {
  mx: 'auto',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 250,
  bgcolor: '#fff',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',

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

export default function SpecModal({handleSubmit}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  //한번 클릭하면 animation이 바뀌어 있어서 바로 animation을 null로 바꿔줘야됨

  const handleClick = () => {
    try {
      handleOpen();
      handleSubmit();
      
      axios.get("/api/eslinfo")
    } catch {
      console.log('err')
    }
  }

  return (
    <>
    <div className="reservationDashboardButton" onClick={handleClick}>결제</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography component="div" fontSize="25px" textAlign="center" fontWeight="bold" marginBottom="20px">
            예약 완료
          </Typography>
          <Typography component="div" fontSize="16px" textAlign="center" fontWeight="bolder">
            예약이 성공적으로 처리 되었습니다.
          </Typography>
          <Typography component="div" fontSize="16px" textAlign="center" fontWeight="bolder" marginBottom="35px">
            예약 내용은 마이페이지에서 확인 가능합니다.
          </Typography>
          <Link className="boothmodalButton" to="/selection"><ColorButton size="large" variant="contained" disableElevation >메인 페이지로</ColorButton></Link>
        </Box>
      </Modal>
    </>
  )
}
