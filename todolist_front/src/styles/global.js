import { css } from "@emotion/react";

export const global = css`
    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background-color: #fafafa;
    } 

    #root {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background-color: #fafafa;
    }

    label {
        justify-content: center;
        align-items: center;
    }

    table {
        border: none;
        border-collapse: collapse;
    }

    th, td {
        border: 1px solid black;
        border-left: none;
        border-collapse: collapse;
    }

`;