import React from "react";

const Footer = ({className}) => {
    return(
        <footer className={className}>
            <h1>Kenai</h1>
            <nav>
                <ul>
                    <li><img src="img/icons/instagram.svg"></img></li>
                    <li><img src="img/icons/twitter.svg"></img></li>
                    <li><img src="img/icons/facebook.svg"></img></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;