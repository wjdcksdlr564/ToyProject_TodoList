import { css } from "@emotion/react";

export const container = css`
    display: flex;
    width: 1400px;
    height: 1000px;
    border: 1px solid black;
    box-sizing: border-box;
`;

export const semi_container = css`
    box-sizing: border-box;
    display: flex;
    border: none;
    flex-direction: column;
    width: 100%;
    height: 98%;
    margin: 10px;
`;

export const box1 = css`
    display: flex;
    box-sizing: border-box;
    border: 1px solid black;
    border-collapse: collapse;
    width: 100%;
    height: 80px;
    margin: 1px;
`;

export const box1_sub1 =  css`
    text-align: center;
    line-height: 78px;
    border: none;
    border-right: 1px solid black;
    border-collapse: collapse;
    flex-grow: 1;
`;

export const box1_sub2 =  css`
    text-align: center;
    line-height: 78px;
    border: none;
    border-right: 1px solid black;
    flex-grow: 10;
`;

export const box1_sub3 =  css`
    text-align: center;
    line-height: 78px;
    border: none;
    border-right: 1px solid black;
    flex-grow: 1;
`;

export const box1_sub4 =  css`   
    flex-grow: 1;
    text-align: center;
    line-height: 78px;
`;

export const box2 = css`
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    border: none;
    width: 100%;
    height: 60px;
    margin: 0;
    padding: 0;
`;

export const box2_sub1 = css`
    box-sizing: border-box;
    border: 1px solid black;
    border-bottom: none;
    border-right: none;
    text-align: center;
    transform: translateY(1px);
    line-height: 26px;
    width: 70px;
    height: 30px;
    margin: 30px 0 0 0;
    padding: 2px;
`;

export const box2_sub2 = css`
    box-sizing: border-box;
    border: 1px solid black;
    border-right: none;
    text-align: center;
    transform: translateY(1px);
    line-height: 26px;
    width: 70px;
    height: 30px;
    margin: 30px 0 0 0;
    padding: 2px;
    cursor: pointer;
    &:active {
        border-bottom: none;
    }
    &:hover {
        background-color: #dbdbdb;
        padding: auto;
    }
`;

export const box2_sub3 = css`
    box-sizing: border-box;
    border: 1px solid black;
    text-align: center;
    transform: translateY(1px);
    line-height: 26px;
    width: 70px;
    height: 30px;
    margin: 30px 0 0 0;
    padding: 2px;
    cursor: pointer;
    &:active {
        border-bottom: none;
    }
    &:hover {
        background-color: #dbdbdb;
        padding: auto;
    }
`;

export const box2_sub4 = css`
    display: flex;
    justify-content: end;
    box-sizing: border-box;
    flex-grow: 1;
    height: 45px;
    margin: 7.5px 0;
`;

export const box2_sub4_button = css`
    box-sizing: border-box;
    border: 1px soild black;
    width: 200px;
    height: 100%;
`;

export const box3 = css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    box-sizing: border-box;
    border: none;
    width: 100%;
    margin: 0;
    padding: 0;
`;

export const box3_sub1 = css`
    box-sizing: border-box;
    border: 1px solid black;
    border-bottom: none;
    border-top: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 80px;
`;

export const box3_sub1_span1 = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: none;
    width: 209px;
    height:100%;
    margin: 10px 0px 10px;
`;

export const box3_sub1_span2 = css`
    box-sizing: border-box;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-top: 1px solid black;
    flex-grow: 1;
    height: 100%;
    margin: 10px 0px 10px;
`;

export const box3_sub1_date = css`
    box-sizing: border-box;
    border: 1px solid black;
    width: 200px;
    height: 30px;
    margin: 10px;
`;

export const box3_sub1_input = css`
    box-sizing: border-box;
    border: 1px solid black;
    width: 250px;
    height: 30px;
    margin: 10px;
    margin-left: 30px;
`;

export const box3_sub1_button = css`
    box-sizing: border-box;
    border: 1px solid black;
    width: 50px;
    height: 30px;
    margin: 10px 0;
    margin-left: 30px;
`;

export const box3_sub2 = css`
    box-sizing: border-box;
    border: none;
    border-left: 1px solid black;
    width: 100%;
    flex-grow: 1;
`;

export const box3_sub2_header = css`
    box-sizing: border-box;
    border: 1px solid black;
    width: 100%;
    flex-grow: 1;
`;

export const b0x3_sub2_body = css`

`;

export const resultButton = css`

`;