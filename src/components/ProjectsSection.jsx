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
        <div className="ProjectsSection">
            <p className="ProjectsCategory">PROJETS</p>
            <p className="ProjectsTitle">Projets auxquels j'ai contribué</p>
            <p className="ProjectsDescription">Pour plus d'informations, cliquez sur le projet qui vous intéresse.</p>
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
                            <ProjectCard key={index} image={project.image} title={project.titre} description={project.description} category={project.category} />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    )
}

export default ProjectsSection
