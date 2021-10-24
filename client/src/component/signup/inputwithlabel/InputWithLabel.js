import React from 'react';
import './inputWithLabel.css'

const NationCode = () => (
  <select name="countryCode" id="telNumContainerSelect">
    <option data-countrycode="DZ" value="213">Algeria (+213)</option>
    <option data-countrycode="AD" value="376">Andorra (+376)</option>
    <option data-countrycode="AO" value="244">Angola (+244)</option>
    <option data-countrycode="AI" value="1264">Anguilla (+1264)</option>
    <option data-countrycode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
    <option data-countrycode="AR" value="54">Argentina (+54)</option>
    <option data-countrycode="AM" value="374">Armenia (+374)</option>
    <option data-countrycode="AW" value="297">Aruba (+297)</option>
    <option data-countrycode="AU" value="61">Australia (+61)</option>
    <option data-countrycode="AT" value="43">Austria (+43)</option>
    <option data-countrycode="AZ" value="994">Azerbaijan (+994)</option>
    <option data-countrycode="BS" value="1242">Bahamas (+1242)</option>
    <option data-countrycode="BH" value="973">Bahrain (+973)</option>
    <option data-countrycode="BD" value="880">Bangladesh (+880)</option>
    <option data-countrycode="BB" value="1246">Barbados (+1246)</option>
    <option data-countrycode="BY" value="375">Belarus (+375)</option>
    <option data-countrycode="BE" value="32">Belgium (+32)</option>
    <option data-countrycode="BZ" value="501">Belize (+501)</option>
    <option data-countrycode="BJ" value="229">Benin (+229)</option>
    <option data-countrycode="BM" value="1441">Bermuda (+1441)</option>
    <option data-countrycode="BT" value="975">Bhutan (+975)</option>
    <option data-countrycode="BO" value="591">Bolivia (+591)</option>
    <option data-countrycode="BA" value="387">Bosnia Herzegovina (+387)</option>
    <option data-countrycode="BW" value="267">Botswana (+267)</option>
    <option data-countrycode="BR" value="55">Brazil (+55)</option>
    <option data-countrycode="BN" value="673">Brunei (+673)</option>
    <option data-countrycode="BG" value="359">Bulgaria (+359)</option>
    <option data-countrycode="BF" value="226">Burkina Faso (+226)</option>
    <option data-countrycode="BI" value="257">Burundi (+257)</option>
    <option data-countrycode="KH" value="855">Cambodia (+855)</option>
    <option data-countrycode="CM" value="237">Cameroon (+237)</option>
    <option data-countrycode="CA" value="1">Canada (+1)</option>
    <option data-countrycode="CV" value="238">Cape Verde Islands (+238)</option>
    <option data-countrycode="KY" value="1345">Cayman Islands (+1345)</option>
    <option data-countrycode="CF" value="236">Central African Republic (+236)</option>
    <option data-countrycode="CL" value="56">Chile (+56)</option>
    <option data-countrycode="CN" value="86">China (+86)</option>
    <option data-countrycode="CO" value="57">Colombia (+57)</option>
    <option data-countrycode="KM" value="269">Comoros (+269)</option>
    <option data-countrycode="CG" value="242">Congo (+242)</option>
    <option data-countrycode="CK" value="682">Cook Islands (+682)</option>
    <option data-countrycode="CR" value="506">Costa Rica (+506)</option>
    <option data-countrycode="HR" value="385">Croatia (+385)</option>
    <option data-countrycode="CU" value="53">Cuba (+53)</option>
    <option data-countrycode="CY" value="90392">Cyprus North (+90392)</option>
    <option data-countrycode="CY" value="357">Cyprus South (+357)</option>
    <option data-countrycode="CZ" value="42">Czech Republic (+42)</option>
    <option data-countrycode="DK" value="45">Denmark (+45)</option>
    <option data-countrycode="DJ" value="253">Djibouti (+253)</option>
    <option data-countrycode="DM" value="1809">Dominica (+1809)</option>
    <option data-countrycode="DO" value="1809">Dominican Republic (+1809)</option>
    <option data-countrycode="EC" value="593">Ecuador (+593)</option>
    <option data-countrycode="EG" value="20">Egypt (+20)</option>
    <option data-countrycode="SV" value="503">El Salvador (+503)</option>
    <option data-countrycode="GQ" value="240">Equatorial Guinea (+240)</option>
    <option data-countrycode="ER" value="291">Eritrea (+291)</option>
    <option data-countrycode="EE" value="372">Estonia (+372)</option>
    <option data-countrycode="ET" value="251">Ethiopia (+251)</option>
    <option data-countrycode="FK" value="500">Falkland Islands (+500)</option>
    <option data-countrycode="FO" value="298">Faroe Islands (+298)</option>
    <option data-countrycode="FJ" value="679">Fiji (+679)</option>
    <option data-countrycode="FI" value="358">Finland (+358)</option>
    <option data-countrycode="FR" value="33">France (+33)</option>
    <option data-countrycode="GF" value="594">French Guiana (+594)</option>
    <option data-countrycode="PF" value="689">French Polynesia (+689)</option>
    <option data-countrycode="GA" value="241">Gabon (+241)</option>
    <option data-countrycode="GM" value="220">Gambia (+220)</option>
    <option data-countrycode="GE" value="7880">Georgia (+7880)</option>
    <option data-countrycode="DE" value="49">Germany (+49)</option>
    <option data-countrycode="GH" value="233">Ghana (+233)</option>
    <option data-countrycode="GI" value="350">Gibraltar (+350)</option>
    <option data-countrycode="GR" value="30">Greece (+30)</option>
    <option data-countrycode="GL" value="299">Greenland (+299)</option>
    <option data-countrycode="GD" value="1473">Grenada (+1473)</option>
    <option data-countrycode="GP" value="590">Guadeloupe (+590)</option>
    <option data-countrycode="GU" value="671">Guam (+671)</option>
    <option data-countrycode="GT" value="502">Guatemala (+502)</option>
    <option data-countrycode="GN" value="224">Guinea (+224)</option>
    <option data-countrycode="GW" value="245">Guinea - Bissau (+245)</option>
    <option data-countrycode="GY" value="592">Guyana (+592)</option>
    <option data-countrycode="HT" value="509">Haiti (+509)</option>
    <option data-countrycode="HN" value="504">Honduras (+504)</option>
    <option data-countrycode="HK" value="852">Hong Kong (+852)</option>
    <option data-countrycode="HU" value="36">Hungary (+36)</option>
    <option data-countrycode="IS" value="354">Iceland (+354)</option>
    <option data-countrycode="IN" value="91">India (+91)</option>
    <option data-countrycode="ID" value="62">Indonesia (+62)</option>
    <option data-countrycode="IR" value="98">Iran (+98)</option>
    <option data-countrycode="IQ" value="964">Iraq (+964)</option>
    <option data-countrycode="IE" value="353">Ireland (+353)</option>
    <option data-countrycode="IL" value="972">Israel (+972)</option>
    <option data-countrycode="IT" value="39">Italy (+39)</option>
    <option data-countrycode="JM" value="1876">Jamaica (+1876)</option>
    <option data-countrycode="JP" value="81">Japan (+81)</option>
    <option data-countrycode="JO" value="962">Jordan (+962)</option>
    <option data-countrycode="KZ" value="7">Kazakhstan (+7)</option>
    <option data-countrycode="KE" value="254">Kenya (+254)</option>
    <option data-countrycode="KI" value="686">Kiribati (+686)</option>
    <option data-countrycode="KP" value="850">Korea North (+850)</option>
    <option data-countrycode="KR" value="82" defaultValue >Korea South (+82)</option>
    <option data-countrycode="KW" value="965">Kuwait (+965)</option>
    <option data-countrycode="KG" value="996">Kyrgyzstan (+996)</option>
    <option data-countrycode="LA" value="856">Laos (+856)</option>
    <option data-countrycode="LV" value="371">Latvia (+371)</option>
    <option data-countrycode="LB" value="961">Lebanon (+961)</option>
    <option data-countrycode="LS" value="266">Lesotho (+266)</option>
    <option data-countrycode="LR" value="231">Liberia (+231)</option>
    <option data-countrycode="LY" value="218">Libya (+218)</option>
    <option data-countrycode="LI" value="417">Liechtenstein (+417)</option>
    <option data-countrycode="LT" value="370">Lithuania (+370)</option>
    <option data-countrycode="LU" value="352">Luxembourg (+352)</option>
    <option data-countrycode="MO" value="853">Macao (+853)</option>
    <option data-countrycode="MK" value="389">Macedonia (+389)</option>
    <option data-countrycode="MG" value="261">Madagascar (+261)</option>
    <option data-countrycode="MW" value="265">Malawi (+265)</option>
    <option data-countrycode="MY" value="60">Malaysia (+60)</option>
    <option data-countrycode="MV" value="960">Maldives (+960)</option>
    <option data-countrycode="ML" value="223">Mali (+223)</option>
    <option data-countrycode="MT" value="356">Malta (+356)</option>
    <option data-countrycode="MH" value="692">Marshall Islands (+692)</option>
    <option data-countrycode="MQ" value="596">Martinique (+596)</option>
    <option data-countrycode="MR" value="222">Mauritania (+222)</option>
    <option data-countrycode="YT" value="269">Mayotte (+269)</option>
    <option data-countrycode="MX" value="52">Mexico (+52)</option>
    <option data-countrycode="FM" value="691">Micronesia (+691)</option>
    <option data-countrycode="MD" value="373">Moldova (+373)</option>
    <option data-countrycode="MC" value="377">Monaco (+377)</option>
    <option data-countrycode="MN" value="976">Mongolia (+976)</option>
    <option data-countrycode="MS" value="1664">Montserrat (+1664)</option>
    <option data-countrycode="MA" value="212">Morocco (+212)</option>
    <option data-countrycode="MZ" value="258">Mozambique (+258)</option>
    <option data-countrycode="MN" value="95">Myanmar (+95)</option>
    <option data-countrycode="NA" value="264">Namibia (+264)</option>
    <option data-countrycode="NR" value="674">Nauru (+674)</option>
    <option data-countrycode="NP" value="977">Nepal (+977)</option>
    <option data-countrycode="NL" value="31">Netherlands (+31)</option>
    <option data-countrycode="NC" value="687">New Caledonia (+687)</option>
    <option data-countrycode="NZ" value="64">New Zealand (+64)</option>
    <option data-countrycode="NI" value="505">Nicaragua (+505)</option>
    <option data-countrycode="NE" value="227">Niger (+227)</option>
    <option data-countrycode="NG" value="234">Nigeria (+234)</option>
    <option data-countrycode="NU" value="683">Niue (+683)</option>
    <option data-countrycode="NF" value="672">Norfolk Islands (+672)</option>
    <option data-countrycode="NP" value="670">Northern Marianas (+670)</option>
    <option data-countrycode="NO" value="47">Norway (+47)</option>
    <option data-countrycode="OM" value="968">Oman (+968)</option>
    <option data-countrycode="PW" value="680">Palau (+680)</option>
    <option data-countrycode="PA" value="507">Panama (+507)</option>
    <option data-countrycode="PG" value="675">Papua New Guinea (+675)</option>
    <option data-countrycode="PY" value="595">Paraguay (+595)</option>
    <option data-countrycode="PE" value="51">Peru (+51)</option>
    <option data-countrycode="PH" value="63">Philippines (+63)</option>
    <option data-countrycode="PL" value="48">Poland (+48)</option>
    <option data-countrycode="PT" value="351">Portugal (+351)</option>
    <option data-countrycode="PR" value="1787">Puerto Rico (+1787)</option>
    <option data-countrycode="QA" value="974">Qatar (+974)</option>
    <option data-countrycode="RE" value="262">Reunion (+262)</option>
    <option data-countrycode="RO" value="40">Romania (+40)</option>
    <option data-countrycode="RU" value="7">Russia (+7)</option>
    <option data-countrycode="RW" value="250">Rwanda (+250)</option>
    <option data-countrycode="SM" value="378">San Marino (+378)</option>
    <option data-countrycode="ST" value="239">Sao Tome &amp; Principe (+239)</option>
    <option data-countrycode="SA" value="966">Saudi Arabia (+966)</option>
    <option data-countrycode="SN" value="221">Senegal (+221)</option>
    <option data-countrycode="CS" value="381">Serbia (+381)</option>
    <option data-countrycode="SC" value="248">Seychelles (+248)</option>
    <option data-countrycode="SL" value="232">Sierra Leone (+232)</option>
    <option data-countrycode="SG" value="65">Singapore (+65)</option>
    <option data-countrycode="SK" value="421">Slovak Republic (+421)</option>
    <option data-countrycode="SI" value="386">Slovenia (+386)</option>
    <option data-countrycode="SB" value="677">Solomon Islands (+677)</option>
    <option data-countrycode="SO" value="252">Somalia (+252)</option>
    <option data-countrycode="ZA" value="27">South Africa (+27)</option>
    <option data-countrycode="ES" value="34">Spain (+34)</option>
    <option data-countrycode="LK" value="94">Sri Lanka (+94)</option>
    <option data-countrycode="SH" value="290">St. Helena (+290)</option>
    <option data-countrycode="KN" value="1869">St. Kitts (+1869)</option>
    <option data-countrycode="SC" value="1758">St. Lucia (+1758)</option>
    <option data-countrycode="SD" value="249">Sudan (+249)</option>
    <option data-countrycode="SR" value="597">Suriname (+597)</option>
    <option data-countrycode="SZ" value="268">Swaziland (+268)</option>
    <option data-countrycode="SE" value="46">Sweden (+46)</option>
    <option data-countrycode="CH" value="41">Switzerland (+41)</option>
    <option data-countrycode="SI" value="963">Syria (+963)</option>
    <option data-countrycode="TW" value="886">Taiwan (+886)</option>
    <option data-countrycode="TJ" value="7">Tajikstan (+7)</option>
    <option data-countrycode="TH" value="66">Thailand (+66)</option>
    <option data-countrycode="TG" value="228">Togo (+228)</option>
    <option data-countrycode="TO" value="676">Tonga (+676)</option>
    <option data-countrycode="TT" value="1868">Trinidad &amp; Tobago (+1868)</option>
    <option data-countrycode="TN" value="216">Tunisia (+216)</option>
    <option data-countrycode="TR" value="90">Turkey (+90)</option>
    <option data-countrycode="TM" value="7">Turkmenistan (+7)</option>
    <option data-countrycode="TM" value="993">Turkmenistan (+993)</option>
    <option data-countrycode="TC" value="1649">Turks &amp; Caicos Islands (+1649)</option>
    <option data-countrycode="TV" value="688">Tuvalu (+688)</option>
    <option data-countrycode="UG" value="256">Uganda (+256)</option>
    <option data-countrycode="GB" value="44">UK (+44)</option>
    <option data-countrycode="UA" value="380">Ukraine (+380)</option>
    <option data-countrycode="AE" value="971">United Arab Emirates (+971)</option>
    <option data-countrycode="UY" value="598">Uruguay (+598)</option>
    <option data-countrycode="US" value="1">USA (+1)</option>
    <option data-countrycode="UZ" value="7">Uzbekistan (+7)</option>
    <option data-countrycode="VU" value="678">Vanuatu (+678)</option>
    <option data-countrycode="VA" value="379">Vatican City (+379)</option>
    <option data-countrycode="VE" value="58">Venezuela (+58)</option>
    <option data-countrycode="VN" value="84">Vietnam (+84)</option>
    <option data-countrycode="VG" value="84">Virgin Islands - British (+1284)</option>
    <option data-countrycode="VI" value="84">Virgin Islands - US (+1340)</option>
    <option data-countrycode="WF" value="681">Wallis &amp; Futuna (+681)</option>
    <option data-countrycode="YE" value="969">Yemen (North)(+969)</option>
    <option data-countrycode="YE" value="967">Yemen (South)(+967)</option>
    <option data-countrycode="ZM" value="260">Zambia (+260)</option>
    <option data-countrycode="ZW" value="263">Zimbabwe (+263)</option>
  </select>
)

const BirthdayYear = () => (
  <select name="birth-year" id="birthYear">
    <option value="">연도</option>
    <option value="2020">2021</option>
    <option value="2020">2020</option>
    <option value="2019">2019</option>
    <option value="2018">2018</option>
    <option value="2017">2017</option>
    <option value="2016">2016</option>
    <option value="2015">2015</option>
    <option value="2014">2014</option>
    <option value="2013">2013</option>
    <option value="2012">2012</option>
    <option value="2011">2011</option>
    <option value="2010">2010</option>
    <option value="2009">2009</option>
    <option value="2008">2008</option>
    <option value="2007">2007</option>
    <option value="2006">2006</option>
    <option value="2005">2005</option>
    <option value="2004">2004</option>
    <option value="2003">2003</option>
    <option value="2002">2002</option>
    <option value="2001">2001</option>
    <option value="2000">2000</option>
    <option value="1999">1999</option>
    <option value="1998">1998</option>
    <option value="1997">1997</option>
    <option value="1996">1996</option>
    <option value="1995">1995</option>
    <option value="1994">1994</option>
    <option value="1993">1993</option>
    <option value="1992">1992</option>
    <option value="1991">1991</option>
    <option value="1990">1990</option>
    <option value="1989">1989</option>
    <option value="1988">1988</option>
    <option value="1987">1987</option>
    <option value="1986">1986</option>
    <option value="1985">1985</option>
    <option value="1984">1984</option>
    <option value="1983">1983</option>
    <option value="1982">1982</option>
    <option value="1981">1981</option>
    <option value="1980">1980</option>
    <option value="1979">1979</option>
    <option value="1978">1978</option>
    <option value="1977">1977</option>
    <option value="1976">1976</option>
    <option value="1975">1975</option>
    <option value="1974">1974</option>
    <option value="1973">1973</option>
    <option value="1972">1972</option>
    <option value="1971">1971</option>
    <option value="1970">1970</option>
    <option value="1969">1969</option>
    <option value="1968">1968</option>
    <option value="1967">1967</option>
    <option value="1966">1966</option>
    <option value="1965">1965</option>
    <option value="1964">1964</option>
    <option value="1963">1963</option>
    <option value="1962">1962</option>
    <option value="1961">1961</option>
    <option value="1960">1960</option>
    <option value="1959">1959</option>
    <option value="1958">1958</option>
    <option value="1957">1957</option>
    <option value="1956">1956</option>
    <option value="1955">1955</option>
    <option value="1954">1954</option>
    <option value="1953">1953</option>
    <option value="1952">1952</option>
    <option value="1951">1951</option>
    <option value="1950">1950</option>
    <option value="1949">1949</option>
    <option value="1948">1948</option>
    <option value="1947">1947</option>
    <option value="1946">1946</option>
    <option value="1945">1945</option>
    <option value="1944">1944</option>
    <option value="1943">1943</option>
    <option value="1942">1942</option>
    <option value="1941">1941</option>
    <option value="1940">1940</option>
    <option value="1939">1939</option>
    <option value="1938">1938</option>
    <option value="1937">1937</option>
    <option value="1936">1936</option>
    <option value="1935">1935</option>
    <option value="1934">1934</option>
    <option value="1933">1933</option>
    <option value="1932">1932</option>
    <option value="1931">1931</option>
    <option value="1930">1930</option>
    <option value="1929">1929</option>
    <option value="1928">1928</option>
    <option value="1927">1927</option>
    <option value="1926">1926</option>
    <option value="1925">1925</option>
    <option value="1924">1924</option>
    <option value="1923">1923</option>
    <option value="1922">1922</option>
    <option value="1921">1921</option>
    <option value="1920">1920</option>
    <option value="1919">1919</option>
    <option value="1918">1918</option>
    <option value="1917">1917</option>
    <option value="1916">1916</option>
    <option value="1915">1915</option>
    <option value="1914">1914</option>
    <option value="1913">1913</option>
    <option value="1912">1912</option>
    <option value="1911">1911</option>
    <option value="1910">1910</option>
    <option value="1909">1909</option>
    <option value="1908">1908</option>
    <option value="1907">1907</option>
    <option value="1906">1906</option>
    <option value="1905">1905</option>
  </select>
)

const BirthdayMonth = () => (
  <select name="birth-month" id="birthMonth">
    <option value="">월</option>
    <option value="01">01</option>
    <option value="02">02</option>
    <option value="03">03</option>
    <option value="04">04</option>
    <option value="05">05</option>
    <option value="06">06</option>
    <option value="07">07</option>
    <option value="08">08</option>
    <option value="09">09</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
  </select>
)

const BirthdayDay = () => (
  <select name="birth-day" id="birthDay">
    <option value="">일</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    <option value="13">13</option>
    <option value="14">14</option>
    <option value="15">15</option>
    <option value="16">16</option>
    <option value="17">17</option>
    <option value="18">18</option>
    <option value="19">19</option>
    <option value="20">20</option>
    <option value="21">21</option>
    <option value="22">22</option>
    <option value="23">23</option>
    <option value="24">24</option>
    <option value="25">25</option>
    <option value="26">26</option>
    <option value="27">27</option>
    <option value="28">28</option>
    <option value="29">29</option>
    <option value="30">30</option>
    <option value="31">31</option>
  </select>
)

export const InputWithLabel = ({ label,type, warningText, name }) => (
  <div className="inputTag">
    <label className="inputTagLabel" htmlFor={name}>{label}</label><br />
    <input className="inputTagInput" type={type} id={name} />
    <div className="warningText">{warningText}</div>
  </div>
);


const GenderBox = () => (
  <select id="gender"  name="gender" id="genderRadioButtonContainer">
    <option value="male">남성</option>
    <option value="female">여성</option>
  </select>
)

export const TelInputWithLabel = ({ label, warningText, name }) => (
  <div className="inputTag">
    <label className="inputTagLabel" htmlFor={name}>{label}</label><br />
    <div className="telNumContainer">
      <NationCode />
      <input className="telNumContainerWrite" type="number" id={name}></input>
    </div>
    <div className="warningText">{warningText}</div>
  </div>
);

export const BirthInputWithLabel = ({ label, warningText, name }) => (
  <div className="inputTag">
    <label className="inputTagLabel" htmlFor={name}>{label}</label><br />
    <div className="birthDayForm">
      <BirthdayYear />
      <BirthdayMonth />
      <BirthdayDay />
    </div>
    <div className="warningText">{warningText}</div>
  </div>
);

export const GenderInputWithLabel = ({ label, warningText, name }) => (
    <div className="inputTag">
      <label className="inputTagLabel" htmlFor={name}>{label}</label><br />
      <GenderBox/>
      <div className="warningText">{warningText}</div>
    </div>
);

