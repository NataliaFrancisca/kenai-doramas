import React from "react";

const Footer = ({className}) => {
    return(
        <footer className={className}>
            <h1>Kenai</h1>
           
            <ul>
                <li><img src="img/icons/instagram.svg" alt='instagram icon' /></li>
                <li><img src="img/icons/twitter.svg" alt="twitter icon" /></li>
                <li><img src="img/icons/facebook.svg" alt="facebook icon" /></li>
            </ul>
           
        </footer>
    )
}

export default Footer;