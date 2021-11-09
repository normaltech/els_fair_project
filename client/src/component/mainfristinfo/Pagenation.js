import React from 'react'
import './pagenation.css';

const Pagination = ({postPerPage, totalPosts, paginate})=>{
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                {pageNumbers.map(number =>(
                    <li key = {number} className="page-item">
                        <a onClick={()=> paginate(number)} className="page-link pagenation_pagenum">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
};
export default Pagination;