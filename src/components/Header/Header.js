import React from "react";

import {db} from "../../db/data"

import { HighLightStyled } from "./UI/HighLightStyled";

const Header = ({className}) => {

    const dataHeader = db.find(element => element.id == 0)

    return(
        <header className={className}>
           
            <section className="second-header">

                <HighLightStyled />
            </section>
            {/* <section className="header-category-list">
                {dataHeader.category.map(category => (
                    <span className="category">{category}</span>
                ))}
            </section> */}
          
        </header>
    )
}

export default Header;