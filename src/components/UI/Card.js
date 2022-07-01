import React from "react";

import { Button } from "../../styles/Elements";

const Card = ({className, dataSerie}) => {

    const {category, title, description, watch} = dataSerie;

    return(
        <div className={className}>
            <span>{category[0]}</span>
            <div className="list-stars">
                <img src="img/icons/rating.svg" alt="rating"/>
            </div>

            <h2>{title}</h2>

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

export default Card;



