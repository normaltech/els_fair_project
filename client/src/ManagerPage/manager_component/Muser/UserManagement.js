import React,  { useState, useEffect } from 'react'
import './userManagement.css';
import axios from 'axios';
import MuserPosts from './MuserPosts';
import { MuserNotice } from './MuserNotice';
import MuserPagenation from './MuserPagenation';

function UserManagement() {

    const onClickContent = () => {
        document.querySelector('.userManagement_black_bg').style.display = 'block';
        document.querySelector('.userManagement_userDetailModal_wrap').style.display = 'block';
    }

    const onClickDelete = () => {
        document.querySelector('.userManagement_black_bg').style.display = 'block';
        document.querySelector('.userManagement_deleteModal_wrap').style.display = 'block';
    }
    const onClickDelInDel = () => {
        document.querySelector('.userManagement_deleteModal_wrap').style.display = 'none';
        document.querySelector('.userManagement_deleteSuccess_wrap').style.display = 'block';
    }
    const onClickOk = () => {
        document.querySelector('.userManagement_black_bg').style.display = 'none';
        document.querySelector('.userManagement_deleteSuccess_wrap').style.display = 'none';
        document.querySelector('.userManagement_userDetailModal_wrap').style.display = 'none';
        document.querySelector('.userManagement_modifySuccess_wrap').style.display = 'none';
        document.querySelector('.userManagement_userRegisterSuccess_wrap').style.display = 'none';
    }
    const onClickCancel = () => {
        document.querySelector('.userManagement_black_bg').style.display = 'none';
        document.querySelector('.userManagement_deleteModal_wrap').style.display = 'none';
        document.querySelector('.userManagement_userModifyModal_wrap').style.display = 'none';
        document.querySelector('.userManagement_userRegister_wrap').style.display = 'none';
    }
    const onClickModify = () => {
        document.querySelector('.userManagement_userModifyModal_wrap').style.display = 'none';
        document.querySelector('.userManagement_modifySuccess_wrap').style.display = 'block';
    }
    const onClickDelBack = () => {
        document.querySelector('.userManagement_deleteFailModal_wrap').style.display = 'none';
        document.querySelector('.userManagement_deleteModal_wrap').style.display = 'block';
        document.querySelector('.userManagement_black_bg').style.display = 'block';
    }
    const onClickUserModify = () => {
        document.querySelector('.userManagement_black_bg').style.display = 'block';
        document.querySelector('.userManagement_userModifyModal_wrap').style.display = 'block';
    }
    
    const onClickModifyBack = () => {
        document.querySelector('.userManagement_modifyFailModal_wrap').style.display = 'none';
        document.querySelector('.userManagement_userModifyModal_wrap').style.display = 'block';
        document.querySelector('.userManagement_black_bg').style.display = 'block';
    }
    const onClickUserAdd = () => {
        document.querySelector('.userManagement_black_bg').style.display = 'block';
        document.querySelector('.userManagement_userRegister_wrap').style.display = 'block';
    }
    const onClickUserRegister = () => {
        document.querySelector('.userManagement_userRegister_wrap').style.display = 'none';
        document.querySelector('.userManagement_userRegisterSuccess_wrap').style.display = 'block';
    }
    const onClickUserRegisterBack = () => {
        document.querySelector('.userManagement_black_bg').style.display = 'block';
        document.querySelector('.userManagement_registerFailModal_wrap').style.display = 'none';
        document.querySelector('.userManagement_userRegister_wrap').style.display = 'block';
    }

    const NationCode = () => (
        <select name="countryCode" className="userManagement_userRegister_inputFront userManagement_userRegister_fontSize">
        <option data-countrycode="KR" value="82" className="userManagement_userRegister_fontSize" >Korea South (+82)</option>
          <option data-countrycode="DZ" value="213" className="userManagement_userRegister_fontSize">Algeria (+213)</option>
          <option data-countrycode="AD" value="376" className="userManagement_userRegister_fontSize">Andorra (+376)</option>
          <option data-countrycode="AO" value="244" className="userManagement_userRegister_fontSize">Angola (+244)</option>
          <option data-countrycode="AI" value="1264" className="userManagement_userRegister_fontSize">Anguilla (+1264)</option>
          <option data-countrycode="AG" value="1268" className="userManagement_userRegister_fontSize">Antigua &amp; Barbuda (+1268)</option>
          <option data-countrycode="AR" value="54" className="userManagement_userRegister_fontSize">Argentina (+54)</option>
          <option data-countrycode="AM" value="374" className="userManagement_userRegister_fontSize">Armenia (+374)</option>
          <option data-countrycode="AW" value="297" className="userManagement_userRegister_fontSize">Aruba (+297)</option>
          <option data-countrycode="AU" value="61" className="userManagement_userRegister_fontSize">Australia (+61)</option>
          <option data-countrycode="AT" value="43" className="userManagement_userRegister_fontSize">Austria (+43)</option>
          <option data-countrycode="AZ" value="994" className="userManagement_userRegister_fontSize">Azerbaijan (+994)</option>
          <option data-countrycode="BS" value="1242" className="userManagement_userRegister_fontSize">Bahamas (+1242)</option>
          <option data-countrycode="BH" value="973" className="userManagement_userRegister_fontSize">Bahrain (+973)</option>
          <option data-countrycode="BD" value="880" className="userManagement_userRegister_fontSize">Bangladesh (+880)</option>
          <option data-countrycode="BB" value="1246" className="userManagement_userRegister_fontSize">Barbados (+1246)</option>
          <option data-countrycode="BY" value="375" className="userManagement_userRegister_fontSize">Belarus (+375)</option>
          <option data-countrycode="BE" value="32" className="userManagement_userRegister_fontSize">Belgium (+32)</option>
          <option data-countrycode="BZ" value="501" className="userManagement_userRegister_fontSize">Belize (+501)</option>
          <option data-countrycode="BJ" value="229" className="userManagement_userRegister_fontSize">Benin (+229)</option>
          <option data-countrycode="BM" value="1441" className="userManagement_userRegister_fontSize">Bermuda (+1441)</option>
          <option data-countrycode="BT" value="975" className="userManagement_userRegister_fontSize">Bhutan (+975)</option>
          <option data-countrycode="BO" value="591" className="userManagement_userRegister_fontSize">Bolivia (+591)</option>
          <option data-countrycode="BA" value="387" className="userManagement_userRegister_fontSize">Bosnia Herzegovina (+387)</option>
          <option data-countrycode="BW" value="267" className="userManagement_userRegister_fontSize">Botswana (+267)</option>
          <option data-countrycode="BR" value="55" className="userManagement_userRegister_fontSize">Brazil (+55)</option>
          <option data-countrycode="BN" value="673" className="userManagement_userRegister_fontSize">Brunei (+673)</option>
          <option data-countrycode="BG" value="359" className="userManagement_userRegister_fontSize">Bulgaria (+359)</option>
          <option data-countrycode="BF" value="226" className="userManagement_userRegister_fontSize">Burkina Faso (+226)</option>
          <option data-countrycode="BI" value="257" className="userManagement_userRegister_fontSize">Burundi (+257)</option>
          <option data-countrycode="KH" value="855" className="userManagement_userRegister_fontSize">Cambodia (+855)</option>
          <option data-countrycode="CM" value="237" className="userManagement_userRegister_fontSize">Cameroon (+237)</option>
          <option data-countrycode="CA" value="1" className="userManagement_userRegister_fontSize">Canada (+1)</option>
          <option data-countrycode="CV" value="238" className="userManagement_userRegister_fontSize">Cape Verde Islands (+238)</option>
          <option data-countrycode="KY" value="1345" className="userManagement_userRegister_fontSize">Cayman Islands (+1345)</option>
          <option data-countrycode="CF" value="236" className="userManagement_userRegister_fontSize">Central African Republic (+236)</option>
          <option data-countrycode="CL" value="56" className="userManagement_userRegister_fontSize">Chile (+56)</option>
          <option data-countrycode="CN" value="86" className="userManagement_userRegister_fontSize">China (+86)</option>
          <option data-countrycode="CO" value="57" className="userManagement_userRegister_fontSize">Colombia (+57)</option>
          <option data-countrycode="KM" value="269" className="userManagement_userRegister_fontSize">Comoros (+269)</option>
          <option data-countrycode="CG" value="242" className="userManagement_userRegister_fontSize">Congo (+242)</option>
          <option data-countrycode="CK" value="682" className="userManagement_userRegister_fontSize">Cook Islands (+682)</option>
          <option data-countrycode="CR" value="506" className="userManagement_userRegister_fontSize">Costa Rica (+506)</option>
          <option data-countrycode="HR" value="385" className="userManagement_userRegister_fontSize">Croatia (+385)</option>
          <option data-countrycode="CU" value="53" className="userManagement_userRegister_fontSize">Cuba (+53)</option>
          <option data-countrycode="CY" value="90392" className="userManagement_userRegister_fontSize">Cyprus North (+90392)</option>
          <option data-countrycode="CY" value="357" className="userManagement_userRegister_fontSize">Cyprus South (+357)</option>
          <option data-countrycode="CZ" value="42" className="userManagement_userRegister_fontSize">Czech Republic (+42)</option>
          <option data-countrycode="DK" value="45" className="userManagement_userRegister_fontSize">Denmark (+45)</option>
          <option data-countrycode="DJ" value="253" className="userManagement_userRegister_fontSize">Djibouti (+253)</option>
          <option data-countrycode="DM" value="1809" className="userManagement_userRegister_fontSize">Dominica (+1809)</option>
          <option data-countrycode="DO" value="1809" className="userManagement_userRegister_fontSize">Dominican Republic (+1809)</option>
          <option data-countrycode="EC" value="593" className="userManagement_userRegister_fontSize">Ecuador (+593)</option>
          <option data-countrycode="EG" value="20" className="userManagement_userRegister_fontSize">Egypt (+20)</option>
          <option data-countrycode="SV" value="503" className="userManagement_userRegister_fontSize">El Salvador (+503)</option>
          <option data-countrycode="GQ" value="240" className="userManagement_userRegister_fontSize">Equatorial Guinea (+240)</option>
          <option data-countrycode="ER" value="291" className="userManagement_userRegister_fontSize">Eritrea (+291)</option>
          <option data-countrycode="EE" value="372" className="userManagement_userRegister_fontSize">Estonia (+372)</option>
          <option data-countrycode="ET" value="251" className="userManagement_userRegister_fontSize">Ethiopia (+251)</option>
          <option data-countrycode="FK" value="500" className="userManagement_userRegister_fontSize">Falkland Islands (+500)</option>
          <option data-countrycode="FO" value="298" className="userManagement_userRegister_fontSize">Faroe Islands (+298)</option>
          <option data-countrycode="FJ" value="679" className="userManagement_userRegister_fontSize">Fiji (+679)</option>
          <option data-countrycode="FI" value="358" className="userManagement_userRegister_fontSize">Finland (+358)</option>
          <option data-countrycode="FR" value="33" className="userManagement_userRegister_fontSize">France (+33)</option>
          <option data-countrycode="GF" value="594" className="userManagement_userRegister_fontSize">French Guiana (+594)</option>
          <option data-countrycode="PF" value="689" className="userManagement_userRegister_fontSize">French Polynesia (+689)</option>
          <option data-countrycode="GA" value="241" className="userManagement_userRegister_fontSize">Gabon (+241)</option>
          <option data-countrycode="GM" value="220" className="userManagement_userRegister_fontSize">Gambia (+220)</option>
          <option data-countrycode="GE" value="7880" className="userManagement_userRegister_fontSize">Georgia (+7880)</option>
          <option data-countrycode="DE" value="49" className="userManagement_userRegister_fontSize">Germany (+49)</option>
          <option data-countrycode="GH" value="233" className="userManagement_userRegister_fontSize">Ghana (+233)</option>
          <option data-countrycode="GI" value="350" className="userManagement_userRegister_fontSize">Gibraltar (+350)</option>
          <option data-countrycode="GR" value="30" className="userManagement_userRegister_fontSize">Greece (+30)</option>
          <option data-countrycode="GL" value="299" className="userManagement_userRegister_fontSize">Greenland (+299)</option>
          <option data-countrycode="GD" value="1473" className="userManagement_userRegister_fontSize">Grenada (+1473)</option>
          <option data-countrycode="GP" value="590" className="userManagement_userRegister_fontSize">Guadeloupe (+590)</option>
          <option data-countrycode="GU" value="671" className="userManagement_userRegister_fontSize">Guam (+671)</option>
          <option data-countrycode="GT" value="502" className="userManagement_userRegister_fontSize">Guatemala (+502)</option>
          <option data-countrycode="GN" value="224" className="userManagement_userRegister_fontSize">Guinea (+224)</option>
          <option data-countrycode="GW" value="245" className="userManagement_userRegister_fontSize">Guinea - Bissau (+245)</option>
          <option data-countrycode="GY" value="592" className="userManagement_userRegister_fontSize">Guyana (+592)</option>
          <option data-countrycode="HT" value="509" className="userManagement_userRegister_fontSize">Haiti (+509)</option>
          <option data-countrycode="HN" value="504" className="userManagement_userRegister_fontSize">Honduras (+504)</option>
          <option data-countrycode="HK" value="852" className="userManagement_userRegister_fontSize">Hong Kong (+852)</option>
          <option data-countrycode="HU" value="36" className="userManagement_userRegister_fontSize">Hungary (+36)</option>
          <option data-countrycode="IS" value="354" className="userManagement_userRegister_fontSize">Iceland (+354)</option>
          <option data-countrycode="IN" value="91" className="userManagement_userRegister_fontSize">India (+91)</option>
          <option data-countrycode="ID" value="62" className="userManagement_userRegister_fontSize">Indonesia (+62)</option>
          <option data-countrycode="IR" value="98" className="userManagement_userRegister_fontSize">Iran (+98)</option>
          <option data-countrycode="IQ" value="964" className="userManagement_userRegister_fontSize">Iraq (+964)</option>
          <option data-countrycode="IE" value="353" className="userManagement_userRegister_fontSize">Ireland (+353)</option>
          <option data-countrycode="IL" value="972" className="userManagement_userRegister_fontSize">Israel (+972)</option>
          <option data-countrycode="IT" value="39" className="userManagement_userRegister_fontSize">Italy (+39)</option>
          <option data-countrycode="JM" value="1876" className="userManagement_userRegister_fontSize">Jamaica (+1876)</option>
          <option data-countrycode="JP" value="81" className="userManagement_userRegister_fontSize">Japan (+81)</option>
          <option data-countrycode="JO" value="962" className="userManagement_userRegister_fontSize">Jordan (+962)</option>
          <option data-countrycode="KZ" value="7" className="userManagement_userRegister_fontSize">Kazakhstan (+7)</option>
          <option data-countrycode="KE" value="254" className="userManagement_userRegister_fontSize">Kenya (+254)</option>
          <option data-countrycode="KI" value="686" className="userManagement_userRegister_fontSize">Kiribati (+686)</option>
          <option data-countrycode="KP" value="850" className="userManagement_userRegister_fontSize">Korea North (+850)</option>
          <option data-countrycode="KW" value="965" className="userManagement_userRegister_fontSize">Kuwait (+965)</option>
          <option data-countrycode="KG" value="996" className="userManagement_userRegister_fontSize">Kyrgyzstan (+996)</option>
          <option data-countrycode="LA" value="856" className="userManagement_userRegister_fontSize">Laos (+856)</option>
          <option data-countrycode="LV" value="371" className="userManagement_userRegister_fontSize">Latvia (+371)</option>
          <option data-countrycode="LB" value="961" className="userManagement_userRegister_fontSize">Lebanon (+961)</option>
          <option data-countrycode="LS" value="266" className="userManagement_userRegister_fontSize">Lesotho (+266)</option>
          <option data-countrycode="LR" value="231" className="userManagement_userRegister_fontSize">Liberia (+231)</option>
          <option data-countrycode="LY" value="218" className="userManagement_userRegister_fontSize">Libya (+218)</option>
          <option data-countrycode="LI" value="417" className="userManagement_userRegister_fontSize">Liechtenstein (+417)</option>
          <option data-countrycode="LT" value="370" className="userManagement_userRegister_fontSize">Lithuania (+370)</option>
          <option data-countrycode="LU" value="352" className="userManagement_userRegister_fontSize">Luxembourg (+352)</option>
          <option data-countrycode="MO" value="853" className="userManagement_userRegister_fontSize">Macao (+853)</option>
          <option data-countrycode="MK" value="389" className="userManagement_userRegister_fontSize">Macedonia (+389)</option>
          <option data-countrycode="MG" value="261" className="userManagement_userRegister_fontSize">Madagascar (+261)</option>
          <option data-countrycode="MW" value="265" className="userManagement_userRegister_fontSize">Malawi (+265)</option>
          <option data-countrycode="MY" value="60" className="userManagement_userRegister_fontSize">Malaysia (+60)</option>
          <option data-countrycode="MV" value="960" className="userManagement_userRegister_fontSize">Maldives (+960)</option>
          <option data-countrycode="ML" value="223" className="userManagement_userRegister_fontSize">Mali (+223)</option>
          <option data-countrycode="MT" value="356" className="userManagement_userRegister_fontSize">Malta (+356)</option>
          <option data-countrycode="MH" value="692" className="userManagement_userRegister_fontSize">Marshall Islands (+692)</option>
          <option data-countrycode="MQ" value="596" className="userManagement_userRegister_fontSize">Martinique (+596)</option>
          <option data-countrycode="MR" value="222" className="userManagement_userRegister_fontSize">Mauritania (+222)</option>
          <option data-countrycode="YT" value="269" className="userManagement_userRegister_fontSize">Mayotte (+269)</option>
          <option data-countrycode="MX" value="52" className="userManagement_userRegister_fontSize">Mexico (+52)</option>
          <option data-countrycode="FM" value="691" className="userManagement_userRegister_fontSize">Micronesia (+691)</option>
          <option data-countrycode="MD" value="373" className="userManagement_userRegister_fontSize">Moldova (+373)</option>
          <option data-countrycode="MC" value="377" className="userManagement_userRegister_fontSize">Monaco (+377)</option>
          <option data-countrycode="MN" value="976" className="userManagement_userRegister_fontSize">Mongolia (+976)</option>
          <option data-countrycode="MS" value="1664" className="userManagement_userRegister_fontSize">Montserrat (+1664)</option>
          <option data-countrycode="MA" value="212" className="userManagement_userRegister_fontSize">Morocco (+212)</option>
          <option data-countrycode="MZ" value="258" className="userManagement_userRegister_fontSize">Mozambique (+258)</option>
          <option data-countrycode="MN" value="95" className="userManagement_userRegister_fontSize">Myanmar (+95)</option>
          <option data-countrycode="NA" value="264" className="userManagement_userRegister_fontSize">Namibia (+264)</option>
          <option data-countrycode="NR" value="674" className="userManagement_userRegister_fontSize">Nauru (+674)</option>
          <option data-countrycode="NP" value="977" className="userManagement_userRegister_fontSize">Nepal (+977)</option>
          <option data-countrycode="NL" value="31" className="userManagement_userRegister_fontSize">Netherlands (+31)</option>
          <option data-countrycode="NC" value="687" className="userManagement_userRegister_fontSize">New Caledonia (+687)</option>
          <option data-countrycode="NZ" value="64" className="userManagement_userRegister_fontSize">New Zealand (+64)</option>
          <option data-countrycode="NI" value="505" className="userManagement_userRegister_fontSize">Nicaragua (+505)</option>
          <option data-countrycode="NE" value="227" className="userManagement_userRegister_fontSize">Niger (+227)</option>
          <option data-countrycode="NG" value="234" className="userManagement_userRegister_fontSize">Nigeria (+234)</option>
          <option data-countrycode="NU" value="683" className="userManagement_userRegister_fontSize">Niue (+683)</option>
          <option data-countrycode="NF" value="672" className="userManagement_userRegister_fontSize">Norfolk Islands (+672)</option>
          <option data-countrycode="NP" value="670" className="userManagement_userRegister_fontSize">Northern Marianas (+670)</option>
          <option data-countrycode="NO" value="47" className="userManagement_userRegister_fontSize">Norway (+47)</option>
          <option data-countrycode="OM" value="968" className="userManagement_userRegister_fontSize">Oman (+968)</option>
          <option data-countrycode="PW" value="680" className="userManagement_userRegister_fontSize">Palau (+680)</option>
          <option data-countrycode="PA" value="507" className="userManagement_userRegister_fontSize">Panama (+507)</option>
          <option data-countrycode="PG" value="675" className="userManagement_userRegister_fontSize">Papua New Guinea (+675)</option>
          <option data-countrycode="PY" value="595" className="userManagement_userRegister_fontSize">Paraguay (+595)</option>
          <option data-countrycode="PE" value="51" className="userManagement_userRegister_fontSize">Peru (+51)</option>
          <option data-countrycode="PH" value="63" className="userManagement_userRegister_fontSize">Philippines (+63)</option>
          <option data-countrycode="PL" value="48" className="userManagement_userRegister_fontSize">Poland (+48)</option>
          <option data-countrycode="PT" value="351" className="userManagement_userRegister_fontSize">Portugal (+351)</option>
          <option data-countrycode="PR" value="1787" className="userManagement_userRegister_fontSize">Puerto Rico (+1787)</option>
          <option data-countrycode="QA" value="974" className="userManagement_userRegister_fontSize">Qatar (+974)</option>
          <option data-countrycode="RE" value="262" className="userManagement_userRegister_fontSize">Reunion (+262)</option>
          <option data-countrycode="RO" value="40" className="userManagement_userRegister_fontSize">Romania (+40)</option>
          <option data-countrycode="RU" value="7" className="userManagement_userRegister_fontSize">Russia (+7)</option>
          <option data-countrycode="RW" value="250" className="userManagement_userRegister_fontSize">Rwanda (+250)</option>
          <option data-countrycode="SM" value="378" className="userManagement_userRegister_fontSize">San Marino (+378)</option>
          <option data-countrycode="ST" value="239" className="userManagement_userRegister_fontSize">Sao Tome &amp; Principe (+239)</option>
          <option data-countrycode="SA" value="966" className="userManagement_userRegister_fontSize">Saudi Arabia (+966)</option>
          <option data-countrycode="SN" value="221" className="userManagement_userRegister_fontSize">Senegal (+221)</option>
          <option data-countrycode="CS" value="381" className="userManagement_userRegister_fontSize">Serbia (+381)</option>
          <option data-countrycode="SC" value="248" className="userManagement_userRegister_fontSize">Seychelles (+248)</option>
          <option data-countrycode="SL" value="232" className="userManagement_userRegister_fontSize">Sierra Leone (+232)</option>
          <option data-countrycode="SG" value="65" className="userManagement_userRegister_fontSize">Singapore (+65)</option>
          <option data-countrycode="SK" value="421" className="userManagement_userRegister_fontSize">Slovak Republic (+421)</option>
          <option data-countrycode="SI" value="386" className="userManagement_userRegister_fontSize">Slovenia (+386)</option>
          <option data-countrycode="SB" value="677" className="userManagement_userRegister_fontSize">Solomon Islands (+677)</option>
          <option data-countrycode="SO" value="252" className="userManagement_userRegister_fontSize">Somalia (+252)</option>
          <option data-countrycode="ZA" value="27" className="userManagement_userRegister_fontSize">South Africa (+27)</option>
          <option data-countrycode="ES" value="34" className="userManagement_userRegister_fontSize">Spain (+34)</option>
          <option data-countrycode="LK" value="94" className="userManagement_userRegister_fontSize">Sri Lanka (+94)</option>
          <option data-countrycode="SH" value="290" className="userManagement_userRegister_fontSize">St. Helena (+290)</option>
          <option data-countrycode="KN" value="1869" className="userManagement_userRegister_fontSize">St. Kitts (+1869)</option>
          <option data-countrycode="SC" value="1758" className="userManagement_userRegister_fontSize">St. Lucia (+1758)</option>
          <option data-countrycode="SD" value="249" className="userManagement_userRegister_fontSize">Sudan (+249)</option>
          <option data-countrycode="SR" value="597" className="userManagement_userRegister_fontSize">Suriname (+597)</option>
          <option data-countrycode="SZ" value="268" className="userManagement_userRegister_fontSize">Swaziland (+268)</option>
          <option data-countrycode="SE" value="46" className="userManagement_userRegister_fontSize">Sweden (+46)</option>
          <option data-countrycode="CH" value="41" className="userManagement_userRegister_fontSize">Switzerland (+41)</option>
          <option data-countrycode="SI" value="963" className="userManagement_userRegister_fontSize">Syria (+963)</option>
          <option data-countrycode="TW" value="886" className="userManagement_userRegister_fontSize">Taiwan (+886)</option>
          <option data-countrycode="TJ" value="7" className="userManagement_userRegister_fontSize">Tajikstan (+7)</option>
          <option data-countrycode="TH" value="66" className="userManagement_userRegister_fontSize">Thailand (+66)</option>
          <option data-countrycode="TG" value="228" className="userManagement_userRegister_fontSize">Togo (+228)</option>
          <option data-countrycode="TO" value="676" className="userManagement_userRegister_fontSize">Tonga (+676)</option>
          <option data-countrycode="TT" value="1868" className="userManagement_userRegister_fontSize">Trinidad &amp; Tobago (+1868)</option>
          <option data-countrycode="TN" value="216" className="userManagement_userRegister_fontSize">Tunisia (+216)</option>
          <option data-countrycode="TR" value="90" className="userManagement_userRegister_fontSize">Turkey (+90)</option>
          <option data-countrycode="TM" value="7" className="userManagement_userRegister_fontSize">Turkmenistan (+7)</option>
          <option data-countrycode="TM" value="993" className="userManagement_userRegister_fontSize">Turkmenistan (+993)</option>
          <option data-countrycode="TC" value="1649" className="userManagement_userRegister_fontSize">Turks &amp; Caicos Islands (+1649)</option>
          <option data-countrycode="TV" value="688" className="userManagement_userRegister_fontSize">Tuvalu (+688)</option>
          <option data-countrycode="UG" value="256" className="userManagement_userRegister_fontSize">Uganda (+256)</option>
          <option data-countrycode="GB" value="44" className="userManagement_userRegister_fontSize">UK (+44)</option>
          <option data-countrycode="UA" value="380" className="userManagement_userRegister_fontSize">Ukraine (+380)</option>
          <option data-countrycode="AE" value="971" className="userManagement_userRegister_fontSize">United Arab Emirates (+971)</option>
          <option data-countrycode="UY" value="598" className="userManagement_userRegister_fontSize">Uruguay (+598)</option>
          <option data-countrycode="US" value="1" className="userManagement_userRegister_fontSize">USA (+1)</option>
          <option data-countrycode="UZ" value="7" className="userManagement_userRegister_fontSize">Uzbekistan (+7)</option>
          <option data-countrycode="VU" value="678" className="userManagement_userRegister_fontSize">Vanuatu (+678)</option>
          <option data-countrycode="VA" value="379" className="userManagement_userRegister_fontSize">Vatican City (+379)</option>
          <option data-countrycode="VE" value="58" className="userManagement_userRegister_fontSize">Venezuela (+58)</option>
          <option data-countrycode="VN" value="84" className="userManagement_userRegister_fontSize">Vietnam (+84)</option>
          <option data-countrycode="VG" value="84" className="userManagement_userRegister_fontSize">Virgin Islands - British (+1284)</option>
          <option data-countrycode="VI" value="84" className="userManagement_userRegister_fontSize">Virgin Islands - US (+1340)</option>
          <option data-countrycode="WF" value="681" className="userManagement_userRegister_fontSize">Wallis &amp; Futuna (+681)</option>
          <option data-countrycode="YE" value="969" className="userManagement_userRegister_fontSize">Yemen (North)(+969)</option>
          <option data-countrycode="YE" value="967" className="userManagement_userRegister_fontSize">Yemen (South)(+967)</option>
          <option data-countrycode="ZM" value="260" className="userManagement_userRegister_fontSize">Zambia (+260)</option>
          <option data-countrycode="ZW" value="263" className="userManagement_userRegister_fontSize">Zimbabwe (+263)</option>
        </select>
    )

    // table 변수 (회사, 고유번호, 부스ID, 담당자, 담당자 전화번호, 이메일)
    // const [company, setCompany] = useState('캠피스트');
    // const [primaryNum, setPrimaryNum] = useState('A0102203');
    // const [userId, setuserId] = useState('A-a101');
    // const [manager, setManager] = useState('강낭콩');
    // const [phoneNum, setPhoneNum] = useState('010-****-****');
    // const [email, setEmail] = useState('***@gmail.com');

    useEffect(()=>{
        const fetchPosts = async () =>{
          setLoading(true);
          const res = await axios.get('/getAllUserData'); // 데이터베이스 가져오기
          setPosts(res.data);
          setLoading(false);
        }
    
        fetchPosts();
      }, [])

    // 페이지네이션 변수
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);
    //현재 파일 가져오기
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    // console.log(posts);
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    //페이지 바꾸기
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    console.log(currentPosts)
   

    return (
        <>
            <div className='userManagement_wrap'>
                {/* 상단 검색바 */}
                <div className="userManagement_search">
                    <input type="text" className="userManagement_input" placeholder="검색어를 입력하세요." />
                    <img src="/assets/icons/iconAwesomeSearch.png" alt="검색이미지" className="userManagement_img" />
                </div>
                {/* 공지사항 content */}
                <div className="userManagement_table_wrap">
                    <table className="userManagement_table">
                        <tr className="userManagement_table_tr">
                            <th className="userManagement_table_padding">회사</th>
                            <th className="userManagement_table_padding">고유번호</th>
                            <th className="userManagement_table_padding">부스ID</th>
                            <th className="userManagement_table_padding">담당자</th>
                            <th className="userManagement_table_padding">담당자 전화번호</th>
                            <th className="userManagement_table_padding">이메일</th>
                            <th className="userManagement_table_padding">권한</th>
                            <th className="userManagement_table_padding">Action</th>
                        </tr>
                        {/* <tr> 
                            <td className="userManagement_table_padding" onClick={onClickContent}>{company}</td>
                            <td className="userManagement_table_padding" onClick={onClickContent}>{primaryNum}</td>
                            <td className="userManagement_table_padding" onClick={onClickContent}>{userId}</td>
                            <td className="userManagement_table_padding" onClick={onClickContent}>{manager}</td>
                            <td className="userManagement_table_padding" onClick={onClickContent}>{phoneNum}</td>
                            <td className="userManagement_table_padding" onClick={onClickContent}>{email}</td>
                            <td className="userManagement_table_padding">
                                <select name="" id="">
                                    <option value="">활성화</option>
                                    <option value="">비활성화</option>
                                </select>
                            </td>
                            <td className="userManagement_table_padding">
                                <button className="userManagement_table_btn"><img src="/assets/user_modify.png" alt="수정"  onClick={onClickUserModify}/></button>
                                <button className="userManagement_table_btn"><img className="userManagement_table_deleteImg" src="/assets/user_delete.png" alt="삭제" onClick={onClickDelete} /></button>
                            </td>
                        </tr> */}
                        <MuserPosts posts={currentPosts} loading={loading}/>
                    </table>
                </div>
                <div className="userManagement_bottom_content_wrap">
                    <div className="userManagement_pagination">
                        {/* 여기에 페이지네이션 */}
                        <MuserPagenation postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
                        {/* <div><button>페이지네이션</button></div> */}
                    </div>
                    <div><button type="button" className="userManagement_btn_add" onClick={onClickUserAdd}>사용자 추가</button></div>              
                </div>
            </div>

            {/* 여기부터 display: none으로 처리된 모달창 */}
            {/* 배경흐림 모달창 */}
            <div className="userManagement_black_bg"></div>
            {/* 사용자 자세히 모달창 */}
            <div className="userManagement_userDetailModal_wrap">
                <div className="userManagement_userDetailModal_content_wrap">
                    <div className="userManagement_userDetailModal_leftContent_wrap">
                        <div className="userManagement_userDetailModal_leftContent_img_wrap userManagement_userDetailModal_leftContent_padding"><img src="" alt="" /></div>
                        <div className="userManagement_userDetailModal_leftContent_name userManagement_userDetailModal_leftContent_padding">강낭콩</div>
                        <div className="userManagement_userDetailModal_leftContent_phoneNum userManagement_userDetailModal_leftContent_padding">010-****-****</div>
                        <div className="userManagement_userDetailModal_leftContent_email userManagement_userDetailModal_leftContent_padding">***@gmail.com</div>
                    </div>
                    <div className="userManagement_userDetailModal_rightContent_wrap">
                        <div className="userManagement_userDetailModal_rightUpContent_wrap">
                            {/* 왼쪽 오른쪽으로 구역 나눔 */}
                            <div className="userManagement_userDetailModal_rightUpTitle_wrap">
                                <div className="userManagement_userDetailModal_rightUpTitle_style userManagement_userDetailModal_rightUpContent_padding">회사</div>
                                <div className="userManagement_userDetailModal_rightUpTitle_style userManagement_userDetailModal_rightUpContent_padding">회사번호</div>
                                <div className="userManagement_userDetailModal_rightUpTitle_style userManagement_userDetailModal_rightUpContent_padding">고유번호</div>
                            </div>
                            <div className="userManagement_userDetailModal_rightUpTitleInfo_wrap">
                                <div className="userManagement_userDetailModal_rightUpTitleInfo_style userManagement_userDetailModal_rightUpContent_padding">캠피스트</div>
                                <div className="userManagement_userDetailModal_rightUpTitleInfo_style userManagement_userDetailModal_rightUpContent_padding">02-***-****</div>
                                <div className="userManagement_userDetailModal_rightUpTitleInfo_style userManagement_userDetailModal_rightUpContent_padding">A0101121</div>
                            </div>
                        </div>
                        <div className="userManagement_userDetailModal_rightDownContent_wrap">
                            {/* 위 아래로 구역 나눔 */}
                            {/* 위 */}
                            <div className="userManagement_userDetailModal_rightDownUp_wrap">
                                <div className="userManagement_userDetailModal_rightDownUp_user_wrap">
                                    <div className="userManagement_userDetailModal_rightDownUp_user_title userManagement_userDetailModal_rightDownContent_padding">부스</div>
                                    <div className="userManagement_userDetailModal_rightDownUp_isUsing userManagement_userDetailModal_rightDownContent_padding">사용중</div>
                                    <div className="userManagement_userDetailModal_rightDownUp_userInfo">A-a101</div>
                                </div>
                                <div className="userManagement_userDetailModal_rightDownUp_numOfPeople_wrap">
                                    <div className="userManagement_userDetailModal_rightDownUp_numofPeople_title userManagement_userDetailModal_rightDownContent_padding">인원</div>
                                    <div className="userManagement_userDetailModal_rightDownUp_numofPeople userManagement_userDetailModal_rightDownContent_padding">5명</div>
                                </div>
                                <div className="userManagement_userDetailModal_rightDownUp_authority_wrap">
                                    <div className="userManagement_userDetailModal_rightDownUp_authority_title userManagement_userDetailModal_rightDownContent_padding">권한</div>
                                    <div className="userManagement_userDetailModal_rightDownUp_authority userManagement_userDetailModal_rightDownContent_padding">활성화</div>
                                </div>
                            </div>
                            {/* 중앙 */}
                            <div className="userManagement_userDetailModal_rightDownDown_wrap">
                                <div className="userManagement_userDetailModal_rightDownDown_esl_wrap">
                                    <div className="userManagement_userDetailModal_rightDownDown_esl_title userManagement_userDetailModal_rightDownContent_padding">ESL</div>
                                    <div className="userManagement_userDetailModal_rightDownDown_isLending userManagement_userDetailModal_rightDownContent_padding">대여중</div>
                                </div>
                                <div className="userManagement_userDetailModal_rightDownDown_created_wrap">
                                    <div className="userManagement_userDetailModal_rightDownDown_created_title userManagement_userDetailModal_rightDownContent_padding">Created</div>
                                    <div className="userManagement_userDetailModal_rightDownDown_created userManagement_userDetailModal_rightDownContent_padding">2021/10/01 08:30 PM</div>
                                </div>
                                <div className="userManagement_userDetailModal_rightDownDown_lastLogin_wrap">
                                    <div className="userManagement_userDetailModal_rightDownDown_lastLogin_title userManagement_userDetailModal_rightDownContent_padding">Last login</div>
                                    <div className="userManagement_userDetailModal_rightDownDown_lastLogin userManagement_userDetailModal_rightDownContent_padding">2021/10/04 11:30 PM</div>
                                </div>
                            </div>
                            {/* 아래 */}
                            <div className="userManagement_userDetailModal_rightDownDown_btn_wrap"><button className="userManagement_userDetailModal_rightDownDown_btn" onClick={onClickOk}>확인</button></div>
                        </div>
                    </div>
                </div>
            </div>
        
            {/* 공지사항 삭제완료 모달창 */}
            <div className="userManagement_deleteSuccess_wrap">
                <div className="userManagement_deleteSuccess_content_wrap">
                    <div className="userManagement_deleteSuccess_title">삭제 완료</div>
                    <div><button type="button" className="userManagement_deleteSuccess_btn" onClick={onClickOk}>확인</button></div>
                </div>
            </div>
            {/* 수정실패 모달창 */}
            <div className="userManagement_modifyFailModal_wrap">
                <div className="userManagement_modifyFailModal_content_wrap">
                    <div className="userManagement_modifyFailModal_img_wrap"><img className="userManagement_modifyFailModal_img" src="/assets/delete_warning.png" alt="느낌표이미지" /></div>
                    <div className="userManagement_modifyFailModal_right_content">
                        <div className="userManagement_modifyFailModal_title">수정 실패</div>
                        <div className="userManagement_modifyFailModal_question">수정 실패 이유 메세지</div>
                        <div><button className="userManagement_modifyFailModal_btn_back" onClick={onClickModifyBack}>돌아가기</button></div>         
                    </div>
                </div>
            </div>
            {/* 삭제실패 모달창 */}
            <div className="userManagement_deleteFailModal_wrap">
                <div className="userManagement_deleteFailModal_content_wrap">
                    <div className="userManagement_deleteFailModal_img_wrap"><img className="userManagement_deleteFailModal_img" src="/assets/delete_warning.png" alt="느낌표이미지" /></div>
                    <div className="userManagement_deleteFailModal_right_content">
                        <div className="userManagement_deleteFailModal_title">삭제 실패</div>
                        <div className="userManagement_deleteFailModal_question">삭제 실패 이유 메세지</div>
                        <div><button className="userManagement_deleteFailModal_btn_back" onClick={onClickDelBack}>돌아가기</button></div>        
                    </div>
                </div>
            </div>
            {/* 등록실패 모달창 */}
            <div className="userManagement_registerFailModal_wrap">
                <div className="userManagement_registerFailModal_content_wrap">
                    <div className="userManagement_registerFailModal_img_wrap"><img className="userManagement_registerFailModal_img" src="/assets/delete_warning.png" alt="느낌표이미지" /></div>
                    <div className="userManagement_registerFailModal_right_content">
                        <div className="userManagement_registerFailModal_title">등록 실패</div>
                        <div className="userManagement_registerFailModal_question">등록 실패 이유 메세지</div>
                        <div><button className="userManagement_registerFailModal_btn_back" onClick={onClickUserRegisterBack}>돌아가기</button></div>           
                    </div>
                </div>
            </div>
            
            {/* 사용자 수정완료 모달창 */}
            <div className="userManagement_modifySuccess_wrap">
                <div className="userManagement_modifySuccess_content_wrap">
                    <div className="userManagement_modifySuccess_title">수정 완료</div>
                    <div><button type="button" className="userManagement_modifySuccess_btn" onClick={onClickOk}>확인</button></div>
                </div>
            </div>
            {/* 사용자등록 모달창 */}
            <div className="userManagement_userRegister_wrap">
                <div className="userManagement_userRegister_top_wrap">
                    <div className="userManagement_userRegister_topTitle">사용자 등록</div>
                    <div className="userManagement_userRegister_imgWrap"><button className="userManagement_userRegister_outBtn" onClick={onClickCancel}><img src="/assets/userRegister_out.png" alt="닫기버튼" className="userManagement_userRegister_img" /></button></div>
                </div>
                <div className="userManagement_userRegister_content_wrap">
                    <div className="userManagement_userRegister_title">사용자 이메일</div>
                    <div><input className="userManagement_userRegister_input" type="email" /></div>
                    <div className="userManagement_userRegister_red">필수 정보입니다.</div>
                    <div className="userManagement_userRegister_title">임시 비밀번호</div>
                    <div><input className="userManagement_userRegister_input" type="password" /></div>
                    <div className="userManagement_userRegister_red">8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</div>
                    <div className="userManagement_userRegister_title">비밀번호 재확인</div>
                    <div><input className="userManagement_userRegister_input" type="password" /></div>
                    <div className="userManagement_userRegister_red">비밀번호가 일치하지 않습니다.</div>
                    <div className="userManagement_userRegister_title">담당자 이름</div>
                    <div><input className="userManagement_userRegister_input" type="text" /></div>
                    <div className="userManagement_userRegister_title">담당자 전화번호</div>
                    <div>
                        <NationCode />
                        {/* <input className="userManagement_userRegister_inputFront" type="text" /> */}
                        <input className="userManagement_userRegister_inputBehind" type="text" />
                    </div>
                    <div className="userManagement_userRegister_red">필수 정보입니다.</div>
                    <div className="userManagement_userRegister_title">회사명</div>
                    <div><input className="userManagement_userRegister_input" type="text" /></div>
                    <div className="userManagement_userRegister_red">필수 정보입니다.</div>
                    <div className="userManagement_userRegister_title">사업자 번호</div>
                    <div><input className="userManagement_userRegister_input" type="text" /></div>
                    <div className="userManagement_userRegister_red">필수 정보입니다.</div>
                    <div className="userManagement_userRegister_title">회사 전화번호</div>
                    <div>
                        <NationCode />
                        {/* <input className="userManagement_userRegister_inputFront" type="text" /> */}
                        <input className="userManagement_userRegister_inputBehind" type="text" />
                    </div>
                    <div className="userManagement_userRegister_red">필수 정보입니다.</div>
                    <div><button className="userManagement_userRegister_btn" onClick={onClickUserRegister}>사용자 임시 등록</button></div>
                    {/* onClick 추가하기 */}
                </div>
            </div>
            {/* 사용자등록완료 모달창 */}
            <div className="userManagement_userRegisterSuccess_wrap">
                <div className="userManagement_userRegisterSuccess_content_wrap">
                    <div className="userManagement_userRegisterSuccess_title">등록 완료</div>
                    <div><button type="button" className="userManagement_userRegisterSuccess_btn" onClick={onClickOk}>확인</button></div>
                </div>
            </div>
        </>
    )
}

export default UserManagement