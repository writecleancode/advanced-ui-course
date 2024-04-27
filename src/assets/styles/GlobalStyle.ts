import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-size: 62.5%;
    scroll-behavior: smooth;
}

body {
    font-size: 1.6rem;
    line-height: 1.5;
    max-width: 100%;
    overflow-x: hidden;
    font-family: 'IBM Plex Mono', monospace;
}

img {
    vertical-align: middle;
}

a,
button, select {
    cursor: pointer;
    font-family: inherit;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    color: inherit;
}

input {
    font-family: inherit;
}

table {
    border-spacing: 0;
    border-collapse: collapse;
}
`;
