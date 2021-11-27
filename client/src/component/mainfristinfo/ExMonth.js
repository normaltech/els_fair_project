import axios from 'axios';
import React, {useState, useEffect} from 'react';
import '../mainfirst/mainfirst.css';
import {ExInfo} from './ExInfo';

//month(월)별 정보를 받아오기 위한 data배열에 set해주는 메소드
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
/* 
받아온 날짜 정보가 2021-01-31T15:00:00.000Z 이런식으로 받아오기때문에
format을 바꿔주기 위한 메소드
*/
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

export const ExMonth = ({id, month}) => {
    const data = useFetch("/ExhibitionList/" + month);
    return (
        <div className="infoContainer">
            <div className="borderSection">
                <div className="notice">{month}월</div>
                <hr className="line"/>
            </div>
            {
                data.map((item) => {
                    return(
                    <ExInfo
                        key={item.id}
                        name={item.name}
                        place={item.place}
                        startDate={toStringByFormatting(new Date(item.startDate))}
                        endDate={toStringByFormatting(new Date(item.endDate))}
                        image={item.image}
                        />
                        )
                })
            }
        </div>
    )
};