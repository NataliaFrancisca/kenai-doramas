import React from "react";

import { db } from "../../db/data";

const HighLight = ({className}) => {

    const dataHeader = db.find(element => element.id == 0)
    
    return(
        <section className={className}>
            <div className="header-category-list">
                {dataHeader.category.map((category, index) => (
                    <span className="category" key={index}>{category}</span>
                ))}
            </div>

            <div className="stars">
                <img src="img/icons/star.png" alt="star"/>
                <img src="img/icons/star.png" alt="star"/>
                <img src="img/icons/star.png" alt="star"/>
                <img src="img/icons/star.png" alt="star"/>
                <img src="img/icons/star.png" alt="star"/>
            </div>

            <h1>{dataHeader.title}</h1>

            <p>{dataHeader.description}</p>

            <button>Asssistir Agora</button>
        </section>
    )
}

export default HighLight;