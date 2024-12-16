import "../style/HeroSection.css"

function HeroSection () {
    return (
        <div className="HeroSection">
            <p className="HeroGreeting">Bienvenue sur mon magnifique Portfolio</p>
            <p className="HeroIntroduction">Je suis<br /><span>Adrien Da Silva Ferreira</span><br />Développeur Web / Low Code</p>
            <p className="HeroDescription">En alliant développement web et solutions low code, je propose des solutions numériques rapides et efficaces.</p>
        </div>
    )
}

export default HeroSection