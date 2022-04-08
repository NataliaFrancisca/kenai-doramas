import styled from "styled-components";
import Card from "./Card";

export const CardStyled = styled(Card)`
    width: 100%;
    min-height: 500px;
    background-image: linear-gradient(180deg, rgba(24, 24, 24, 0) 0%, rgba(24, 24, 24, .8) 80.79%), ${props => `url(${props.imageBackground})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 3px;

    display: grid;
    align-content: flex-end;
    grid-template-columns: 1f;
    grid-template-rows: 10% 10% 10%;
    gap: .5rem;
    align-items: center;
    padding: 1rem;

    position: relative;
    overflow: hidden;

    h2{
        font-family: 'Opens Sans', sans-serif;
        font-weight: 600;
        font-size: 1.2em;   
    }

    span{
        color: #FFA634;
        font-family: 'Open Sans';
        font-weight: 600;
        padding: 4px 8px;
        background-color: #181818;
        border-radius: 0px 8px;
        width: fit-content;
    }

    .details-serie{
        background-color: #fff;
        padding: 2rem;
        position: absolute;
        left: 0;
        bottom: 0;
        color: black;
        height: 60%;
        transform: translateY(100%);
        transition: transform 0.3s ease-in;
        background: rgba(230,230,230,1);

        p{
            font-size: .9em;
            text-align: justify;
            margin-top: 1rem;
        }

        span{
            margin-right: .5rem;
        }

        span:last-child{
            margin-left: 0rem;
        }
    }

    &:hover .details-serie{
        transform: translateY(0);
    }

    @media only screen and (max-width: 750px) {
        height: 600px;
    }

    @media only screen and (max-width: 550px) {
        height: 700px;
    }

`
