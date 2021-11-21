import React from 'react'
import { MuserNotice } from './MuserNotice';

const MuserPosts = ({posts, loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }
    console.log(posts);

    // 리턴문안에 중괄호부분 데이터베이스 변수로 채우기
    return (
        <>
        {posts.map(post =>(
            <MuserNotice 
            company={post.company_name}
            primaryNum={post.company_id} 
            boothId={"x"} 
            manager={post.manager} 
            phoneNum={post.manager_phone_num} 
            email={post.email} 
            isActive={post.isActive}/>
        ))}
        </>    
    )
}

export default MuserPosts
