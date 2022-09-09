import React from "react";
//assets
import Aside1 from "../assets/aside1.png"
import {BsArrowBarUp} from "react-icons/bs"
import {AiFillYoutube} from "react-icons/ai"
//style
import "../styles/Hero.css"

export default function Hero() {
    return (
        <section className="heroSection">
            <div className="section-content">
                <h1>One-Click solution for your static? website.</h1>
                <p>Image from Freepik</p>
                <div className="btns">
                <div className="btn-container">
                    <button className="green-btn">
                    <BsArrowBarUp size={"2rem"} style={{marginRight: 5}}/>
                    <span className="btn-txt">Upload for free</span>
                    </button>
                </div>

                <div className="btn-container">
                    <button className="grey-btn">
                    <AiFillYoutube size={"2rem"} style={{marginRight: 5}}/>
                    <span className="btn-txt"> Watch Video</span>
                    </button>
                </div>
                </div>
            </div>
            <img className="img-hero" src={Aside1} alt="img.png" />
        </section>
    )
}