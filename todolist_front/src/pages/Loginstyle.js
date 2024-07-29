import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border: 1px solid #000000;
    border-radius: 30px;
    padding: 10px 10px;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    width: 500px;
    height: 500px;
    background-color: #fafafa;
`

export const header = css`
    size: 20px;
    color: #1b1b1b;
`;

export const mainCotainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const inputcontainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const inputCheck = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const inputText = css`
    display: flex;
    justify-content: space-between;
`;

export const submitButton = css`
    border-radius: 5px;
    width: 100%;
`;