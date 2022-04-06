import React from "react";

import { db } from "../../db/data";

const HighLight = ({className}) => {

    const dataHeader = db.find(element => element.id == 0)
    
    return(
        <section className={className}>
            <div className="header-category-list">
                {dataHeader.category.map(category => (
                    <span className="category">{category}</span>
                ))}
            </div>

            <div className="stars">
                <img src="img/icons/star.png" />
                <img src="img/icons/star.png" />
                <img src="img/icons/star.png" />
                <img src="img/icons/star.png" />
            </div>

            <h1>{dataHeader.title}</h1>

            <p>{dataHeader.description}</p>

            <button>Asssistir Agora</button>
        </section>
    )
}

export default HighLight;