import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
    --mainPurple: #824998;
    --mainBlue: #009fe3;
}

html {
    scroll-behavior: smooth;
}

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;

}

`;

export default GlobalStyle;
