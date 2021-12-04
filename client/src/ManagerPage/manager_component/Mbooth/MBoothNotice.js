import React from 'react'
import './boothManagement.css'
import { Link } from 'react-router-dom';
import { MBoothDelete } from './MBoothDelete';

export const MBoothNotice = ({detailBoothName, detailBoothType, detailCompany, detailEsl, detailPrice, getChange}) => {
    
    const btn = () => {
       getChange(detailBoothName, detailCompany, detailBoothType)
    }
    
    return (
        <tr className="boothManagement_detail_hover" onClick={btn}>
            <td className="boothManagement_detail_padding boothManagement_detail_td">{detailBoothName}</td>
            <td className="boothManagement_detail_padding boothManagement_detail_td">{detailBoothType}</td>
            <td className="boothManagement_detail_padding boothManagement_detail_td">{detailCompany ? detailCompany : "-"}</td>
            <td className="boothManagement_detail_padding boothManagement_detail_td">{detailEsl ? detailEsl : "-"}</td>
            <td className="boothManagement_detail_padding boothManagement_detail_td">{detailPrice}</td>
            {/* <td className="boothManagement_detail_padding boothManagement_detail_td"><button className="boothManagement_detail_btn" onClick={delete_booth}><img src="/assets/reset.png" alt="초기화" /></button></td> */}
            <td className="boothManagement_detail_padding boothManagement_detail_td"><MBoothDelete Mname={detailCompany} /></td>

        </tr>
    )
}
