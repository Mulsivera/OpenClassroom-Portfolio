import "../style/ProjectCard.css"

function ProjectCard ({image, title, description, category, link}) {
    return (
        <a href={link} target="_blank" className="ProjectCard">
            <img src={image} className="ProjectCardImg" alt={title}/>
            <p className="ProjectCardTitle">{title}</p>
            <p className="ProjectCardDescription">{description}</p>
            <p className="ProjectCardCategory">{category}</p>
        </a>
    )
}

export default ProjectCard