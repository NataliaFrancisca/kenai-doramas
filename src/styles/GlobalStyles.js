import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    body{
        height: 100vh;
        width: 100vw;
        background-color: white;
    }
`