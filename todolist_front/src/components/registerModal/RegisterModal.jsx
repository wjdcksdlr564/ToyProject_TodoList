import { css } from '@emotion/react';
import axios from 'axios';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

const RegisterModal = ({ registerModalOpen, closeModal }) => {

    const [ openState, setOpenState ] = useState(false);

    const [ registerTodo, setRegisterTodo ] = useState({
        user_id: 0,
        todo_name: ""
    });

    //등록
    const handleRegister = async (e) => {
        setRegisterTodo(registerTodo);
        const response = await axios.post(`http://localhost:8080/todo/${registerTodo.user_id}`, registerTodo)
        closeModal();
    }

    const handleChange = (e) => {
        setRegisterTodo(registerTodo => {
            return {
                ...registerTodo,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <>
        <ReactModal
            style={{
                content: {
                    boxSizing: 'border-box',
                    transform: 'translate(-50%, -50%)',
                    top: '50%',
                    left: '50%',
                    padding: '20px',
                    width: '400px',
                    height: '400px',
                    backgroundColor: '#fafafa',
                }
            }}
            isOpen={registerModalOpen}
            onRequestClose={closeModal}>
            <div css={s.container}>
                <h2>할 일 등록</h2>
                <div>
                    <label htmlFor="">등록할 일</label>
                    <input type="text" onChange={handleChange} name="todo_name" value={registerTodo.todo_name} />
                </div>
                <div>
                    <button onClick={handleRegister}>등록</button>
                    <button onClick={closeModal}>취소</button>
                </div>
            </div>    
        </ReactModal>
        </>    
        
    );
}

export default RegisterModal;