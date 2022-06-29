import React from "react";

import { db } from "../../db/data";

import { Button } from "../../styles/Elements";

const HighLight = ({className}) => {

    const dataHeader = db.find(element => element.id == 0)
    
    const {category, title, description, watch} = dataHeader;

    return(
        <section className={className}>
      
            <span className="category">{category[0]}</span>
      
            <div className="stars">
                <img src="img/icons/star.png" alt="star"/>
                <img src="img/icons/star.png" alt="star"/>
                <img src="img/icons/star.png" alt="star"/>
                <img src="img/icons/star.png" alt="star"/>
                <img src="img/icons/star.png" alt="star"/>
            </div>

            <h1>{title}</h1>
            <p>{description}</p>

            <Button>
                <a href={watch} target="_blank">Watch Now</a>
            </Button>
        </section>
    )
}

export default HighLight;