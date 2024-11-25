import "../style/SkillCard.css"
import { FaArrowRight } from "react-icons/fa"

function SkillCard ({icon, title, description, lien}) {
    return (
        <a href={lien} className="SkillCard">
            <div className="SkillCardIcon">{icon}</div>
            <p className="SkillCardTitle">{title}</p>
            <p className="SkillCardDescription">{description}</p>
            <p className="SkillCardLink">En savoir plus <FaArrowRight /></p>
        </a>
    )
}

export default SkillCard