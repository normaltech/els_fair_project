import React from 'react';
import '../mainfirst/mainfirst.css';
import { Link } from 'react-router-dom';

export const Notice = ({num, exhibition, title, date}) => (

    <div className="noticeDetail">
        <div className="n1">{num}</div>
        <div className="n2"><Link to="#">{exhibition}</Link></div>
        <div className="n3"><Link to="#">{title}</Link></div>
        <div className="n4">{date}</div>
        {/* <div className="n5"><input type="checkbox" /></div> */}
    </div>

);