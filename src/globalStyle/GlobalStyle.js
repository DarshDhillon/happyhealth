import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
    --mainPurple: #824998;
    --mainBlue: #009fe3;
    scrollbar-color: #ce92e6 transparent;
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

::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-thumb {
    background: #ce92e6;
    border-radius: 0.5rem;
}



`;

export default GlobalStyle;
