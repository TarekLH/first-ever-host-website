import React from "react";
//assets
import {TiLockClosedOutline, TiGlobeOutline} from "react-icons/ti"
import {BsCodeSlash} from "react-icons/bs"
import {IoFileTrayStackedSharp} from "react-icons/io5"
//style
import "../styles/Services.css"

export default function Services() {

    let OffersD = [
        {
            id: "pieurh",
            icon: <TiLockClosedOutline className="ion-icon"/>,
            title:"SSL certifecate",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea!",
            link: "#",
        },
        {
            id: "sdgsfd",
            icon: <TiGlobeOutline className="ion-icon"/>,
            title:"Personal Domain",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea!",
            link: "#",
        },
        {
            id: "etyh",
            icon: <BsCodeSlash className="ion-icon"/>,
            title:"Code Editor",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea!",
            link: "#",
        },
        {
            id: "lebf",
            icon: <IoFileTrayStackedSharp className="ion-icon"/>,
            title:"Media Storage",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea!",
            link: "#",
        }
    ]

    let GenerateOffers = OffersD.map(offer => (
        <div key={offer.id} className="offer">
            {offer.icon}
            <h1>{offer.title}</h1>
            <p>
                {offer.desc}
            </p>
            <a href={offer.link}><h2>MORE!</h2></a>
        </div>
    )) 


    return (
        <div className="section services">
            <div className="section-content">
                <h1>Hosting solution with benifits.</h1>
                <p>
                Turn your ideas into reality with static . <br />
                With a lot of powerfull features , <br />
                we guarantee simplicity and clarity.
                </p>
                <div className="btn-container">
                <button className="green-btn">
                    <span className="btn-txt">Read more</span>
                </button>
                </div>
            </div>
            <div className="offers">
                {GenerateOffers}
            </div>
        </div>
    )
}