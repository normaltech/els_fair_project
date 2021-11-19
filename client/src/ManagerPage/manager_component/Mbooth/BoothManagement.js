import React, { useState, useEffect } from 'react'
import './boothManagement.css'
import axios from 'axios';
import MBoothPosts from './MBoothPosts';
import { MBoothNotice } from './MBoothNotice';
import MBoothPagenation from './MBoothPagenation';

function BoothManagement() {

    // 부스정보 변수
    const [nameInfo, setNameInfo] = useState('')
    const [sectionInfo, setSectionInfo] = useState('')
    const [typeInfo, setTypeInfo] = useState('')
    const [floorInfo, setFloorInfo] = useState('')
    const [widthInfo, setWidthInfo] = useState('')
    const [lengthInfo, setLengthInfo] = useState('')
    const [heightInfo, setHeightInfo] = useState('')
    // 예약자정보 변수
    const [companyNameInfo, setCompanyNameInfo] = useState('CampingGas')
    const [bussinessNumberInfo, setBussinessNumberInfo] = useState('**********')
    const [managerNumberInfo, setManagerNumberInfo] = useState('010-1111-1111')
    const [managerNameInfo, setManagerNameInfo] = useState('김담당')
    const [managerEmailInfo, setManagerEmailInfo] = useState('damdang@naver.com')
    const [peopleNumInfo, setPeopleNumInfo] = useState('4명')
    // ESL정보 변수
    const [eslInfoNum, setEslInfoNum] = useState('1')
    const [eslInfoType, setEslInfoType] = useState('E1')
    const [eslInfoId, setEslInfoId] = useState('E1-50022SEB')
    const [eslInfoState, setEslInfoState] = useState('대여중')
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
    //페이지 바꾸기
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(()=>{
        const fetchPosts = async () =>{
          setLoading(true);
          const res = await axios.get(''); // 데이터베이스 가져오기
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
                                    <th className="boothManagement_eslInfo_padding boothManagement_eslInfo_th">순번</th>
                                    <th className="boothManagement_eslInfo_padding boothManagement_eslInfo_th">타입</th>
                                    <th className="boothManagement_eslInfo_padding boothManagement_eslInfo_th">ID</th>
                                    <th className="boothManagement_eslInfo_padding boothManagement_eslInfo_th">상태</th>
                                </tr>
                                <tr>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">{eslInfoNum}</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">{eslInfoType }</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">{eslInfoId}</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">{eslInfoState}</td>
                                </tr>
                                <tr>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">2</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">E1</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">E1-50022SEB</td>
                                    <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">대여중</td>
                                </tr>
                                <tr>
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
                                </tr>
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
                                <th className="boothManagement_detail_padding boothManagement_detail_th">부스이름</th>
                                <th className="boothManagement_detail_padding boothManagement_detail_th">부스형태</th>
                                <th className="boothManagement_detail_padding boothManagement_detail_th">회사</th>
                                <th className="boothManagement_detail_padding boothManagement_detail_th">ESL</th>
                                <th className="boothManagement_detail_padding boothManagement_detail_th">가격</th>
                                <th className="boothManagement_detail_padding boothManagement_detail_th">초기화</th>
                            </tr>
                            <tr className="boothManagement_detail_hover" onClick={onClickBoothInfo}>
                                <td className="boothManagement_detail_padding boothManagement_detail_td">{detailBoothName}</td>
                                <td className="boothManagement_detail_padding boothManagement_detail_td">{detailBoothType}</td>
                                <td className="boothManagement_detail_padding boothManagement_detail_td">{detailCompany}</td>
                                <td className="boothManagement_detail_padding boothManagement_detail_td">{detailEsl}</td>
                                <td className="boothManagement_detail_padding boothManagement_detail_td">{detailPrice}</td>
                                <td className="boothManagement_detail_padding boothManagement_detail_td"><button className="boothManagement_detail_btn"><img src="/assets/reset.png" alt="초기화" /></button></td>
                            </tr>
                            <MBoothPosts posts={currentPosts} loading={loading}/>
                        </table>
                    </div>
                    <MBoothPagenation postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
                </div>
            </div>
        </>
    )
}

export default BoothManagement