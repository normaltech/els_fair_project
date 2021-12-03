import React from 'react'
import './boothManagement.css'

const MBoothEsl = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    // 리턴문안에 중괄호부분 데이터베이스 변수로 채우기
    return (
        <>
            {posts.map(post => (
                <>
                    <tr>
                        <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">{post.tag_id}</td>
                        <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">{post.company_name}</td>
                        <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">{post.state}</td>
                        <td className="boothManagement_eslInfo_padding boothManagement_eslInfo_td">{post.battery}</td>
                    </tr>
                </>
            ))}
        </>
    )
}

export default MBoothEsl