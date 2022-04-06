import React from "react";

const Footer = ({className}) => {
    return(
        <footer className={className}>

            <h1>Kenai</h1>

            <nav>
                <ul>
                    <li><img src="img/icons/instagram.png"></img></li>
                    <li><img src="img/icons/twitter.png"></img></li>
                    <li><img src="img/icons/facebook.png"></img></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;