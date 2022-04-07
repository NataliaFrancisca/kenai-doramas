import styled from "styled-components";

export const PageStyled = styled.main`
    background-color: black;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)),url(img/pousando-no-amor.jpg);
    background-repeat: no-repeat;
    background-size: contain;

    @media only screen and (max-width: 1100px) {
        background-size: cover;
        background-position: center;
    }
`