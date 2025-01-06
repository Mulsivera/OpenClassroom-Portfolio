import "../style/ProjectsSection.css"

import Projects from "../data/Projects"

import ProjectCard from "./ProjectCard"
import TitleDescription from "./TitleDescription";

import { useState } from "react";

function ProjectsSection () {

    const [filterCategory, setFilterCategory] = useState("Tous");

    function CategoryFilter(event) {
        setFilterCategory(event.target.innerHTML);
    }

    return (
        <div id="ProjectsSection" className="ProjectsSection">
            <TitleDescription title="Projets auxquels j'ai contribué" description="Cliquez sur un projet pour le découvrir. Pas de lien ? Le projet n'est pas encore accessible." />
            <div className="ProjectsButtons">
                <button className={filterCategory === "Tous" ? "BtnActive" : ""} onClick={CategoryFilter}>Tous</button>
                <button className={filterCategory === "Professionnels" ? "BtnActive" : ""} onClick={CategoryFilter}>Professionnels</button>
                <button className={filterCategory === "Formateurs" ? "BtnActive" : ""} onClick={CategoryFilter}>Formateurs</button>
                <button  className={filterCategory === "Personnels" ? "BtnActive" : ""} onClick={CategoryFilter}>Personnels</button>
            </div>
            <div className="ProjectsCards">
                {Projects.map((project, index) => {
                    if (filterCategory === "Tous" || filterCategory === project.category) {
                        return (
                            <ProjectCard key={index} image={project.image} title={project.title} description={project.description} category={project.category} link={project.link} skills={project.skills} />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    )
}

export default ProjectsSection
