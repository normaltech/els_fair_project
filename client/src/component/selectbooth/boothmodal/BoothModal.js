import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './boothmodal.css'
import { orange } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

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

export default function BoothModal({}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography textAlign="center" id="modal-modal-title" variant="h5" component="div" marginBottom="30px" fontSize="32px" fontWeight="Bold">
            {'예약가능'}
          </Typography>
          <div className="modalCenterMakeHelper">
            <Box className="modalBoothType" marginBottom="30px">
              <div className="modalBoothTypeLeft">
                <Typography component="div" fontSize="16px">
                  부스번호
                </Typography>
                <Typography component="div" fontSize="25px" fontWeight="bold">
                  B-a106
                </Typography>
              </div>
              <div className="modalBoothTypeRight">
                <Typography component="div">
                  B구역
                </Typography>
                <Typography component="div">
                  a타입
                </Typography>
                <Typography component="div">
                  106
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
            <ColorButton size="large" variant="contained" display="flex" disableElevation >부스신청</ColorButton>
          </div>
        </Box>
      </Modal>
    </>
  )
}
