import React from "react";
import '../managerMain.css'

export const CompanyForm = ({ company, personnel, booth }) => {
    
    return (
        <tr className="managerMain_th_borderBottom">
            <th className="managerMain_padding managerMain_th">{company}</th>
            <th className="managerMain_padding managerMain_th">{personnel == 0 ? "-" : personnel + "명"}</th>
            <th className="managerMain_padding managerMain_th">{booth ? booth : "-"}</th>
        </tr>
    )
}