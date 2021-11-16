import React from 'react'
import './UserManagement'
import { Link } from 'react-router-dom';

export const MuserNotice = ({company, primaryNum, userId, manager, phoneNum, email}) => {
    
    const onClickContent = () => {
        document.querySelector('.userManagement_black_bg').style.display = 'block';
        document.querySelector('.userManagement_userDetailModal_wrap').style.display = 'block';
    }
    const onClickUserModify = () => {
        document.querySelector('.userManagement_black_bg').style.display = 'block';
        document.querySelector('.userManagement_userModifyModal_wrap').style.display = 'block';
    }
    const onClickDelete = () => {
        document.querySelector('.userManagement_black_bg').style.display = 'block';
        document.querySelector('.userManagement_deleteModal_wrap').style.display = 'block';
    }
    return (
        <tr> 
            <td className="userManagement_table_padding" onClick={onClickContent}>{company}</td>
            <td className="userManagement_table_padding" onClick={onClickContent}>{primaryNum}</td>
            <td className="userManagement_table_padding" onClick={onClickContent}>{userId}</td>
            <td className="userManagement_table_padding" onClick={onClickContent}>{manager}</td>
            <td className="userManagement_table_padding" onClick={onClickContent}>{phoneNum}</td>
            <td className="userManagement_table_padding" onClick={onClickContent}>{email}</td>
            <td className="userManagement_table_padding">
                <select name="" id="">
                    <option value="">활성화</option>
                    <option value="">비활성화</option>
                </select>
            </td>
            <td className="userManagement_table_padding">
                <button className="userManagement_table_btn"><img src="/assets/user_modify.png" alt="수정"  onClick={onClickUserModify}/></button>
                <button className="userManagement_table_btn"><img className="userManagement_table_deleteImg" src="/assets/user_delete.png" alt="삭제" onClick={onClickDelete} /></button>
            </td>
        </tr>
    )
}
