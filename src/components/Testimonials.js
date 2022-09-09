import React from "react"
import "../styles/Testimonials.css"
import W1 from "../assets/w1.jpg"
import DS1 from "../assets/ds1.jpg"
import HG from "../assets/hgghgh.jpg"
import GG from "../assets/gggg.jpg"

export default function Testimonials() {

    let UsersD = [
        {
            id: "ouvhd",
            img: W1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ! Lorem ipsum dolor sit.",
            name: "Nat Reynolds",
            post: "chief accoutant",
        },
        {
            id: "welrud",
            img: DS1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ! Lorem ipsum dolor sit.",
            name: "Celia Almeda",
            post: "Secretary",
        },
        {
            id: "mvs",
            img: HG,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ! Lorem ipsum dolor sit.",
            name: "Bob Robert",
            post: "Sales manager",
        },
        {
            id: "JKG",
            img: GG,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ! Lorem ipsum dolor sit.",
            name: "Mattie Smith",
            post: "Accoutant-audithor",
        },

    ]

    let GenerateUsers = UsersD.map(info => (
        <div key={info.id} className="user">
            <div className="img-container">
                <img src={info.img} alt="img" />
            </div>
            <p className="quote">
                {info.desc}
            </p>
            <h2>{info.name}</h2>
            <p>{info.post}</p>
            </div>
    )) 

    return (
        <section className="feedback">
        <h2>TESTIMONIALS</h2>
        <h1>What Clients Say</h1>
        <h2>
            We place huge value on strong relationships and have seen the benifit
            they bring to our business. Customer feedback is vital in helping us to
            get it right.
        </h2>
        <div className="users">
            {GenerateUsers}
        </div>
    </section>
    )
}