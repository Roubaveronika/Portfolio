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
        scroll-behavior: smooth;
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
        transition: all 0.3s ease;

        &:hover {
            color: #41464b;
            text-decoration: underline;
            transform: translateY(-1px);
        }

        &:active {
            color: rgba(0, 0, 0, 0);
            transform: scale(0.97);
        }
    }

    button {
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            background-color: rgba(0, 0, 0, 0.2);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        &:active {
            transform: scale(0.97);
            box-shadow: none;
        }
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