import React from 'react'
import { Notice } from './Notice';
//날짜 포멧 바꾸기
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

const Posts = ({posts, loading})=>{
    if(loading){
        return <h2>Loading...</h2>
    }

    return(<ul className="list-group mb-4">
        {posts.map(post =>(
            <Notice num={post.id} exhibition={post.exhibition} title={post.title} date={toStringByFormatting(new Date(post.date))} />
        ))}
    </ul>
    )
};

export default Posts;