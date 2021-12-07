import React,{useState, useEffect} from 'react'
import './managerbooth.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Modal } from '@mui/material';
import ManagerBoothModal from './boothmodal/ManagerBoothModal'


//박람회 id 받아와서 서버에 넘겨주는 방식으로 수정해야함
let ehData = {
    exhibitionId : 1
    // section : 'A'
}
function useFetch(url){
    const [data, setData] = useState([])
    async function fetchUrl(){
        try{
            axios.post(url,ehData).then((res) => {
                setData(res.data);
            });
        }catch(error){
           console.log(error);
        }
    }
    useEffect(() => {
        fetchUrl();
     },[]);
    return data;
}



export default function Booth( {layer, handleOpen, handleClose} ) {
    
    const boothList = useFetch("/getBooth");
    const boothModalList = [];
    boothList.map(
        (item)=>{
            boothModalList.push(<ManagerBoothModal isReserved={item.isReserved} boothId={item.booth_id} className={"manager"+item.section+"_"+item.TYPE+"_"+item.layer+"0"+item.NUMBER} section={item.section} type={item.TYPE.substring(0,1)} layer={item.layer} number={"0"+item.NUMBER} company_id={item.company_id} />)
        }
    )
    return(
        <>
            <div className="booth_wrap">
                <img id="booth_in" src="/assets/IN.png" alt="입구이미지" />
                <img id="booth_out" src="/assets/OUT.png" alt="출구이미지" />
                <img id="booth_state" src="/assets/STATE.png" alt="예약상태이미지" />
                {boothModalList}
            </div>
        </>
    )
}