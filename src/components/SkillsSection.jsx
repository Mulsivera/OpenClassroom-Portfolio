import "../style/SkillsSection.css"

import SkillCard from "./SkillCard"

import { FaLaptopCode } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";


function SkillsSection () {
    return (
        <div className="SkillsSection">
            <p className="SkillsCategory">Compétences</p>
            <p className="SkillsTitle">Découvrez mes compétences principales</p>
            <p className="SkillsDescription">Pour en savoir plus, cliquez sur la compétence qui vous intéresse.</p>
            <div className="SkillsCards">
                <SkillCard title="Développement d'applications Web" description="Développement d'applications web interactives et évolutives en utilisant les technologies modernes et les meilleures pratiques." icon={<FaLaptopCode />} />
                <SkillCard title="Développement de solutions Low Code" description="Création de solutions rapides et efficaces grâce aux plateformes Low Code pour des applications performantes." icon={<FaCodeBranch />} />
                <SkillCard title="Automatisation de proccesus" description="Automatisation des tâches répétitives et des processus pour améliorer la productivité et réduire les erreurs humaines." icon={<FaCogs />} />
            </div>
        </div>
    )
}

export default SkillsSection