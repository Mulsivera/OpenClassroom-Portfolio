import "../style/SkillsSection.css"

import SkillCard from "./SkillCard"

import Skills from "../data/skills.json"

function SkillsSection () {
    return (
        <div id="SkillsSection" className="SkillsSection">
            <p className="SkillsTitle">Découvrez mes principales compétences</p>
            <div className="SkillsCards">
                {Skills.map((skill, index) => (
                    <SkillCard key={index} title={skill.title} description={skill.description} skills={skill.skills} />
                ))}
            </div>
        </div>
    )
}

export default SkillsSection