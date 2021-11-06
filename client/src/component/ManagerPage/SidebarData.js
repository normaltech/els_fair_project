import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { GiProcessor } from "react-icons/gi";

export const SidebarData = [
    {
        title: 'Home',
        path: '/managerpage',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: '사용자 관리',
        path: '/managerpage2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'ESL 기기 관리',
        path: '/managerpage3',
        icon: <AiIcons.AiOutlineConsoleSql />,
        cName: 'nav-text'
    },
    {
        title: '부스 관리',
        path: '/',
        icon: <GiProcessor />,
        cName: 'nav-text'
    },
    {
        title: '공지 사항',
        path: '/',
        icon: <AiIcons.AiOutlineCarryOut />,
        cName: 'nav-text'
    },
]