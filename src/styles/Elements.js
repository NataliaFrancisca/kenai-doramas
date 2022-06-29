import styled from "styled-components";

export const Button = styled.button`
    height: 50px;
    padding: .2rem;
    background-color: #FFA634;
    display: flex;
    font-size: 1em;
    border-radius: 4px;
    font-weight: 600;
    transition: filter 0.2s;
    color: #000000;
    cursor: pointer;

    a{
        text-decoration: none;
        color: #181818;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &:hover{
        filter: brightness(0.9);
    }
`