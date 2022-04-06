import styled from "styled-components"
import Menu from "./Menu"

export const MenuStyled = styled(Menu)`
    width: 100vw;
    height: auto;
    padding: 1rem;

    display: flex;

    nav{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        ul{
            display: flex;
            align-self: center;
            align-items: center;

            li{
                list-style: none;
            }
        }

        .menu-title li{
            background: linear-gradient(264.26deg, #FF267A 0%, #FFA634 101.03%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-family: 'Mukta', sans-serif;
            font-size: 2.4em;
        }

        .menu-elements li{
            margin: 0 1.8rem;
            display: flex;
            align-self: center;
            color: #F9F9F9;
            font-family: 'Open Sans';
            font-weight: 600;
            font-size: 18px;
        }

        .menu-elements li img{
            width: 20px;
            height: 20px;
            object-fit: contain;
        }

        .menu-elements li:hover {
            filter: drop-shadow(16px 16px 20px yellow) invert(55%);
        }
    }

`