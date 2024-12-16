import "../style/HeroSection.css"

import { FaLinkedin } from "react-icons/fa";

function HeroSection () {
    return (
        <div className="HeroSection" id="AccueilSection">
            <p className="HeroIntroduction"><span>Adrien Da Silva Ferreira</span><br />Développeur Web / Low Code</p>
            <p className="HeroDescription">En fin de formation de développeur web et en recherche d'une alternance en tant que Développeur d'application JavaScript React.</p>
            <a href="https://www.linkedin.com/in/adrien-da-silva-ferreira-910768252" className="HeroButton" target="_blank" rel="noreferer"><FaLinkedin />Mon Linkedin</a>
        </div>
    )
}

export default HeroSection