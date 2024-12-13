import "../style/ExpEducCard.css"

function ExpEducCard ({ dates, name, description, place }) {
    return (
        <div className="ExpEducCard">
            <p className="ExpEducCardDates">{dates}</p>
            <p className="ExpEducCardName">{name}</p>
            <p className="ExpEducCardDescription">{description}</p>
            <p className="ExpEducCardPlace">- {place}</p>
        </div>
    )
}

export default ExpEducCard