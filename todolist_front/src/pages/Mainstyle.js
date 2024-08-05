import { css } from "@emotion/react";
import { BsList } from "react-icons/bs";
import { PiNotePencilDuotone } from "react-icons/pi";
import { MdDeleteOutline } from "react-icons/md";
import { hover } from "@testing-library/user-event/dist/hover";
import { MdRadioButtonChecked } from "react-icons/md";
import { MdRadioButtonUnchecked } from "react-icons/md";

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
    padding-left: 10px;
    flex-grow: 1;
    display: flex;
    align-items: center;
`;

export const box1_sub2 =  css`
    margin-left: 150px;
    text-align: center;
    line-height: 78px;
    border: none;
    //border-right: 1px solid black;
    flex-grow: 10;
    h1 {
        font-size: 40px;
    }
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

    label:hover {
        font-weight: 800;
        cursor: pointer;
    }
`;

export const box2 = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border: none;
    padding: 10px;
    width: 100%;
    height: 50px;
`;

export const box2_sub = css`
    display: flex;
    justify-content: space-between;
    width: 300px;

    p {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        width: 100px;
        height: 60px;
        font-size: 16px;
        line-height: 26px;
        transform: translateY(1px);
        cursor: pointer;

        &:hover {
        font-size: 18px;
        background-color: #8ebfe3;
        padding: auto;
        }

        &:active {
        border:1px solid #8ebfe3;
        border-bottom: none;
        color: black;
        }

        &:focus {
            border: 1px solid black;
            border-bottom: none;
            border-right: none;
        }
    }
`;

export const box2_sub1 = css`
    border-bottom: 1px solid black;
    font-weight: 700;
`;

export const box2_sub_1 = css`
    margin-right: 20px;
`;

export const box2_sub4_button = css`
    width: 90px;
    height: 45px;
    border-radius: 30px;
    background-color: #5da8dd;
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
    border: none;
    width: 100%;
    //flex-grow: 1;
`;

export const box3_sub1 = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    height: 60px;
    
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
    //border-top: 1px solid black;
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
    //border: 1px solid black;
    border: none;
    width: 250px;
    height: 30px;
    margin: 10px;   
`;

export const box3_sub1_button = css`
    box-sizing: border-box;
    width: 60px;
    height: 30px;
    margin: 10px 0;
    background-color: #5da8dd;
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
export const tableCotainer = css`
    padding: 10px;
`;

export const box3_sub2 = css`
    box-sizing: border-box;
    border: none;
    border-top: 3px solid #166caa;
    width: 100%;
    height: 100%;
    background-color: white;
    button {
        display: none;
    }

`;

export const tableHeader = css`
    width: 100%;
    height: 40px;
`;

export const tableTr = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    border-bottom: 3px solid #166caa;
    th {
        border: none
    }
    th:nth-of-type(1){
        width: 100px;
    }
    th:nth-of-type(2){
        width: 100px;
    }
    th:nth-of-type(3){
        width: 200px;
    }
    th:nth-of-type(4){
        flex-grow: 1;
        width: 400px;
    }
    th:nth-of-type(5){
        width: 200px;
    }
`;

export const completedSelectedItem = css`
    &:hover {
        text-decoration: line-through;
    }
`;

export const tableBody = css`
    position: relative;
    margin-top: 10px;
    width: 100%;
    height: 700px;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }

    tr {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 40px;
        border: none;

        &:hover {
            background-color: #a9d1ed;;
        }

        td {
        border: none
        }
        td:nth-of-type(1){
            width: 100px;
        }
        td:nth-of-type(2){
            width: 100px;
        }
        td:nth-of-type(3){
            width: 200px;
        }
        td:nth-of-type(4){
            flex-grow: 1;
            width: 400px;
        }
        td:nth-of-type(5){
            width: 200px;
        }
    }
`;

export const tableItem = css`
    &:hover {
        font-weight: 800;
    }
    input {
        display: none;
    }
`;

export const selectedItem = css`
    &:hover {
        font-weight: 800;
    }
    input {
        display: none;
    }
    text-decoration: line-through;
    color: #ea5454;
`;

export const managementButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: none;
    border-bottom: 1px solid black;

    label{
        cursor: pointer;
    }
`;

export const icon = css`
    size: 25px;

    &:hover {
        size: 30px;
    }
`;

export const emptyRetulse = css`
    position: absolute;
    right: 43%;
    top: 50%;
`;