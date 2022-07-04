import styled from "styled-components";
import HighLightComponent from "./index";

export const HighLight = styled(HighLightComponent)`
    width: 50%;
    display: flex;
    flex-direction: column;
    font-family: 'Opens Sans', sans-serif;
    color: #F9F9F9;
    margin: 10px 0;
   
    .category{
        margin: 25px 0;
        color: #FFA634;
        font-family: 'Open Sans';
        font-weight: 600;
        padding: 4px 8px;
        background-color: #181818;
        border-radius: 0px 8px;
        width: min-content;

        &:nth-child(1){
            margin-left: 0rem;
        }
    }
        
    .stars{
        display: flex;
        margin-bottom: 20px;

        img{
            height: 30px;
            width: 30px;
        }
    }

    h1{
        font-weight: 600;
        font-size: 3em;
        margin-bottom: 20px;
    }

    p{
        font-weight: 300;
        font-size: 18px;
        text-align: justify;
        line-height: 28px;
    }

    button{
        width: 286px;
        margin-top: 40px;
    }

    @media only screen and (max-width: 900px) {
        width: 100%;
    }

    @media only screen and (max-width: 500px) {
        h1{
            font-size: 40px;
        }
    }
`