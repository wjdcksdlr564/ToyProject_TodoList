import { css } from "@emotion/react";

export const global = css`
    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: #fafafa;
        font-size: 16px;
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

    tr {
        height: 30px;
    }

    th, td {
        border: 1px solid black;
        border-left: none;
        border-collapse: collapse;
    }

    button {
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