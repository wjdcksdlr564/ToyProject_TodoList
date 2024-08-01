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
    text-align: center;
    margin-bottom: 20px;
`
export const inputbox = css`
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
    width: 80px;
`

export const button = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 30px;
`

export const inbutton = css`
    border-radius: 5px;
    height: 60px;
    width: 200px;
`