import React from 'react'
import { MnoticeNotice } from './MnoticeNotice';

const MnoticePosts = ({ posts, loading }) => {

    function leftPad(value) {
        if (value >= 10) {
            return value;
        }
        return `0${value}`;
    }

    function toStringByFormatting(source, delimiter = '-') {
        const year = source.getFullYear();
        const month = leftPad(source.getMonth() + 1);
        const day = leftPad(source.getDate());
        return [year, month, day].join(delimiter);
    }

    if (loading) {
        return <h2>Loading...</h2>
    }

    // 리턴문안에 중괄호부분 데이터베이스 변수로 채우기
    return (
        <>
            {posts.map(post => (
                <MnoticeNotice MnoticeNum={post.id} MnoticeShow={post.exhibition} MnoticeTitle={post.title} MnoticeDate={toStringByFormatting(new Date(post.date))} />
            ))}
        </>
    )
}

export default MnoticePosts