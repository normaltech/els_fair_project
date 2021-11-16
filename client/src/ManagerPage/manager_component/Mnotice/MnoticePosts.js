import React from 'react'
import { MnoticeNotice } from './MnoticeNotice';

const MnoticePosts = ({posts, loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }

    // 리턴문안에 중괄호부분 데이터베이스 변수로 채우기
    return (
        <>
         {/* <ul className="list-group mb-4">
             {posts.map(post =>(
                 <MnoticeNotice MnoticeNum={} MnoticeShow={} MnoticeTitle={} MnoticeDate={} />
             ))}
         </ul> */}
        </>    
    )
}

export default MnoticePosts