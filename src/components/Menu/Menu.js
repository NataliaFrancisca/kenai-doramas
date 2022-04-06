import React from "react";

const Menu = ({className}) => {
    return(
        <menu className={className}>
            <nav>
                <ul className="menu-title">
                    <li>Kenai</li>
                </ul>
                <ul className="menu-elements">
                    <li><img src="img/icons/search.png"></img></li>
                    <li>Início</li>
                    <li>Minha Lista</li>
                    <li><img src="img/icons/bell.png"></img></li>
                    <li><img src="img/icons/user.png"></img></li>
                </ul>
            </nav>

        </menu>
    )
}

export default Menu;