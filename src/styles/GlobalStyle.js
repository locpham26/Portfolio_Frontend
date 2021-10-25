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
        line-height: 1.4;
        background-color: #fffffe;
        font-family: "Source Sans Pro";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /* scroll-behavior: smooth; */
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
        /* scrollbar-color: #dddeee; */
        /* scroll-behavior: smooth; */
    }

    body::-webkit-scrollbar {
        width: 8px;
    }

    body::-webkit-scrollbar-track {
        background-color: transparent;
        border: 1px solid #dddddd;
        padding: 2px;
    }

    body::-webkit-scrollbar-thumb {
        background-color: #cccccc;
        border-radius: 12px;
    }

    p {
        margin: unset;
    }

    .section-title {
        color: var(--primary-text);
        text-align: center;
        font-size: 32px;
        margin-bottom: 32px;
        font-weight: 500;
    }
    
`;

export default GlobalStyle;
