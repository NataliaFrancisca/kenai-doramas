import styled from "styled-components";
import HighLight from "./HighLight";

export const HighLightStyled = styled(HighLight)`
    width: 50%;
    margin: 3rem;
    display: flex;
    flex-direction: column;
    font-family: 'Opens Sans', sans-serif;
    color: #F9F9F9;


        .header-category-list{
            display: flex;

            span{
                margin: 0 1rem;
                color: #FFA634;
                font-family: 'Open Sans';
                font-weight: 600;
            }

            span:nth-child(1){
                margin-left: 0rem;
            }
        }

        .stars{
            display: flex;
            margin-top: 1.4rem;
        }

        .stars img{
            height: 20px;
            width: 20px;
        }

        h1{
            font-weight: 600;
            font-size: 3em;
            margin: 1.5rem 0;
        }

        p{
            font-weight: 400;
            font-size: 1.2em;
            text-align: justify;
        }

        button{
            width: 286px;
            background-color: #FFA634;
            height: 56px;

            color: black;
            font-weight: 600;
            font-size: 1em;

            margin-top: 2rem;
            border-radius: 4px;

        }
`