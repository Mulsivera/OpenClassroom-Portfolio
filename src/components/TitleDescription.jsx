import "../style/TitleDescription.css"

function TitleDescription ({title, description}) {
    return (
        <div>
        <p className="Title">{title}</p>
        <p className="Description">{description}</p>
    </div>
    )
}

export default TitleDescription