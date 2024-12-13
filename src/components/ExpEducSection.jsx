import "../style/ExpEducSection.css"

import ExpEducCard from "./ExpEducCard"

import Experiences from "../data/Experiences.json"
import Formations from "../data/Formations.json"

function ExperiencesSection () {
    return (
        <div className="ExpEducSection">
            <p className="ExpEducCategory">Expériences et Études</p>
            <p className="ExpEducTitle">Précédents posts et formations suivies</p>
            <div className="ExpEducTimelines">
                <div id="ExperiencesSection" className="TimelineBlock">
                    <p className="TimelineTitle">Expériences</p>
                    <div className="Timeline">
                        <div className="TimelineLine"></div>
                        <div className="TimelineCards">
                            {Experiences.map((experience, index) => {
                                return (
                                    <ExpEducCard key={index} dates={experience.dates} name={experience.name} description={experience.description} place={experience.place} />
                                )})}
                        </div>
                    </div>
                </div>
                <div id="EducationSection" className="TimelineBlock">
                    <p className="TimelineTitle">Formation</p>
                    <div className="Timeline">
                        <div className="TimelineLine"></div>
                        <div className="TimelineCards">
                            {Formations.map((formation, index) => {
                                return (
                                    <ExpEducCard key={index} dates={formation.dates} name={formation.name} description={formation.description} place={formation.place} />
                                )})}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperiencesSection