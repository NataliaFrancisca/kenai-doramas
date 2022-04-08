import React from "react";

const Card = ({className, dataSerie}) => {

    return(
        <div className={className}>
            <span>Categoria</span>
            <div className="list-stars">
                <img src={'img/icons/star-white.png'}/>
                <img src={'img/icons/star-white.png'}/>
                <img src={'img/icons/star-white.png'}/>
                <img src={'img/icons/star-white.png'}/>
                <img src={'img/icons/star-white.png'}/>
            </div>

            <h2>{dataSerie.title}</h2>

            <DetailsSerie details={dataSerie} />
        </div>

    )
}

export default Card;


const DetailsSerie = ({details}) => {

    const {description, category} = details;

    return(
        <div className="details-serie">
            <div className="list-category">
                {category.map((category, index) => (
                    <span key={index}>{category}</span>
                ))}
            </div>

            <p>{description}</p>
        </div>
    )
}
