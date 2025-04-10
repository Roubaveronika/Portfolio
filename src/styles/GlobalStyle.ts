import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.ts";


export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    * {
        overflow-x: hidden;
    }
    body {
        
        width: 100%;
        padding: 0;
        margin: 0;
        font-family: "Epilogue", 'Roboto', 'Oxygen', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
    button {
        background-color: unset;
        border: none;
    }
    section:nth-of-type(even) {
    background-color: ${theme.colors.primaryBg};
    }
    section:nth-of-type(odd) {
        background-color: ${theme.colors.secondaryBg};
    }
`