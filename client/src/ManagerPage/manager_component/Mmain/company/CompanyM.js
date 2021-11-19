import React, { useState, useEffect } from "react";
import '../managerMain.css'
import axios from "axios";
import { CompanyForm } from "./CompanyForm";

function useFetch(url) {
    const [data, setData] = useState([])
    async function fetchUrl() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
    }

    useEffect(() => {
        fetchUrl();
    }, []);

    return data;
}

export const CompanyM = () => {
    const data = useFetch("/companyList");
    return (
        <div className="managerMain_corpManage_wrap">
            <div className="managerMain_corpManageTitle">기업관리</div>
            <div className="managerMain_table_wrap">
                <table className="managerMain_table">
                    <tr className="managerMain_th_borderBottom">
                        <th className="managerMain_padding managerMain_th">회사명</th>
                        <th className="managerMain_padding managerMain_th">인원</th>
                        <th className="managerMain_padding managerMain_th">부스</th>
                    </tr>
                    {data.map((item) => {
                        return (
                            <CompanyForm
                                key={item.id}
                                company={item.company_name}
                                personnel={item.personnel}
                                booth={item.booth}
                            />
                        )
                    })}
                </table>
            </div>
        </div>
    )
}