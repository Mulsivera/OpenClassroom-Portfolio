import "../style/HeroSection.css"

import { FaDownload } from 'react-icons/fa';

function HeroSection () {
    return (
        <div className="HeroSection">
            <p className="HeroGreeting">Bienvenue sur mon Portfolio</p>
            <p className="HeroIntroduction">Je suis<br /><span>Adrien Da Silva Ferreira</span><br />Développeur Web / Low Code</p>
            <p className="HeroDescription">En alliant développement web et solutions low code, je propose des projets numériques simples et rapides.</p>
            <div className="HeroButtons">
                <button className="HeroContactBtn">Contactez-moi !</button>
                <button className="HeroCvBtn">Téléchargez mon CV <FaDownload /></button>
            </div>
        </div>
    )
}

export default HeroSection