import React from 'react'
import { MuserNotice } from './MuserNotice';
const MuserPosts = ({posts, loading}) => {
    // const company_id = posts.company_id;
    // const boothId = useFetch(company_id);
    // console.log(boothId);
    if(loading){
        return <h2>Loading...</h2>
    }
    // 리턴문안에 중괄호부분 데이터베이스 변수로 채우기
    return (
        <>
        {posts.map(post =>(
            <MuserNotice 
            company={post.company_name}
            primaryNum={post.company_id} 
            boothId={"-"} 
            manager={post.manager} 
            phoneNum={post.manager_phone_num} 
            email={post.email} 
            isActive={post.isActive}
            companyNum={post.company_phone_num}/>
        ))}
        </>    
    )
}

export default MuserPosts
