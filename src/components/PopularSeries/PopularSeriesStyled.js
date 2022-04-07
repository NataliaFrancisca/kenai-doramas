import styled from "styled-components"
import PopularSeries from "./PopularSeries"

export const PopularSeriesStyled = styled(PopularSeries)`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Opens Sans', sans-serif;
    color: #F9F9F9;
    padding: 0 1rem;

    margin-top: 9rem;
    margin-bottom: 2rem;

    h1{
        font-family: 'Opens Sans', sans-serif;
        color: #F9F9F9;
        font-size: 1.4em;
    }

    h1:after{
        content: '';
        display: block;
        width: 61px;
        margin-top: 5px;
        height: 2px;
        background: #FFA634;
    }

    .list{
        /* display: flex; */        
        flex-wrap: wrap;
        margin-top: 1rem;

        display: grid;
        align-items: center;
        justify-content: center;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
    }

    @media only screen and (max-width: 700px) {
        margin-top: 4rem;
    }

`