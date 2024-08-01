import { css } from "@emotion/react";
import { BsList } from "react-icons/bs";
import { PiNotePencilDuotone } from "react-icons/pi";
import { MdDeleteOutline } from "react-icons/md";
import { hover } from "@testing-library/user-event/dist/hover";

export const container = css`
    display: flex;
    width: 1400px;
    height: 1000px;
    //border: 1px solid black;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: white;
    border: none;
    box-shadow: 10px 10px 10px #d6dee2f8;
`;

export const semi_container = css`
    box-sizing: border-box;
    display: flex;
    border: none;
    flex-direction: column;
    width: 100%;
    height: 98%;
    margin: 10px;
    background-color: white;
`;

export const box1 = css`
    display: flex;
    box-sizing: border-box;
    //border: 1px solid black;
    border: none;
    border-collapse: collapse;
    width: 100%;
    height: 80px;
    margin: 1px;
`;

export const box1_sub1 =  css`
    text-align: center;
    line-height: 78px;
    border: none;
    //border-right: 1px solid black;
    border-collapse: collapse;
    flex-grow: 1;
    display: flex;
    align-items: center;
`;

export const box1_sub2 =  css`
    text-align: center;
    line-height: 78px;
    border: none;
    //border-right: 1px solid black;
    flex-grow: 10;
`;

export const box1_sub3 =  css`
    text-align: center;
    line-height: 78px;
    border: none;
    //border-right: 1px solid black;
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
    div:nth-of-type(1){
        border-width: 1px;
        border-color: black;
    }
    div:nth-of-type(2){
        //border-width: 0 1px 0;
        color: #dbdbdb;
    }
    div:nth-of-type(3){
        border-width: 0px;
        color: #dbdbdb;
    }
`;

export const box2_sub1 = css`
    box-sizing: border-box;
    border: none;
    text-align: center;
    transform: translateY(1px);
    line-height: 26px;
    width: 70px;
    height: 30px;
    margin: 30px 0 0 0;
    padding: 2px;
    font-size: 13px;
    &:focus {
        border: 1px solid black;
        border-bottom: none;
        border-right: none;
    }
`;

export const box2_sub2 = css`
    box-sizing: border-box;
    //border: 1px solid black;
    border: none;
    text-align: center;
    transform: translateY(1px);
    line-height: 26px;
    width: 70px;
    height: 30px;
    margin: 30px 0 0 0;
    padding: 2px;
    font-size: 13px;
    cursor: pointer;
    &:active {
        border:1px solid black;
        border-bottom: none;
        color: black;
    }
    &:hover {
        background-color: #dbdbdb;
        padding: auto;
    }
    &:focus {
        
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
    font-size: 13px;
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
    width: 90px;
    height: 47px;
    border-radius: 30px;
    background-color: #166caa;
    color: white;
    font-size: 18px;
    &:active {
        background-color: #166caa;
    }
    &:hover {
        background-color: #166caa;
    }
`;

export const box3 = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    //border: none;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-y: auto;
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
`;

export const box3_sub1_button = css`
    box-sizing: border-box;
    width: 60px;
    height: 30px;
    margin: 10px 0;
    background-color: #166caa;
    color: white;
    border-radius: 20px;
    font-size: 11px;
    &:hover{
        background-color: #166caa;
        color: white;
    }
    &:active{
        background-color: #166caa;
        color: white;
    }
`;

export const box3_sub2 = css`
    box-sizing: border-box;
    border: none;
    border-left: 1px solid black;
    width: 100%;
    flex-grow: 1;
    background-color: #f5f7f7e5;
    button {
        display: none;
    }

`;

export const box3_sub2_header = css`
    box-sizing: border-box;
    border: 1px solid black;
    width: 100%;
    flex-grow: 1;
`;

export const box3_sub2_body = css`

`;

export const box3_body_checkbox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: none;
`;

export const box3_body_id = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: none;
`;

export const box3_body_date = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: none;
`;

export const box3_body_content = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: none;
`;

export const box3_body_manage = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: none;
`;

export const logo = {
    icon: <BsList />
};

export const up = {
    icon: <PiNotePencilDuotone />
}

export const del = {
    icon: <MdDeleteOutline />
}
