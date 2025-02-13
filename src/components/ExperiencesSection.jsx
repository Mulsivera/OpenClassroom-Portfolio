import "../style/ExperiencesSection.css"

import Experiences from "../data/Experiences.json"
import Formations from "../data/Formations.json"

import TableCard from "./TableCard"
import TitleDescription from "./TitleDescription"

function ExperiencesSection () {
    return (
        <div className="ExperiencesSection" id="ExperiencesSection">
            <TitleDescription title="mes expériences et formations" description="Retrouvez ici mes différentes expériences professionnelles et les formations que j'ai suivies." />
            <div className="ExperiencesTables">
                <div className="ExperiencesBloc">
                    <p className="ExperiencesTitle">Formations</p>
                    <div className="ExperiencesCards">
                        {Experiences.map((experience, index) => {
                            return (
                                <TableCard key={index} title={experience.name} name={experience.name} dates={experience.dates} type={experience.type}/>
                        )})}
                    </div>
                </div>
                <div className="ExperiencesBloc">
                <p className="ExperiencesTitle">Expériences</p>
                    <div className="ExperiencesCards">
                        {Formations.map((formation, index) => {
                            return (
                                <TableCard key={index} title={formation.name} name={formation.name} dates={formation.dates} type={formation.type}/>
                        )})}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperiencesSection