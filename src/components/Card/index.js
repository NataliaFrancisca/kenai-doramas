import React from "react";

import { Button } from "../../styles/Elements";

const CardComponent = ({className, dataSerie}) => {

    const {category, title, description, watch, image} = dataSerie;

    return(
        <div className={className}>

            <img src={image} className="background-image" alt={`poster ${title}`}/>

            <section className="initial-details">
                <span>{category[0]}</span>
                <img src="img/icons/rating.svg" alt="rating"/>
                <h2>{title}</h2>
            </section>
           

            <section className="details-serie">
                <div className="list-category">
                    {category.map((category, index) => (
                        <span key={index}>{category}</span>
                    ))}
                </div>

                <p>{description}</p>

                <Button>
                    <a href={watch} target="_blank">Watch Now</a>
                </Button>
            </section>
        </div>
    )
}

export default CardComponent;



