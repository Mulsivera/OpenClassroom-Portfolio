import "../style/TableCard.css"

function TableCard ({title, name, dates, type}) {
    return (     
        <div className="TableCardDiv">
            <p className="TableCardTitle">{title}</p>
            <p className="TableCardDescription"><span>{name}</span><span>{dates}</span></p>
            <p className="TableCardType">{type}</p>
        </div>
    )
}

export default TableCard