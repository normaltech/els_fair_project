import React, { useState, useEffect } from 'react'
import './managerMain.css'
import { CompanyM } from './company/CompanyM'
import ManagerBooth from './managerbooth/ManagerBooth'
import axios from 'axios';
function useFetch(url){
    const [data, setData] = useState()
    async function fetchUrl(){
        axios.get(url).then((res)=>{
            setData(res.data.num);
        });
    }

    useEffect(() => {
        fetchUrl();
     },[]);

    return data;
}
function ManagerMain(esl_data) {

    var corpTeam = useFetch("/api/getCompanyCount")
    const [corpInfoNum, setCorpInfoNum] = useState('3')
    const [visitorNum, setVisitorNum] = useState('352')
    const [visitorInfoNum, setVisitorInfoNum] = useState('352')
    const [companyName, setCompanyName] = useState('펍쥐')
    const [companyNum, setCompanyNum] = useState('5')
    const [companyBooth, setCompanyBooth] = useState('A-a101')
    const [eslNum, setEslNum] = useState('-')
    const [eslDestroyNum, setEslDestroyNum] = useState('-')

    const btn = () => {
        try {
            axios.get("/api/esl_crawler")
                .then((response) => {
                    setEslNum(response.data.length - 1);
                })
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect(() => {
    //     btn();
    // }, []);
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

    const esl_btn = () => {
        try {
            axios.get("/api/esl_crawler")
                .then((response) => {
                    console.log(response.data);
                    settagid1(response.data[1].tag_id);
                    setc_id1(response.data[1].company_id);
                    setstate1(response.data[1].state);
                    setbettery1(response.data[1].battery);
                    setcompany1(response.data[1].company_name);

                    settagid2(response.data[2].tag_id);
                    setc_id2(response.data[2].company_id);
                    setstate2(response.data[2].state);
                    setbettery2(response.data[2].battery);
                    setcompany2(response.data[2].company_name);
                })
        } catch (error) {
            console.log(error);
        }
        // console.log("하이");
    }

    // useEffect(() => {
    //     esl_btn();
    // }, [])

    return (
        <>
            <div className='managerMain_wrap'>
                {/* 1. 기업, 관람객 수 */}
                <div className="managerMain_top_content_wrap">
                    <div className="managerMain_corp_wrap">
                        <div className="managerMain_corp_padding managerMain_corpTitle">기업</div>
                        <div className="managerMain_corp_padding managerMain_corpTeam">{corpTeam}팀 참여중</div>
                        <div className="managerMain_corp_padding managerMain_corpInfo">
                            <div className="managerMain_corpInfo_margin managerMain_corpInfoNum">{corpInfoNum}팀</div>
                            <div className="managerMain_corpInfo_margin managerMain_corpInfoIcon"><img className="managerMain_up" src="/assets/up.png" alt="위쪽화살표" /></div>
                            <div className="managerMain_corpInfo_margin managerMain_corpInfoYesterday">than yesterday</div>
                        </div>
                    </div>
                    <div className="managerMain_visitor_wrap">
                        <div className="managerMain_visitor_padding managerMain_visitorTitle">관람</div>
                        <div className="managerMain_visitor_padding managerMain_visitorNum">{visitorNum}명 관람중</div>
                        <div className="managerMain_visitor_padding managerMain_visitorInfo">
                            <div className="managerMain_visitorInfo_margin managerMain_visitorInfoNum">{visitorInfoNum}명</div>
                            <div className="managerMain_visitorInfo_margin managerMain_visitorInfoIcon"><img className="managerMain_down" src="/assets/down.png" alt="아래화살표" /></div>
                            <div className="managerMain_visitorInfo_margin managerMain_visitorInfoYesterday">than yesterday</div>
                        </div>
                    </div>
                </div>
                {/* 2. 부스 예약 현황 */}
                <div className="managerMain_middle_content_wrap">
                    <div className="managerMain_boothReservationInfo">
                      <ManagerBooth/>
                    </div>
                </div>
                {/* 3. 기업관리 및 ESL관리 */}
                <div className="managerMain_bottom_cotent_wrap">
                    
                    {/* 기업관리 */}
                    <CompanyM />

                    {/* ESL 관리 */}
                    <div className="managerMain_eslManage_wrap">
                        {/* <div className="managerMain_eslManageTitle">ESL관리</div>
                        <div className="managerMain_eslManageInfo_wrap">
                            <div className="managerMain_eslManageNum_wrap">
                                <div className="managerMain_eslManageNumTitle">개수</div>
                                <div className="managerMain_eslManageNum">{eslNum}</div>
                            </div>
                            <div className="managerMain_eslManageDestroy_wrap">
                                <div className="managerMain_eslManageDestroyTitle">연결현황</div>
                                <div className="managerMain_eslManageDestroy">{eslDestroyNum}</div>
                            </div>
                        </div>
                        <div className="managerMain_eslManageUnder_wrap">
                            <div><img className="managerMain_eslManageUnder_img" src="/assets/network.png" alt="network사진" /></div>
                            <div>esl</div>
                        </div> */}
                         <div className="esl_table_wrap">
                            <table className="esl_table">
                                <tr className="esl_table_tr">
                                    <th className="esl_table_padding">태그 ID</th>
                                    <th className="esl_table_padding">회사</th>
                                    <th className="esl_table_padding">사업자번호</th>
                                    <th className="esl_table_padding">상태</th>
                                    <th className="esl_table_padding">배터리</th>
                                </tr>
                                <tr>
                                    <td className="esl_table_padding">{tagid1}</td>
                                    <td className="esl_table_padding">{company1}</td>
                                    <td className="esl_table_padding">{c_id1}</td>
                                    <td className="esl_table_padding">{state1}</td>
                                    <td className="esl_table_padding">{battery1}%</td>
                                </tr>
                                <tr>
                                    <td className="esl_table_padding">{tagid2}</td>
                                    <td className="esl_table_padding">{company2}</td>
                                    <td className="esl_table_padding">{c_id2}</td>
                                    <td className="esl_table_padding">{state2}</td>
                                    <td className="esl_table_padding">{battery2}%</td>
                                </tr>
                            </table>
                            {/* <button className="esl_rebtn" onClick={esl_btn}>재조회</button> */}
                        </div>
                        <button className="esl_rebtn" onClick={esl_btn}>재조회</button>
                    </div>
                </div>
            </div>
        </>
        // 변수 props작업
    )
}

export default ManagerMain