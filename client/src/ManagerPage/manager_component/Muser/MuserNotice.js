import React from 'react'
import './UserManagement'
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';
import { ShowUserModal } from './ShowUserModal';
import { Link } from 'react-router-dom';


export const MuserNotice = ({company, primaryNum, boothId, manager, phoneNum, email,isActive}) => {
    if(isActive == 1){
        isActive = "사용중";
    }else{
        isActive = "사용중지";
    }
    const onClickContent = () => {
        document.querySelector('.userManagement_black_bg').style.display = 'block';
        document.querySelector('.userManagement_userDetailModal_wrap').style.display = 'block';
    }
    const onClickUserModify = () => {
        // document.querySelector('.userManagement_black_bg').style.display = 'block';
        // document.querySelector('.userManagement_userModifyModal_wrap').style.display = 'block';
        // <ModalEdit manager={manager} />
    }
    const onClickDelete = () => {
        document.querySelector('.userManagement_black_bg').style.display = 'block';
        document.querySelector('.userManagement_deleteModal_wrap').style.display = 'block';
    }
    return (
        <>
        <tr> 
            {/* <td className="userManagement_table_padding" onClick={onClickContent}>{company}</td>
            <td className="userManagement_table_padding" onClick={onClickContent}>{primaryNum}</td>
            <td className="userManagement_table_padding" onClick={onClickContent}>{boothId}</td>
            <td className="userManagement_table_padding" onClick={onClickContent}>{manager}</td>
            <td className="userManagement_table_padding" onClick={onClickContent}>{phoneNum}</td>
            <td className="userManagement_table_padding" onClick={onClickContent}>{email}</td> */}
            <ShowUserModal company={company} primaryNum={primaryNum} boothId={boothId} manager={manager} phoneNum={phoneNum} email={email} />
            <td className="userManagement_table_padding">{isActive}
                {/* <select name="" id="">
                    <option value="">활성화</option>
                    <option value="">비활성화</option>
                </select> */}
            </td>
            <td className="userManagement_table_padding">
                <EditModal companyId={primaryNum}/>
                <DeleteModal companyId={primaryNum}/>
                {/* <button className="userManagement_table_btn"><img className="userManagement_table_deleteImg" src="/assets/user_delete.png" alt="삭제" onClick={onClickDelete} /></button> */}
            </td>
        </tr>
        
        </>
    )
}