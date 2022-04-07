import React from "react";

import {db} from "../../db/data"

import { CardStyled } from "../UI/CardStyled";

const PopularSeries = ({className}) => {

    const data = db.filter(serie => serie.id !== 0);

    return(
        <section className={className}>
            <h1>Populares</h1>

            <div className="list">
                {data.map(serie => (
                  <CardStyled imageBackground={serie.image} dataSerie={serie}/>
                ))}
            </div>
        </section>
    )
}

export default PopularSeries;