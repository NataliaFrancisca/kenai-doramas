import styled from "styled-components"
import MenuComponent from "./index";

export const Menu = styled(MenuComponent)`
    height: 10vh;
    display: flex;
    margin-top: 1rem;

    nav{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2{
            background: linear-gradient(264.26deg, #FF267A 0%, #FFA634 101.03%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-family: 'Mukta', sans-serif;
            font-size: 2.4em;
        }

        ul{
            display: flex;
            align-items: center;

            li{
                list-style: none;
                margin-left: 60px;
                display: flex;
                color: #F9F9F9;
                font-family: 'Open Sans';
                font-weight: 600;
                font-size: 18px;
                transition: color .2s ease-in;
                cursor: pointer;

                &:first-child{
                    margin-left: 0rem;
                }

                &:hover{
                    color: #FFA634;
                }

                & span{
                    font-size: 24px;
                }
            }
        }  
    }

    .menu-hamburger{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    /* BOTÃO MENU HAMBURGUER */
    .menu {
        background-color: transparent;
        width: 60px;
        height: 60px;
        border-radius: 5px;
        cursor: pointer;
        display: none;
    }
    
    .hamburger {
        position: relative;
        display: block;
        background: #F9F9F9;
        width: 30px;
        height: 2px;
        top: 29px;
        left: 15px;
        transition: 0.5s ease-in-out;
    }

    .hamburger:before{
        background: #F9F9F9;
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        transition: 0.4s ease-in-out;
        top: -5px;
    }

    .hamburger:after {
        background: #F9F9F9;
        content: '';
        display: block;
        width: 50%;
        height: 100%;
        right: 0;
        position: absolute;
        transition: 0.4s ease-in-out;
        bottom: -5px;
    }

    input {
        display: none;
    }

    input:checked ~ label .hamburger {
        transform: rotate(45deg);
    }   

    input:checked ~ label .hamburger:before {
        transform: rotate(90deg);
        top: 0;
    }
    
    input:checked ~ label .hamburger:after {
        transform: rotate(90deg);
        width: 0%;
        bottom: 0;
    }

    input:checked ~ .menu-elements{
        right: 0;
    }

    @media (max-width: 600px){
    
        label{
            z-index: 4;
        }

        .menu-elements a:hover{
            color: rgb(214, 161, 214);
        }

        .menu-elements{
            width: 60%;
            height: 100%;
            background-color: rgba(10,10,10,.9);
            position: fixed;
            right: -60%;
            top: 0;
        
            transition: right cubic-bezier(1,0,0,1) .8s;
            
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-evenly;

            padding-top: 20px;
            z-index: 2;
        
            li{
                margin: 0%;
            }
        }

        .menu{
            display: flex;
            height: 60px;
            width: 60px;
        }
}


`


