import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
    ${variables};
    html {
        box-sizing: border-box;
        width: 100%;
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    // Scroll bar

    html {
        scrollbar-width: thin;
        scrollbar-color: var(--secondary-text);
    }

    body::-webkit-scrollbar {
        width: 12px;
    }

    body::-webkit-scrollbar-track {
        background-color: transparent
    }

    body::-webkit-scrollbar-thumb {
        background-color: var(--primary-text);
        border: 3px solid transparent;
        border-radius: 12px;
    }
    
`;

export default GlobalStyle;
