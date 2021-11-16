import React from 'react'
import { MuserNotice } from './MuserNotice';

const MuserPosts = ({posts, loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }

    // 리턴문안에 중괄호부분 데이터베이스 변수로 채우기
    return (
        <>
         {/* <ul className="list-group mb-4">
             {posts.map(post =>(
                 <MuserNotice company={} primaryNum={} userId={} manager={} phoneNum={} email={}/>
             ))}
         </ul> */}
        </>    
    )
}

export default MuserPosts
