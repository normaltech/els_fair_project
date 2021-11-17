import React,{useState, useEffect} from 'react'
import './booth.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Modal } from '@mui/material';
import BoothModal from '../selectbooth/boothmodal/BoothModal';
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
            boothModalList.push(<BoothModal boothId={item.booth_id} className={item.section+"_"+item.TYPE+"_"+item.layer+"0"+item.NUMBER} section={item.section} type={item.TYPE.substring(0,1)} layer={item.layer} number={"0"+item.NUMBER}/>)
        }
    )
    return(
        <>
            <div className="booth_wrap">
                <img id="booth_in" src="/assets/IN.png" alt="입구이미지" />
                <img id="booth_out" src="/assets/OUT.png" alt="출구이미지" />
                <img id="booth_state" src="/assets/STATE.png" alt="예약상태이미지" />

                {boothModalList}
               {/*
                
                <BoothModal className={"A_b1_101"} section={"A"} type={"b"} layer={layer} number={"01"}/>
                <BoothModal className={"A_a_102"} section={"A"} type={"a"} layer={layer} number={"02"}/>
                <BoothModal className={"A_a_103"} section={"A"} type={"a"} layer={layer} number={"03"}/>
                <BoothModal className={"A_a_104"} section={"A"} type={"a"} layer={layer} number={"04"}/>
                <BoothModal className={"A_a_105"} section={"A"} type={"a"} layer={layer} number={"05"}/>
                <BoothModal className={"A_a_106"} section={"A"} type={"a"} layer={layer} number={"06"}/>
                <BoothModal className={"A_a_107"} section={"A"} type={"a"} layer={layer} number={"07"}/>
                <BoothModal className={"A_b2_108"} section={"A"} type={"b"} layer={layer} number={"08"}/>
                
                <BoothModal className={"B_c_101"} section={"B"} type={"c"} layer={layer} number={"01"}/>
                <BoothModal className={"B_c_102"} section={"B"} type={"c"} layer={layer} number={"02"}/>
                <BoothModal className={"B_a_103"} section={"B"} type={"a"} layer={layer} number={"03"}/>
                <BoothModal className={"B_b1_104"} section={"B"} type={"b"} layer={layer} number={"04"}/>
                <BoothModal className={"B_b1_105"} section={"B"} type={"b"} layer={layer} number={"05"}/>
                <BoothModal className={"B_b1_106"} section={"B"} type={"b"} layer={layer} number={"06"}/>
                <BoothModal className={"B_a_107"} section={"B"} type={"a"} layer={layer} number={"07"}/>
                <BoothModal className={"B_b1_108"} section={"B"} type={"b"} layer={layer} number={"08"}/>
                
                <BoothModal className={"C_c_101"} section={"C"} type={"c"} layer={layer} number={"01"}/>
                <BoothModal className={"C_a_102"} section={"C"} type={"a"} layer={layer} number={"02"}/>
                <BoothModal className={"C_b2_103"} section={"C"} type={"b"} layer={layer} number={"03"}/>
                <BoothModal className={"C_b1_104"} section={"C"} type={"b"} layer={layer} number={"04"}/>
                <BoothModal className={"C_b1_105"} section={"C"} type={"b"} layer={layer} number={"05"}/>
                <BoothModal className={"C_b2_106"} section={"C"} type={"b"} layer={layer} number={"06"}/>
               
                <BoothModal className={"D_b2_101"} section={"D"} type={"b"} layer={layer} number={"01"}/>
                <BoothModal className={"D_a_102"} section={"D"} type={"a"} layer={layer} number={"02"}/>
                <BoothModal className={"D_a_103"} section={"D"} type={"a"} layer={layer} number={"03"}/>
                <BoothModal className={"D_a_104"} section={"D"} type={"a"} layer={layer} number={"04"}/>
                <BoothModal className={"D_a_105"} section={"D"} type={"a"} layer={layer} number={"05"}/>
                <BoothModal className={"D_b2_106"} section={"D"} type={"b"} layer={layer} number={"06"}/>
                <BoothModal className={"D_c_107"} section={"D"} type={"c"} layer={layer} number={"07"}/>
                <BoothModal className={"D_c_108"} section={"D"} type={"c"} layer={layer} number={"08"}/>
                
                <BoothModal className={"E_c_101"} section={"E"} type={"c"} layer={layer} number={"01"}/>
                <BoothModal className={"E_c_102"} section={"E"} type={"c"} layer={layer} number={"02"}/>
                <BoothModal className={"E_b2_103"} section={"E"} type={"b"} layer={layer} number={"03"}/>
                <BoothModal className={"E_c_104"} section={"E"} type={"c"} layer={layer} number={"04"}/>
               
                <BoothModal className={"F_c_101"} section={"F"} type={"c"} layer={layer} number={"01"}/>
                <BoothModal className={"F_a_102"} section={"F"} type={"a"} layer={layer} number={"02"}/>
                <BoothModal className={"F_a_103"} section={"F"} type={"a"} layer={layer} number={"03"}/>
                <BoothModal className={"F_a_104"} section={"F"} type={"a"} layer={layer} number={"04"}/>
                <BoothModal className={"F_a_105"} section={"F"} type={"a"} layer={layer} number={"05"}/>
                <BoothModal className={"F_c_106"} section={"F"} type={"c"} layer={layer} number={"06"}/>
                
                <BoothModal className={"G_c_101"} section={"G"} type={"c"} layer={layer} number={"01"}/>
                <BoothModal className={"G_c_102"} section={"G"} type={"c"} layer={layer} number={"02"}/>
                <BoothModal className={"G_b1_103"} section={"G"} type={"b"} layer={layer} number={"03"}/>
                <BoothModal className={"G_a_104"} section={"G"} type={"a"} layer={layer} number={"04"}/>
                <BoothModal className={"G_a_105"} section={"G"} type={"a"} layer={layer} number={"05"}/>
                <BoothModal className={"G_a_106"} section={"G"} type={"a"} layer={layer} number={"06"}/>
                <BoothModal className={"G_a_107"} section={"G"} type={"a"} layer={layer} number={"07"}/>
               
                <BoothModal className={"H_c_101"} section={"H"} type={"c"} layer={layer} number={"01"}/>
                <BoothModal className={"H_b2_102"} section={"H"} type={"b"} layer={layer} number={"02"}/>
                <BoothModal className={"H_b2_103"} section={"H"} type={"b"} layer={layer} number={"03"}/>
                <BoothModal className={"H_a_104"} section={"H"} type={"a"} layer={layer} number={"04"}/>
                <BoothModal className={"H_a_105"} section={"H"} type={"a"} layer={layer} number={"05"}/>
                <BoothModal className={"H_a_106"} section={"H"} type={"a"} layer={layer} number={"06"}/>
                <BoothModal className={"H_a_107"} section={"H"} type={"a"} layer={layer} number={"07"}/>
                <BoothModal className={"H_b2_108"} section={"H"} type={"b"} layer={layer} number={"08"}/>
                <BoothModal className={"H_b2_109"} section={"H"} type={"b"} layer={layer} number={"09"}/>
                
                <BoothModal className={"I_a_101"} section={"I"} type={"a"} layer={layer} number={"01"}/>
                <BoothModal className={"I_a_102"} section={"I"} type={"a"} layer={layer} number={"02"}/>
                <BoothModal className={"I_a_103"} section={"I"} type={"a"} layer={layer} number={"03"}/>
                <BoothModal className={"I_a_104"} section={"I"} type={"a"} layer={layer} number={"04"}/>
                <BoothModal className={"I_b1_105"} section={"I"} type={"b"} layer={layer} number={"05"}/>
                <BoothModal className={"I_b1_106"} section={"I"} type={"b"} layer={layer} number={"06"}/>
                */}
            </div>
        </>
    )
}