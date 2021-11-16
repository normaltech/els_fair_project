import React from 'react'
import './boothManagement.css'
import { Link } from 'react-router-dom';

export const MBoothNotice = ({detailBoothName, detailBoothType, detailCompany, detailEsl, detailPrice}) => {
    return (
        <tr className="boothManagement_detail_hover">
            <td className="boothManagement_detail_padding boothManagement_detail_td">{detailBoothName}</td>
            <td className="boothManagement_detail_padding boothManagement_detail_td">{detailBoothType}</td>
            <td className="boothManagement_detail_padding boothManagement_detail_td">{detailCompany}</td>
            <td className="boothManagement_detail_padding boothManagement_detail_td">{detailEsl}</td>
            <td className="boothManagement_detail_padding boothManagement_detail_td">{detailPrice}</td>
            <td className="boothManagement_detail_padding boothManagement_detail_td"><button className="boothManagement_detail_btn"><img src="/assets/reset.png" alt="초기화" /></button></td>
        </tr>
    )
}
