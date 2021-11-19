import React, { useState } from 'react'
import './managerMain.css'
import { CompanyM } from './company/CompanyM'

function ManagerMain() {

    const [corpTeam, setCorpTeam] = useState('38')
    const [corpInfoNum, setCorpInfoNum] = useState('3')
    const [visitorNum, setVisitorNum] = useState('352')
    const [visitorInfoNum, setVisitorInfoNum] = useState('352')
    const [companyName, setCompanyName] = useState('펍쥐')
    const [companyNum, setCompanyNum] = useState('5')
    const [companyBooth, setCompanyBooth] = useState('A-a101')
    const [eslNum, setEslNum] = useState('85')
    const [eslDestroyNum, setEslDestroyNum] = useState('85')

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

                    </div>
                </div>
                {/* 3. 기업관리 및 ESL관리 */}
                <div className="managerMain_bottom_cotent_wrap">
                    
                    {/* 기업관리 */}
                    <CompanyM />

                    {/* ESL 관리 */}
                    <div className="managerMain_eslManage_wrap">
                        <div className="managerMain_eslManageTitle">ESL관리</div>
                        <div className="managerMain_eslManageInfo_wrap">
                            <div className="managerMain_eslManageNum_wrap">
                                <div className="managerMain_eslManageNumTitle">개수</div>
                                <div className="managerMain_eslManageNum">{eslNum}</div>
                            </div>
                            <div className="managerMain_eslManageDestroy_wrap">
                                <div className="managerMain_eslManageDestroyTitle">파손현황</div>
                                <div className="managerMain_eslManageDestroy">{eslDestroyNum}</div>
                            </div>
                        </div>
                        <div className="managerMain_eslManageUnder_wrap">
                            <div><img className="managerMain_eslManageUnder_img" src="/assets/network.png" alt="network사진" /></div>
                            <div>현재 장치가 정상 작동중입니다.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        // 변수 props작업
    )
}

export default ManagerMain