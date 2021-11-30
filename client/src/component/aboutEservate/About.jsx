import React, { useState, useEffect } from 'react';
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './about.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function About() {

  const [company_id, setcompany_id] = useState('');
  const [manager, setmanager] = useState('');
  const [manager_phone_num, setmanager_phone_num] = useState('');
  const [email, setemail] = useState('');


  useEffect(() => { //session에서 받아온 유저정보
    try {
      axios.get("/getuserinfo")
        .then((response) => {
          setcompany_id(response.data.company_id);
          setmanager(response.data.manager);
          setmanager_phone_num(response.data.manager_phone_num);
          setemail(response.data.email);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);


  return (
    <div className="aboutPage">
      <Header />
      <div className="aboutPageWrapper">
        <img className="sloganImg" src="/assets/icons/658.png" alt="eservate slogan" />
      </div>
      <Footer />
    </div>
  )
}