import "../style/ProjectsSection.css"
import Projects from "../data/Projects"
import ProjectCard from "./ProjectCard"
import { useState } from "react";

function ProjectsSection () {

    const [filterCategory, setFilterCategory] = useState("Tous");

    function CategoryFilter(event) {
        setFilterCategory(event.target.innerHTML);
    }

    return (
        <div id="ProjectsSection" className="ProjectsSection">
            <p className="ProjectsCategory">PROJETS</p>
            <p className="ProjectsTitle">Projets auxquels j'ai contribué</p>
            <p className="ProjectsDescription">Cliquez sur un projet pour le découvrir. Pas de lien ? Le projet n'est pas encore accessible.</p>
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
