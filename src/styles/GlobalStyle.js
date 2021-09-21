import { createGlobalStyle } from "styled-components";
import variables from "./variables";
import fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
    ${variables};
    ${fonts};
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
        line-height: 1.25;
        font-family: var(--font-sans);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #root {
        min-height: 100vh;
        display: grid;
        grid-template-rows: 1fr auto;
        grid-template-columns: 100%;
    }

    // Scroll bar

    html {
        scrollbar-width: thin;
        scrollbar-color: var(--secondary-text);
    }

    body::-webkit-scrollbar {
        width: 8px;
    }

    body::-webkit-scrollbar-track {
        background-color: transparent
    }

    body::-webkit-scrollbar-thumb {
        background-color: var(--secondary-text);
        border: 3px solid transparent;
        border-radius: 12px;
    }

    .section-title {
        color: var(--primary-text);
        font-size: 32px;
        margin-bottom: 64px;
    }
    
`;

export default GlobalStyle;
