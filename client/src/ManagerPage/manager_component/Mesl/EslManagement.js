import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EslManagement() {

    const btn = () => {
        try {
            axios.get("/eslinfo");
        } catch (error) {
            console.log(error);
        }
        console.log("하이");
    }

    return (
        <>
            <div className='eslManagement'>
                <h1>ESL관리</h1>
                <button onClick={btn}>버튼</button>
            </div>
        </>
    )
}

export default EslManagement