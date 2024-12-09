import "../style/SkillCard.css"

function SkillCard ({title, description, skills = []}) {
    return (
        <div className="SkillCard">
            <p className="SkillCardTitle">{title}</p>
            <p className="SkillCardDescription">{description}</p>
            <ul className="SkillCardList">
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    )
}

export default SkillCard