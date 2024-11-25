import "../style/AboutSection.css"
import { FaArrowRight } from 'react-icons/fa';


function AboutSection () {
    return (
        <div className="AboutSection">
            <p className="AboutTitle">a propos de moi</p>
            <p className="AboutDescription">Je suis Adrien Da Silva Ferreira, un <span>jeune développeur d’applications web</span> spécialisé dans les <span>outils low code et les langages web</span>. Issu d’une <span>formation en automatisme et robotique</span>, je me consacre désormais aux technologies du web à travers les outils low code et l’<span>apprentissage des langages de programmation</span>. Mon arrivée récente dans le domaine du web me permet d’<span>apprendre chaque jour</span> tout en apportant une <span>perspective fraîche aux projets</span>, grâce à mes compétences en outils low code.</p>
            <button className="AboutBtn">En apprendre plus sur moi <FaArrowRight /></button>
        </div>
    )
}

export default AboutSection