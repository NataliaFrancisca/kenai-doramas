import styled from "styled-components";

export const PageStyled = styled.main`
    background-color: black;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(180deg,rgba(1,1,1,0.6) 0%,rgba(1,1,0,2.8) 60%),url(img/pousando-no-amor.jpg);
    background-repeat: no-repeat;
    background-position: top;
    background-size: initial;
    padding: 0 20px;

    @media only screen and (max-width: 900px) {
        background-image: linear-gradient(180deg,rgba(1,1,1,0.6) 0%,rgba(1,1,0,2.8) 25%),url(img/pousando-no-amor.jpg);
    }
    
`