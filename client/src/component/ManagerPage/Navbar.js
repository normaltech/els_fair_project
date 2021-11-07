import React, {useState, useEffect} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons'

function Navbar() {
    
    const [sidebar, setsidebar] = useState(false);
    const [manager_name, setmanager_name] = useState('홍길동');
    const [icon, seticon] = useState(AiIcons.AiFillHome);
    const [pagename, setpagename] = useState('Home');

    const showSidebar = () => setsidebar(!sidebar);

    const showHeader = (e) => {
        console.log(e);
        setpagename(e);
    }

    useEffect(() => { 
        try {
            console.log('유저이펙트');

        } catch (error) {
            console.log(error);
        }
    }, []);


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
                    <span><img src="/assets/headerlogo.png" alt="로고이미지" /></span>
                    <span className="manager-name">
                        <span><FaIcons.FaRegCommentAlt /></span>
                        <span>{manager_name}</span>
                    </span>
                </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ui className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle" >
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index, initialValue) => {
                        return(
                            <li key={index} className={item.cName} onClick={()=>{showHeader(item.title)}}>
                                <Link to={item.path} >
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ui>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
