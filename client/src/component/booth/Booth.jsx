import React from 'react'
import './booth.css';
import { Link } from 'react-router-dom';

export default function Booth( {layer} ) {
    return(
        <>
            <div className="booth_wrap">
                <img id="booth_in" src="/assets/IN.png" alt="입구이미지" />
                <img id="booth_out" src="/assets/OUT.png" alt="출구이미지" />
                <img id="booth_state" src="/assets/STATE.png" alt="예약상태이미지" />
                {/* A구역 */}
                <Link to="#"><span className="Booth_A" id="A_b1_101">A-{layer}01</span></Link>
                <Link to="#"><span id="A_a_102">A-{layer}02</span></Link>
                <Link to="#"><span id="A_a_103">A-{layer}03</span></Link>
                <Link to="#"><span id="A_a_104">A-{layer}04</span></Link>
                <Link to="#"><span id="A_a_105">A-{layer}05</span></Link>
                <Link to="#"><span id="A_a_106">A-{layer}06</span></Link>
                <Link to="#"><span id="A_a_107">A-{layer}07</span></Link>
                <Link to="#"><span id="A_b2_108">A-{layer}08</span></Link>
                {/* B구역 */}
                <Link to="#"><span id="B_c_101">B-{layer}01</span></Link>
                <Link to="#"><span id="B_c_102">B-{layer}02</span></Link>
                <Link to="#"><span id="B_a_103">B-{layer}03</span></Link>
                <Link to="#"><span id="B_b1_104">B-{layer}04</span></Link>
                <Link to="#"><span id="B_b1_105">B-{layer}05</span></Link>
                <Link to="#"><span id="B_b1_106">B-{layer}06</span></Link>
                <Link to="#"><span id="B_a_107">B-{layer}07</span></Link>
                <Link to="#"><span id="B_b1_108">B-{layer}08</span></Link>
                {/* C구역 */}
                <Link to="#"><span id="C_c_101">C-{layer}01</span></Link>
                <Link to="#"><span id="C_a_102">C-{layer}02</span></Link>
                <Link to="#"><span id="C_b2_103">C-{layer}03</span></Link>
                <Link to="#"><span id="C_b1_104">C-{layer}04</span></Link>
                <Link to="#"><span id="C_b1_105">C-{layer}05</span></Link>
                <Link to="#"><span id="C_b2_106">C-{layer}06</span></Link>
                {/* D구역 */}
                <Link to="#"><span id="D_b2_101">D-{layer}01</span></Link>
                <Link to="#"><span id="D_a_102">D-{layer}02</span></Link>
                <Link to="#"><span id="D_a_103">D-{layer}03</span></Link>
                <Link to="#"><span id="D_a_104">D-{layer}04</span></Link>
                <Link to="#"><span id="D_a_105">D-{layer}05</span></Link>
                <Link to="#"><span id="D_b2_106">D-{layer}06</span></Link>
                <Link to="#"><span id="D_c_107">D-{layer}07</span></Link>
                <Link to="#"><span id="D_c_108">D-{layer}08</span></Link>
                {/* E구역 */}
                <Link to="#"><span id="E_c_101">E-{layer}01</span></Link>
                <Link to="#"><span id="E_c_102">E-{layer}02</span></Link>
                <Link to="#"><span id="E_b2_103">E-{layer}03</span></Link>
                <Link to="#"><span id="E_c_104">E-{layer}04</span></Link>
                {/* F구역 */}
                <Link to="#"><span id="F_c_101">F-{layer}01</span></Link>
                <Link to="#"><span id="F_a_102">F-{layer}02</span></Link>
                <Link to="#"><span id="F_a_103">F-{layer}03</span></Link>
                <Link to="#"><span id="F_a_104">F-{layer}04</span></Link>
                <Link to="#"><span id="F_a_105">F-{layer}05</span></Link>
                <Link to="#"><span id="F_c_106">F-{layer}06</span></Link>
                {/* G구역 */}
                <Link to="#"><span id="G_c_101">G-{layer}01</span></Link>
                <Link to="#"><span id="G_c_102">G-{layer}02</span></Link>
                <Link to="#"><span id="G_b1_103">G-{layer}03</span></Link>
                <Link to="#"><span id="G_a_104">G-{layer}04</span></Link>
                <Link to="#"><span id="G_a_105">G-{layer}05</span></Link>
                <Link to="#"><span id="G_a_106">G-{layer}06</span></Link>
                <Link to="#"><span id="G_a_107">G-{layer}07</span></Link>
                {/* H구역 */}
                <Link to="#"><span id="H_c_101">H-{layer}01</span></Link>
                <Link to="#"><span id="H_b2_102">H-{layer}02</span></Link>
                <Link to="#"><span id="H_b2_103">H-{layer}03</span></Link>
                <Link to="#"><span id="H_a_104">H-{layer}04</span></Link>
                <Link to="#"><span id="H_a_105">H-{layer}05</span></Link>
                <Link to="#"><span id="H_a_106">H-{layer}06</span></Link>
                <Link to="#"><span id="H_a_107">H-{layer}07</span></Link>
                <Link to="#"><span id="H_b2_108">H-{layer}08</span></Link>
                <Link to="#"><span id="H_b2_109">H-{layer}09</span></Link>
                {/* I구역 */}
                <Link to="#"><span id="I_a_101">I-{layer}01</span></Link>
                <Link to="#"><span id="I_a_102">I-{layer}02</span></Link>
                <Link to="#"><span id="I_a_103">I-{layer}03</span></Link>
                <Link to="#"><span id="I_a_104">I-{layer}04</span></Link>
                <Link to="#"><span id="I_b1_105">I-{layer}05</span></Link>
                <Link to="#"><span id="I_b1_106">I-{layer}06</span></Link>
            </div>
        </>
    )
}