import "../style/ProjectCard.css"

function ProjectCard ({image, title, description, category}) {
    return (
        <div className="ProjectCard">
            <img src={image} className="ProjectCardImg"/>
            <p className="ProjectCardTitle">{title}</p>
            <p className="ProjectCardDescription">{description}</p>
            <p className="ProjectCardCategory">{category}</p>
        </div>
    )
}

export default ProjectCard