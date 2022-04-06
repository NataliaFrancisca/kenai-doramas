import styled from "styled-components";

import Footer from "./Footer";

export const FooterStyled = styled(Footer)`
    width: 100vw;
    height: 10vh;
    background: black;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        font-family: 'Mukta', sans-serif;
        font-weight: 700;
        color: #F9F9F9;
    }

    ul{
        display: flex;
        list-style: none;

        li{
            margin: 0 1.5rem;
        }

        li img{
            width: 20px;
            height: 20px;
            object-fit: contain;
        }

        li:hover{
            filter: drop-shadow(16px 16px 20px yellow) invert(55%);
        }
    }

`