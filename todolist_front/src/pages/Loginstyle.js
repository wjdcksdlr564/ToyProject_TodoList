import { css } from "@emotion/react";


export const container = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    //border: 1px solid #dbdbdb;
    border-radius: 30px;
    padding: 10px 10px;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    width: 500px;
    height: 500px;
    background-color: #fafafa;
    //background-color: white;
`

export const header = css`
    size: 20px;
    color: #1b1b1b;
    h1 {
        font-size: 40px;
        font-weight: 650;
    }
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
    input {
        border-radius: 0%;
        border-width: 0 0 1px;
        border-color: black;
        background-color: #fafafa;
        width: 300px;
        height: 35px;
    }

    input::placeholder {
        font-size: 16px;
        color: black;
    }
`;

export const inputCheck = css`
    display: flex;
    justify-content: center;
    align-items: center;
    color: red
`;


export const inputText = css`
    display: flex;
    justify-content: space-between;
`;

export const submitButton = css`
    border-radius: 5px;
    width: 100%;
    border-radius: 30px;
    background-color: #166caa;
    color: white;
    height: 35px;

    &:active{
        background-color: #166caa;
    }

    &:hover{
        background-color: #166caa;
    }

`;
