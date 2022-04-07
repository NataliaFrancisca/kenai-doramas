import React from "react";

const Card = ({className, dataSerie}) => {

    console.log(dataSerie);

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
        </div>

    )
}

export default Card;