import React, { useState, useEffect } from 'react'
import './boothManagement.css'
import axios from 'axios';
import MBoothPosts from './MBoothPosts';
import { MBoothNotice, btn } from './MBoothNotice';
import MBoothPagenation from './MBoothPagenation';

function BoothManagement() {

    //체인지 함수
    const [c_booth, setc_booth] = useState("-")
    const [c_conpany, setc_conpany] = useState("-")
    const [c_esl, setc_esl] = useState("-")

    const getChange = (c_booth, c_conpany, c_esl) => {
        setc_booth(c_booth);
        setc_conpany(c_conpany);
        setc_esl(c_esl);
    }

    const getboothinfo = (bname, position, type, floor, width, length, height) => {
        setNameInfo(bname);
        setSectionInfo(position);
        setTypeInfo(type);
        setFloorInfo(floor);
        // setWidthInfo(width);
        // setLengthInfo(length);
        // setHeightInfo(height);
    }

    const getvolume = (type) => {
        if(type === 'a'){setWidthInfo(3000); setLengthInfo(3000); setHeightInfo(3000);}
        else if(type === 'b1'){setWidthInfo(6000); setLengthInfo(3000); setHeightInfo(3000);}
        else if(type === 'b2'){setWidthInfo(3000); setLengthInfo(6000); setHeightInfo(6000);}
        else if(type === 'c'){setWidthInfo(6000); setLengthInfo(6000); setHeightInfo(6000);}
    }

    useEffect(() => {
        if (c_booth !== "-") {
            try {
                axios.post("/getboothInfo", {c_booth})
                    .then((response) => {
                        getboothinfo(
                            response.data[0].bname,
                            response.data[0].section,
                            response.data[0].type,
                            response.data[0].layer,
                        )
                        getvolume(response.data[0].type);
                    });
            } catch (error) {
                console.log(error);
            }
        }
    }, [c_booth])

    const getreservation = (cid, cname, cphone, manager, email, personnel) => {
        setCompanyNameInfo(cname);
        setBussinessNumberInfo(cid);
        setManagerNumberInfo(cphone);
        setManagerNameInfo(manager);
        setManagerEmailInfo(email);
        setPeopleNumInfo(personnel);
    }

    useEffect(() => {
        if (c_conpany !== "-") {
            if(c_conpany == null){
                getreservation("-","-","-","-","-","-");
            } else {
                try {
                    axios.post("/getmanagerInfo", {c_conpany})
                        .then((response) => {
                            getreservation(
                                response.data[0].company_id,
                                response.data[0].company_name,
                                response.data[0].company_phone_num,
                                response.data[0].manager,
                                response.data[0].email,
                                response.data[0].personnel,
                            )
                        });
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }, [c_conpany])

    // 부스정보 변수
    const [nameInfo, setNameInfo] = useState('-')
    const [sectionInfo, setSectionInfo] = useState('-')
    const [typeInfo, setTypeInfo] = useState('-')
    const [floorInfo, setFloorInfo] = useState('-')
    const [widthInfo, setWidthInfo] = useState('-')
    const [lengthInfo, setLengthInfo] = useState('-')
    const [heightInfo, setHeightInfo] = useState('-')
    // 예약자정보 변수
    const [companyNameInfo, setCompanyNameInfo] = useState('-')
    const [bussinessNumberInfo, setBussinessNumberInfo] = useState('-')
    const [managerNumberInfo, setManagerNumberInfo] = useState('-')
    const [managerNameInfo, setManagerNameInfo] = useState('-')
    const [managerEmailInfo, setManagerEmailInfo] = useState('-')
    const [peopleNumInfo, setPeopleNumInfo] = useState('-')
    // ESL정보 변수
    const [tagid1, settagid1] = useState('-')
    const [c_id1, setc_id1] = useState('-')
    const [state1, setstate1] = useState('-')
    const [battery1, setbettery1] = useState('-')

    const [tagid2, settagid2] = useState('-')
    const [c_id2, setc_id2] = useState('-')
    const [state2, setstate2] = useState('-')
    const [battery2, setbettery2] = useState('-')
    // 하단 table 변수
    const [detailBoothName, setDetailBoothName] = useState('A-101')
    const [detailBoothType, setDetailBoothType] = useState('a')
    const [detailCompany, setDetailCompany] = useState('CampinGas')
    const [detailEsl, setDetailEsl] = useState('6')
    const [detailPrice, setDetailPrice] = useState('자세히')
    
    // 페이지네이션 변수
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);
    //현재 파일 가져오기
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //esl정보 가져오기
    const btn = () => {
        try {
            axios.get("/esl_crawler")
                .then((response) => {
                    console.log(response.data);
                    settagid1(response.data[1].tag_id);
                    setc_id1(response.data[1].company_name);
                    setstate1(response.data[1].state);
                    setbettery1(response.data[1].battery);

                    settagid2(response.data[2].tag_id);
                    setc_id2(response.data[2].company_name);
                    setstate2(response.data[2].state);
                    setbettery2(response.data[2].battery);
                })
        } catch (error) {
            console.log(error);
        }
        // console.log("하이");
    }

    // useEffect(() => {
    //     btn();
    // }, [])

    //페이지 바꾸기
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(()=>{
        const fetchPosts = async () =>{
          setLoading(true);
          const res = await axios.get('/getManagerBooth'); // 데이터베이스 가져오기
          setPosts(res.data);
          setLoading(false);
        }
    
        fetchPosts();
      }, [])

    const onClickBoothInfo = () =>{
        const addName = detailBoothName.slice(0,2) + detailBoothType + detailBoothName.slice(2,6);
        setNameInfo(addName);
    }  
    useEffect(()=>{
        const sliceType = detailBoothName.slice(0,1) + '구역';
        setSectionInfo(sliceType);
        setTypeInfo(detailBoothType + '타입');

        if(detailBoothName.slice(2,3) == 1){
            setFloorInfo(1 + '층');
        }else if(detailBoothName.slice(2,3) == 2){
            setFloorInfo(2 + '층');
        }else{
            setFloorInfo(3 + '층');
        }

        if(detailBoothType.slice(0,1) === 'a'){
            setWidthInfo(3000);
            setLengthInfo(3000);
            setHeightInfo(3000);
        }else if(detailBoothType.slice(0,1) === 'b'){
            setWidthInfo(6000);
            setLengthInfo(3000);
            setHeightInfo(3000);
        }else{
            setWidthInfo(6000);
            setLengthInfo(6000);
            setHeightInfo(3000);
        }
    }, [nameInfo])

    useEffect(()=>{
        setNameInfo('');
        setSectionInfo('');
        setTypeInfo('');
        setFloorInfo('');
        setWidthInfo('');
        setLengthInfo('');
        setHeightInfo('');
    }, [])

    return (
        <>
            <div className='boothManagement_wrap'>
                {/* 상단 */}
                <div className="boothManagement_search">
                    <input type="text" className="boothManagement_input" placeholder="검색하실 기업을 입력해주세요." />
                    <img src="/assets/icons/iconAwesomeSearch.png" alt="검색이미지" className="boothManagement_img" />
                </div>
                {/* 중앙 */}
                <div className="boothManagement_info_wrap">
                    {/* 부스 정보 */}
                    <div className="boothManagement_boothInfo_wrap">
                        <div className="boothManagement_boothInfo_title">부스 정보</div>
                        <div className="boothManagement_boothInfo_content_wrap">
                            <div className="boothManagement_boothInfo_content boothManagement_boothInfo_name_wrap">
                                <div className="boothManagement_boothInfo_content_style boothManagement_boothInfo_name">이름</div>
                                <div className="boothManagement_boothInfo_content_style boothManagement_boothInfo_nameInfo">{nameInfo}</div>
                            </div>
                            <div className="boothManagement_boothInfo_content boothManagement_boothInfo_section_wrap">
                                <div className="boothManagement_boothInfo_content_style boothManagement_boothInfo_section">구역</div>
                                <div className="boothManagement_boothInfo_content_style boothManagement_boothInfo_sectionInfo">{sectionInfo}</div>
                            </div>
                            <div className="boothManagement_boothInfo_content boothManagement_boothInfo_type_wrap">
                                <div className="boothManagement_boothInfo_content_style boothManagement_boothInfo_type">TYPE</div>
                                <div className="boothManagement_boothInfo_content_style boothManagement_boothInfo_typeInfo">{typeInfo}</div>
                            </div>
                            <div className="boothManagement_boothInfo_content boothManagement_boothInfo_floor_wrap">
                                <div className="boothManagement_boothInfo_content_style boothManagement_boothInfo_floor">층</div>
                                <div className="boothManagement_boothInfo_content_style boothManagement_boothInfo_floorInfo">{floorInfo}</div>
                            </div>
                            <div className="boothManagement_boothInfo_content boothManagement_boothInfo_width_wrap">
                                <div className="boothManagement_boothInfo_content_style boothManagement_boothInfo_width">가로</div>
                                <div className="boothManagement_boothInfo_content_style boothManagement_boothInfo_widthInfo">{widthInfo}</div>
                            </div>
                            <div className="boothManagement_boothInfo_content boothManagement_boothInfo_length_wrap">
                                <div className="boothManagement_boothInfo_content_style boothManagement_boothInfo_length">세로</div>
                                <div className="boothManagement_boothInfo_content_style boothManagement_boothInfo_lengthInfo">{lengthInfo}</div>
                            </div>
                            <div className="boothManagement_boothInfo_content boothManagement_boothInfo_height_wrap">
                                <div className="boothManagement_boothInfo_content_style boothManagement_boothInfo_height">높이</div>
                                <div className="boothManagement_boothInfo_content_style boothManagement_boothInfo_heightInfo">{heightInfo}</div>
                            </div>
                        </div>
                    </div>
                    {/* 예약자 정보 */}
                    <div className="boothManagement_reservationInfo_wrap">
                        <div className="boothManagement_reservationInfo_title">예약자 정보</div>
                        <div className="boothManagement_reservationInfo_content_wrap boothManagement_reservationInfo_true">  
                            <div className="boothManagement_reservationInfo_content boothManagement_reservationInfo_companyName_wrap">
                                <div className="boothManagement_reservationInfo_content_style_title boothManagement_reservationInfo_companyName">회사명</div>
                                <div className="boothManagement_reservationInfo_content_style_sub boothManagement_reservationInfo_companyNameInfo">{companyNameInfo}</div>
                            </div>
                            <div className="boothManagement_reservationInfo_content boothManagement_reservationInfo_bussinessNumber_wrap">
                                <div className="boothManagement_reservationInfo_content_style_title boothManagement_reservationInfo_bussinessNumber">사업자번호</div>
                                <div className="boothManagement_reservationInfo_content_style_sub boothManagement_reservationInfo_bussinessNumberInfo">{bussinessNumberInfo}</div>
                            </div>
                            <div className="boothManagement_reservationInfo_content boothManagement_reservationInfo_managerNumber_wrap">
                                <div className="boothManagement_reservationInfo_content_style_title boothManagement_reservationInfo_managerNumber">담당자 전화번호</div>
                                <div className="boothManagement_reservationInfo_content_style_sub boothManagement_reservationInfo_managerNumberInfo">{managerNumberInfo}</div>
                            </div>
                            <div className="boothManagement_reservationInfo_content boothManagement_reservationInfo_managerName_wrap">
                                <div className="boothManagement_reservationInfo_content_style_title boothManagement_reservationInfo_managerName">담당자 이름</div>
                                <div className="boothManagement_reservationInfo_content_style_sub boothManagement_reservationInfo_managerNameInfo">{managerNameInfo}</div>
                            </div>
                            <div className="boothManagement_reservationInfo_content boothManagement_reservationInfo_managerEmail_wrap">
                                <div className="boothManagement_reservationInfo_content_style_title boothManagement_reservationInfo_managerEmail">담당자 이메일</div>
                                <div className="boothManagement_reservationInfo_content_style_sub boothManagement_reservationInfo_managerEmailInfo">{managerEmailInfo}</div>
                            </div>
                            <div className="boothManagement_reservationInfo_content boothManagement_reservationInfo_peopleNum_wrap">
                                <div className="boothManagement_reservationInfo_content_style_title boothManagement_reservationInfo_peopleNum">참가자 인원</div>
                                <div className="boothManagement_reservationInfo_content_style_sub boothManagement_reservationInfo_peopleNumInfo">{peopleNumInfo}</div>
                            </div>
                        </div>
                        <div className="boothManagement_reservationInfo_false">
                            이 부스는 현재 비어있는 부스입니다.
                        </div>
                    </div>
                    {/* ESL 정보 */}
                    <div className="boothManagement_eslInfo_wrap">
                        <div className="boothManagement_eslInfo_title">ESL 정보</div>
                        {/* table */}
                        <div className="boothManagement_eslInfo_table_wrap boothManagement_eslInfo_true">
                            <table className="boothManagement_eslInfo_table">
                                <tr className="boothManagement_eslInfo_tr">
                                    <th className="boothManagement_eslInfo_padding boothManagement_eslInfo_th">태그ID</th>
                                    <th className="boothManagement_eslInfo_padding boothManagement_eslInfo_th">대여회사</th>
                                    <th className="boothManagement_eslInfo_padding boothManagement_eslInfo_th">상태</th>
                                    <th className="boothManagement_eslInfo_padding boothManagement_eslInfo_th">배터리</th>
                                </tr>
                                <tr>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">{tagid1}</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">{c_id1}</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">{state1}</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">{battery1}%</td>
                                </tr>
                                <tr>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">{tagid2}</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">{c_id2}</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">{state2}</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">{battery2}%</td>
                                </tr>
                                {/* <tr>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">3</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">E1</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">E1-50022SEB</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">대여중</td>
                                </tr>
                                <tr>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">4</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">E1</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">E1-50022SEB</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">대여중</td>
                                </tr>
                                <tr>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">5</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">E2</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">E1-50022SEB</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">대여중</td>
                                </tr>
                                <tr>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">6</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">E3</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">E1-50022SEB</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">대여중</td>
                                </tr>
                                <tr>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">7</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">E3</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">E1-50022SEB</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">대여중</td>
                                </tr>
                                <tr>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">8</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">E3</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">E1-50022SEB</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">대여중</td>
                                </tr> */}
                            </table>
                        </div>
                        <div className="boothManagement_eslInfo_false">
                            이 부스는 현재 비어있는 부스입니다.
                        </div>
                    </div>
                </div>
                {/* 하단 */}
                <div className="boothManagement_detail_wrap">
                    <div className="boothManagement_detail_table_wrap">
                        <table className="boothManagement_detail_table">
                            <tr className="boothManagement_detail_tr">
                                <th className="boothManagement_detail_padding boothManagement_detail_th boothManagement_detail_th1">부스이름</th>
                                <th className="boothManagement_detail_padding boothManagement_detail_th boothManagement_detail_th2">부스형태</th>
                                <th className="boothManagement_detail_padding boothManagement_detail_th boothManagement_detail_th3">회사</th>
                                <th className="boothManagement_detail_padding boothManagement_detail_th boothManagement_detail_th4">ESL</th>
                                <th className="boothManagement_detail_padding boothManagement_detail_th boothManagement_detail_th5">가격</th>
                                <th className="boothManagement_detail_padding boothManagement_detail_th boothManagement_detail_th6">초기화</th>
                            </tr>
                            <MBoothPosts posts={currentPosts} loading={loading} getChange={getChange} />
                        </table>
                    </div>
                    <MBoothPagenation postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
                </div>
            </div>
        </>
    )
}

export default BoothManagement