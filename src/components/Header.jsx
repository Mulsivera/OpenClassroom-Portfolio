import "../style/header.css"
import logo from "../assets/logo.svg"
import { FaBars } from "react-icons/fa"
import { useState } from 'react'

function Header () {

    const [visibility, setVisibility] = useState(false);

    function SwitchVisibility () {
        setVisibility(prevVisibility => !prevVisibility)
        console.log(visibility)
    }

    return (
        <div>
            <header>
                <img src={logo}></img>
                <nav className="nav_desktop">
                    <a href="/">Accueil</a>
                    <a href="/about">À Propos</a>
                    <a href="/education">Éducation</a>
                    <a href="/experience">Experiences</a>
                    <a href="/skill">Compétences</a>
                    <a href="/project">Projets</a>
                    <a className="contact_button" href="/#contact">Contact</a>
                    <FaBars onClick={SwitchVisibility} className="burger_menu" />
                </nav>
            </header>
            <div className={visibility ? 'nav_mobile_show' : 'nav_mobile_hide'}>
                <a href="/">Accueil</a>
                <a href="/about">À Propos</a>
                <a href="/education">Éducation</a>
                <a href="/experience">Experiences</a>
                <a href="/skill">Compétences</a>
                <a href="/project">Projets</a>
                <a className="contact_button" href="/#contact">Contact</a>
            </div>
        </div>
    )
}

export default Header