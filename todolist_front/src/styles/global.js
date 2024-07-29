import { css } from "@emotion/react";

export const reset = css`
    html, body, #root {
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: #fafafa;
        font-size: 16px;
        justify-content: center;
        align-content: center;
    }

    button {
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        padding: 5px 10px;
        border-radius: 30px;
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