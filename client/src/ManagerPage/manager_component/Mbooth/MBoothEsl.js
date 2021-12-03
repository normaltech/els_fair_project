import React from 'react'
import { MBoothNotice } from './MBoothNotice';
import './boothManagement.css'

const MBoothEsl = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    // 리턴문안에 중괄호부분 데이터베이스 변수로 채우기
    return (
        <>
                {posts.map(post => (
                    <MBoothNotice key={post.Bname} detailBoothName={post.Bname} detailBoothType={post.type} detailCompany={post.Cname} detailEsl={post.ESL} detailPrice={post.price} getChange={getChange}/>
                ))}
        </>
    )
}

export default MBoothEsl