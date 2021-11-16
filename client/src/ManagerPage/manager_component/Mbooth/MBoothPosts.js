import React from 'react'
import { MBoothNotice } from './MBoothNotice';

const MBoothPosts = ({posts, loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }

    // 리턴문안에 중괄호부분 데이터베이스 변수로 채우기
    return (
        <>
         {/* <ul className="list-group mb-4">
             {posts.map(post =>(
                 <MboothNotice detailBoothName={} detailBoothType={} detailCompany={} detailEsl={} detailPrice={} />
             ))}
         </ul> */}
        </>    
    )
}

export default MBoothPosts
