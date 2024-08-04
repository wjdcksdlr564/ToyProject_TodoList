import { css } from "@emotion/react";

export const global = css`
    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        //background-color: #fafafa;
        font-size: 16px;
        color: #1b1b1b;
    } 

    #root {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        //background-color: #fafafa;
        background-color: #5da8dd;
    }

    h1, h2, h3, h4 {
        user-select: none;
    }

    label {
        justify-content: center;
        align-items: center;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }

    tr, td {
        border: none;
    }

    th, td {
        text-align: center;
        border: 1px solid black;
        border-left: none;
        border-collapse: collapse;
    }

    p {
        margin: 0;
        padding: 0;
    }

    button {
        margin: 0;
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        padding: 5px 10px;
        background-color: #ffffff;
        cursor: pointer;
        &:hover {
            background-color: #fafafa;
        }
        &:active {
            background-color: #eeeeee;
        }
    }
    
    input[type="text"],
    input[type="password"] {
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        outline: none;
        padding: 5px 10px;
    }
`;