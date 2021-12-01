import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EslManagement.css';


function EslManagement() {

    const [tagid1, settagid1] = useState('-')
    const [company1, setcompany1] = useState('-')
    const [c_id1, setc_id1] = useState('-')
    const [state1, setstate1] = useState('-')
    const [battery1, setbettery1] = useState('-')

    const [tagid2, settagid2] = useState('-')
    const [company2, setcompany2] = useState('-')
    const [c_id2, setc_id2] = useState('-')
    const [state2, setstate2] = useState('-')
    const [battery2, setbettery2] = useState('-')

    const btn = () => {
        // try {
        //     axios.get("/esl_crawler")
        //         .then((response) => {
        //             console.log(response.data);
        //             settagid1(response.data[1].tag_id);
        //             setc_id1(response.data[1].company_id);
        //             setstate1(response.data[1].state);
        //             setbettery1(response.data[1].battery);

        //             settagid2(response.data[2].tag_id);
        //             setc_id2(response.data[2].company_id);
        //             setstate2(response.data[2].state);
        //             setbettery2(response.data[2].battery);
        //         })
        // } catch (error) {
        //     console.log(error);
        // }
        console.log("하이");
    }

    // useEffect(() => {
    //     btn();
    // }, [])

    return (
        <>
            <div className="Mnotice_table_wrap">
                <table className="Mnotice_table">
                    <tr className="Mnotice_table_tr">
                        <th className="Mnotice_table_padding">태그 ID</th>
                        <th className="Mnotice_table_padding">회사</th>
                        <th className="Mnotice_table_padding">사업자번호</th>
                        <th className="Mnotice_table_padding">상태</th>
                        <th className="Mnotice_table_padding">배터리</th>
                    </tr>
                    <tr>
                        <td className="Mnotice_table_padding">{tagid1}</td>
                        <td className="Mnotice_table_padding">{company1}</td>
                        <td className="Mnotice_table_padding">{c_id1}</td>
                        <td className="Mnotice_table_padding">{state1}</td>
                        <td className="Mnotice_table_padding">{battery1}%</td>
                    </tr>
                    <tr>
                        <td className="Mnotice_table_padding">{tagid2}</td>
                        <td className="Mnotice_table_padding">{company2}</td>
                        <td className="Mnotice_table_padding">{c_id2}</td>
                        <td className="Mnotice_table_padding">{state2}</td>
                        <td className="Mnotice_table_padding">{battery2}%</td>
                    </tr>
                </table>
                <button onClick={btn}>조회</button>
            </div>
        </>
    )
}

export default EslManagement