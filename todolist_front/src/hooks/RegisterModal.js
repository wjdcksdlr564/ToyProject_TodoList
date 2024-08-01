import { css } from '@emotion/react';
import axios from 'axios';
import React, { useState } from 'react';
import ReactModal from 'react-modal';

const RegisterModal = () => {

    const [ isModalOpen, setModalOpen ] = useState(false);

    const [ registerTodo, setRegisterTodo ] = useState({
        user_id: 0,
        todo_name: ""
    });

    const closeModal = () => {
        setModalOpen(false);
    }

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
            isOpen={true}>
                <h2>할 일 수정</h2>
                <div>
                    <label htmlFor="">수정할 일</label>
                    <input type="text" onChange={handleChange} name="todo_name" value={registerTodo.todo_name} />
                </div>
                <div>
                    <button onClick={handleRegister}>수정</button>
                    <button onClick={closeModal}>취소</button>
                </div>
            </ReactModal>
        </>
    );
}

export default RegisterModal;