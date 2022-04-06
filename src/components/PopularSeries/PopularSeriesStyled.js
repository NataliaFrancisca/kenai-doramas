import styled from "styled-components"
import PopularSeries from "./PopularSeries"

export const PopularSeriesStyled = styled(PopularSeries)`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Opens Sans', sans-serif;
    color: #F9F9F9;
    padding: 0 1rem;

    margin-top: 5.6rem;
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
        display: flex;
        justify-content: space-between;
    }

    
    .card{
        width: 300px;
        height: 440px;
        /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), ${props => `url(${props.backgroundImage})`}; */
        /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)); */
    } 

 

`