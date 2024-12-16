import "../style/SkillCard.css";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as RiIcons from "react-icons/ri";
import * as DiIcons from "react-icons/di";
import * as TbIcons from "react-icons/tb";

function SkillCard({ title, description, skills = [] }) {
    return (
        <div className="SkillCard">
            <p className="SkillCardTitle">{title}</p>
            <p className="SkillCardDescription">{description}</p>
            <div className="SkillCardList">
                {skills.map((skill, index) => {
                    let Icon;
                    if (skill.library === "fa") {
                        Icon = FaIcons[`Fa${skill.icon}`];
                    } else if (skill.library === "si") {
                        Icon = SiIcons[`Si${skill.icon}`];
                    } else if (skill.library === "ri") {
                        Icon = RiIcons[`Ri${skill.icon}`];
                    } else if (skill.library === "di") {
                        Icon = DiIcons[`Di${skill.icon}`];
                    } else if (skill.library === "tb") {
                        Icon = TbIcons[`Tb${skill.icon}`];
                    }
                    return (
                        <div className="SkillCardIcon" cl key={index}>
                            {Icon && <Icon />}
                            <p>{skill.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SkillCard;
