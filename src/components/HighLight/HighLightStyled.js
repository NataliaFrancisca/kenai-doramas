import styled from "styled-components";
import HighLight from "./HighLight";

export const HighLightStyled = styled(HighLight)`
    width: 50%;
    display: flex;
    flex-direction: column;
    font-family: 'Opens Sans', sans-serif;
    color: #F9F9F9;
    margin-top: 4rem;
    padding: 0 1rem;

        .header-category-list{
            padding-left: .3rem;
            margin: .5rem 0;

            span{
                margin: 1rem;
                color: #FFA634;
                font-family: 'Open Sans';
                font-weight: 600;
                padding: 4px 8px;
                background-color: #181818;
                border-radius: 0px 8px;
            }

            span:nth-child(1){
                margin-left: 0rem;
            }
        }

        .stars{
            display: flex;
            margin: .5rem 0;
        }

        .stars img{
            height: 30px;
            width: 30px;
        }

        h1{
            font-weight: 600;
            font-size: 3em;
            margin: .5rem 0;
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

        @media only screen and (max-width: 800px) {
            width: 100%;
        }
`