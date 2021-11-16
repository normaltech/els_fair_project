import React from 'react'
import './notice.css'
import { Link } from 'react-router-dom';

export const MnoticeNotice = ({MnoticeNum, MnoticeShow, MnoticeTitle, MnoticeDate}) => {
    return (
        <tr>
            <td className="Mnotice_table_padding">{MnoticeNum}</td>
            <td className="Mnotice_table_padding">{MnoticeShow}</td>
            <td className="Mnotice_table_padding">{MnoticeTitle}</td>
            <td className="Mnotice_table_padding">{MnoticeDate}</td>
            <td className="Mnotice_table_padding"><input type="checkbox" /></td>
        </tr>
    )
}