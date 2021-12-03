import React, {  useEffect } from 'react';


function EslManagement() {

    const btn = () => {
        // window.open('https://192.168.0.11:8443/main.jsp', '_blank');
        window.open('https://www.naver.com', '_blank');
        window.location.replace("/managerpage");
    }

    useEffect(() => {
        btn();
    }, [])

    return (
        <></>
    )
}

export default EslManagement