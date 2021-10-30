import React from 'react';
import '../mainfirst/mainfirst.css';
import { ExInfo } from './ExInfo';

export const ExMonth = ({month, exhibitionName, place, period}) => (
            <div className="infoContainer">
                <div className="borderSection">
                    <div className="notice">{month}</div>
                    <hr className="line" />
                </div>
                <ExInfo month={month} exhibitionName={exhibitionName} place={place} period={period} />
            </div> 
);