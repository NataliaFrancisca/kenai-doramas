import styled from "styled-components";
import FooterComponent from ".";

export const Footer = styled(FooterComponent)`
    height: 10vh;
    background: black;
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
            margin-left: 40px;
            cursor: pointer;

            img{
                width: 20px;
                height: 20px;
                filter: blur(0.2px) brightness(1.1) hue-rotate(10deg) opacity(0.9) saturate(1.5) sepia(0.4);
                object-fit: contain;
            }

            :first-child{
                margin-left: 0rem;
            }

            :hover{
                filter: blur(0.2px) brightness(1.1) hue-rotate(10deg) opacity(0.9) saturate(1.5) sepia(0.4)
            }
        }

    }

    @media (max-width: 500px){
        justify-content: center;

        h1{
            display: none;
        }

        ul li:first-child{
            margin-left: 10px;
        }

        ul li{
            margin-left: 10px;
            margin-right: 10px;
        }
    }

`
