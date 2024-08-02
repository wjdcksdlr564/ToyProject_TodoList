import { css } from "@emotion/react";

export const container =css`
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    h2 {
        padding-top: 40px;
    }
`;

export const container_sub1 = css`
    input {
        border-width: 0 0 1px;
        margin-bottom: 10px;
        border-color: black;
        border-radius: 0%;
    }
`;


export const container_sub2 = css`
    button { 
        border-radius: 30px;
        background-color: #166caa;
        color: white;
        font-size:12px;
        height: 30px;
        margin: 5px;
        margin-bottom: 50px;
    }
`;