import styled from "styled-components"
import PopularSeries from "./PopularSeries"

export const PopularSeriesStyled = styled(PopularSeries)`
    display: flex;
    flex-direction: column;
    font-family: 'Opens Sans', sans-serif;
    color: #F9F9F9;

    margin: 100px 0;

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

`

export const Carrousel = styled.section`
    display: flex;
    justify-content: space-between;

    position: relative;
    scroll-behavior: smooth;
    transition: 250ms all;
    
    #back-group, #next-group{
        color: orange;
        position: absolute;
        top: 0px;
        z-index: 1;
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
        width: 100%;
        display: grid;
        grid-template-columns: repeat(${props => props.numberColumns},100%);
        overflow: hidden;
        scroll-behavior: smooth;
        margin: 20px 0;
    }

    #grid-section .section-group-shows{
        width: 100%;

        display: grid;
        grid-template-columns: repeat(${props => props.numberCards}, 1fr);
        gap: 20px;

        transition: transform .8s ease-in;
    }

    .section-group-shows:nth-child(-n+${props => props.changeGrid}){
        transform: ${props => `translateX(-${props.changeGrid}00%)`}
    }

    #section${props => props.changeGrid} {
        transform: ${props => `translateX(-${props.changeGrid}00%)`}
    }

    .section-group-shows:nth-child(n+${props => props.changeGrid + 1}){
        transform: ${props => `translateX(-${props.changeGrid}00%)`}
    }

`