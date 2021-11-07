import React, {useState, useEffect} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons'
import axios from 'axios';

function Navbar() {
    
    const [sidebar, setsidebar] = useState(false);
    const [manager_name, setmanager_name] = useState('홍길동');
    const [icon, seticon] = useState(AiIcons.AiFillHome);
    const [pagename, setpagename] = useState('Home');

    const showSidebar = () => setsidebar(!sidebar);

    const showHeader = (e) => {
        setpagename(e.title);
        seticon(e.icon);
    }

    // useEffect(() => { //session에서 받아온 유저정보
    //     try {
    //       axios.get("/getuserinfo")
    //       .then((response) => {
    //         if(response.data[0].manager){
    //             setmanager_name(response.data[0].manager);
    //         }
    //         else {
    //             setmanager_name('로그인안됨'); //세션에 정보가 없으면 로그인 X
    //         }
    //       });
    //     } catch (error) {
    //       console.log(error);
    //     }
    // }, []);


    return (
        <>
        <IconContext.Provider value={{color: '#060b26'}}>
                <div className="navbar">
                    <span>
                        <Link to="#" className="menu-bars">
                            <FaIcons.FaBars onClick={showSidebar} />
                        </Link>
                        <span className="nowpage">{icon}</span>
                        <span className="nowpage">{pagename}</span>
                    </span>
                    <span className="logoimg"><img src="/assets/headerlogo.png" alt="로고이미지" /></span>
                    <span className="manager-name">
                        <span className="messageicon"><GoCommentDiscussion /></span>
                        <span>{manager_name}</span>
                    </span>
                </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle" >
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index, initialValue) => {
                        return(
                            <li key={index} className={item.cName} onClick={()=>{showHeader(item)}}>
                                <Link to={item.path} >
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
