import "../style/HeroSection.css"

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function HeroSection () {
    return (
        <div className="HeroSection" id="AccueilSection">
            <p className="HeroIntroduction"><span>Adrien Da Silva Ferreira</span><br />Développeur Web / Low Code</p>
            <p className="HeroDescription">En fin de formation de développeur web et en recherche d'une alternance en tant que Développeur d'application JavaScript React.</p>
            <div className="HeroButtons">
                <a href="https://www.linkedin.com/in/adrien-da-silva-ferreira-910768252" className="HeroButtonLinkedin" target="_blank" rel="noreferer"><FaLinkedin />Linkedin</a>
                <a href="https://github.com/Mulsivera" className="HeroButtonGithub" target="_blank" rel="noreferer"><FaGithub />Github</a>
            </div>
        </div>
    )
}

export default HeroSection