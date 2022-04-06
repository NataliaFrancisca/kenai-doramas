import React from "react";

import {db} from "../../db/data"

const PopularSeries = ({className}) => {

    const data = db.filter(serie => serie.id !== 0);
    console.log(data);

    return(
        <section className={className}>
            <h1>Populares</h1>

            <div className="list">
                {data.map(serie => (
                    <div className="card" backgroundImage={serie.image}>
                    </div>
                ))}
               

                {/* <div className="card">
                    
                </div>

                <div className="card">
                    
                </div> */}
            </div>
        </section>
    )
}

export default PopularSeries;