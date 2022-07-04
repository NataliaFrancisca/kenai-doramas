import React from "react";

const MenuComponent = ({className}) => {
    return(
        <menu className={className}>
            <nav>
                <h2>Kenai</h2>

                <input id="menu-hamburger" type="checkbox" />
                <label htmlFor="menu-hamburger">
                    <div className="menu">
                        <span className="hamburger" />
                    </div>
                </label>

                <ul className="menu-elements">
                    <li><span className="material-symbols-outlined">search</span></li>
                    <li>Home</li>
                    <li>My List</li>
                    <li><span className="material-symbols-outlined">notifications</span></li>
                    <li><span className="material-symbols-outlined">person</span></li>
                </ul>
            </nav>

        </menu>
    )
}

export default MenuComponent;