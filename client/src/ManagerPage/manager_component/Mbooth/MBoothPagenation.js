import React from 'react'

const MBoothPagenation = ({postPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination"> {/* justify-content-center 일단 뺌 */}
                {pageNumbers.map(number =>(
                    <li key = {number} className="page-item">
                        <a onClick={()=> paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
};
export default MBoothPagenation;
