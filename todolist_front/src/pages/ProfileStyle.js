import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border: 1px solid #000000;
    padding: 10px 10px;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    width: 500px;
    height: 500px;
    background-color: #fafafa;
`
export const header = css`
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    margin-bottom: 20px;
`

export const box1 = css`
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    align-items: center;
    width: 360px;
    padding: 10px;
    gap: 5px;
    justify-content: center;
    align-items: center;
`
export const labelsize = css`
    text-align: right;
    width: 70px;
`;

export const button1 = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 300px;
    padding: 12px 24px;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
`;

export const button2 = css`
    text-align: center;
    height: 40px;
    width: 100px;
`