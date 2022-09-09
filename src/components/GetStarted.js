import React from "react";
//assets
import Aside2 from "../assets/aside2.png"
import {BsArrowBarUp} from "react-icons/bs"
//style
import "../styles/Hero.css"

export default function GetStarted() {
    return(
        <section class="section heroSection2">
        <div class="img-with-before">
            <img class="img-hero" src={Aside2} alt="img.png" />
        </div>
        <div class="section-content">
            <h1>Get started with the simpliest static page.</h1>
            <p>Image from Freepik</p>
            <div class="btn-container">
            <button class="green-btn">
                <BsArrowBarUp size={"2rem"} style={{marginRight: 15}}/>
                <span class="btn-txt">Upload for free</span>
            </button>
            </div>
        </div>
    </section>
    )
}