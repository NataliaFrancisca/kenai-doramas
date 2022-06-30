import styled from "styled-components"
import PopularSeries from "./PopularSeries"

export const PopularSeriesStyled = styled(PopularSeries)`
    display: flex;
    flex-direction: column;
    font-family: 'Opens Sans', sans-serif;
    color: #F9F9F9;

    margin-top: 9rem;
    margin-bottom: 2rem;

    position: relative;

    h1{
        font-family: 'Opens Sans', sans-serif;
        color: #F9F9F9;
        font-weight: 600;
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
        /* margin-top: 1rem;

        display: grid;
        align-items: center;
        justify-content: center;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 40px; */
    }

`

export const Carrousel = styled.section`
    display: flex;
    justify-content: space-between;

    min-height: 600px;
    height: auto;

    position: relative;
    scroll-behavior: smooth;
    transition: 250ms all;
    

    #back-group, #next-group{
        color: orange;
        position: absolute;
        top: 0px;
        z-index: 111;
        height: 100%;
        width: 60px;
        cursor: pointer;
    }
    
    #back-group:disabled span,
    #next-group:disabled span{
        color: grey;
    }

    #back-group{
        left: 0px;
        background: linear-gradient(-90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.8) 130%);
    }

    #next-group{
        right: 0px;
        background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.8) 130%);
    }

    #grid-section{
        margin-top: 1rem;

        display: grid;
        align-items: center;
        justify-content: start;
      
        width: 100%;
        gap: 30px;
        grid-template-columns: repeat(${props => props.numberColumns}, 1fr);
        /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
    }
`