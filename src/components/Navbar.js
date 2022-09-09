import React, {useState} from "react"
//assets
import logo from "../assets/logo.png"
import {AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiOutlineMenu} from "react-icons/ai"
//style
import "../styles/Navbar.css"

export default function Navbar() {
    const [Activate, setActivate] = useState(false)
    const handleClick = () => {setActivate(!Activate)}
    return (
        
    <nav>
        <div className="navbar">
            <img src={logo} alt="logo.png" className="logo" />
            <ion-icon name="menu-outline" id="menu-icon"></ion-icon>

            <ul className="socialMedia-list">
                <li>
                <a href="#"><AiFillFacebook size={"2rem"}/></a>
                </li>
                <li>
                <a href="#"><AiFillTwitterSquare size={"2rem"}/></a>
                </li>
                <li>
                <a href="#"><AiFillInstagram size={"2rem"}/></a>
                </li>
            </ul>
            <button className='btn-no-styiling' onClick={handleClick}>
                <AiOutlineMenu size={"2rem"} style={{marginLeft: 30}} />
            </button>
        </div>
        {
            Activate ?
            <div className="bg-white text-center border-bottom-2 p-0">
                <a href="#" className="display-block p-20">About</a>
                <a href="#" className="display-block p-20">Services</a>
                <a href="#" className="display-block p-20">Support</a>
                <a href="#" className="display-block p-20">Contact</a>
            </div>
                :
            <></>

        }
        
    </nav>
    )
}