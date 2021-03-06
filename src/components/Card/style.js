import styled from "styled-components";
import CardComponent from "./index";

export const Card = styled(CardComponent)`
    width: 100%;
    height: 450px;
    border-radius: 3px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, rgba(24, 24, 24, 0) 0%, rgba(24, 24, 24, .8) 80.79%);

    .background-image{
        position: absolute;
        object-fit: cover;
        height: 100%;
        width: 100%;
        z-index: -1;
        size: (min-width: 650px) 50vw, 100vw;
    }

    .initial-details{
        padding: 20px;
        display: flex;
        flex-direction: column;
        height: 100%;
        align-items: flex-start;
        justify-content: flex-end;
    }

    h2{
        font-family: 'Opens Sans', sans-serif;
        font-weight: 600;
        font-size: 1.2em;  
        margin: 10px 0; 

        @media only screen and (max-width: 650px) {
            font-size: 1em; 
        }
    }

    span{
        color: #FFA634;
        font-family: 'Open Sans';
        font-weight: 600;
        padding: 4px 8px;
        background-color: #181818;
        border-radius: 0px 8px;
        width: fit-content;
        margin: 10px 0;
    }

    &:hover .details-serie{
        transform: translateY(0);
    }

    .details-serie{
        background-color: #fff;
        padding: 2rem;
        position: absolute;
        left: 0;
        bottom: 0;
        color: #181818;
        min-height: 60%;
        height: auto;
        transform: translateY(101%);
        transition: transform 0.3s ease-in;
        background: rgba(230,230,230,1);

        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        p{
            font-size: .9em;
            text-align: justify;
            margin-top: 10px;
        }

        .list-category{
            display: flex;
            flex-wrap: wrap;
        }

        span{
            margin: .5rem 0;
            margin-right: .5rem;
        }

        span:last-child{
            margin-left: 0rem;
        }

        button{
            width: 100%;
            margin-top: 1rem;
        }
    }


    @media only screen and (min-width: 1100px) {
        height: 80vh;
    }

    @media only screen and (max-width: 450px) {
        height: 600px;
    }

`
