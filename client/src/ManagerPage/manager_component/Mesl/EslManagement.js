import React, {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch(url) {
    // console.log(month);
    const [data, setData] = useState([])
    async function fetchUrl() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
    }

    useEffect(() => {
        fetchUrl();
    }, []);

    return data;
}

function EslManagement() {

    // const data = useFetch("/eslinfo");

    const btn = () => {
        // try{
        //     axios.get("/getesl", {data});
        // }catch(error){
        //     console.log(error);
        // }
        axios.get("/eslinfo");
        // console.log(data);
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