import React, { useState } from 'react';
import ReactModal from 'react-modal';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import axios from 'axios';

const ModifyModal = ({ modifyModalOpen, closeModal }) => {

    const [ modifyTodo, setModifyTodo ] = useState({
        user_id: 0,
        todo_id: 0,
        todo_name: ""
    });

    


    // 수정
    const handleModify = async (e) => {
        setModifyTodo(modifyTodo);
        const response = await axios.put(`http://localhost:8080/todo/${modifyTodo.todo_id}`, modifyTodo)
        closeModal();
    }

    const handleChange = (e) => {
        setModifyTodo(modifyTodo => {
            return {
                ...modifyTodo,
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
                isOpen={modifyModalOpen}
                onRequestClose={closeModal}>
                <div css={s.container}>
                    <h2>할 일 수정</h2>
                    <div>
                        <label htmlFor="">수정할 일</label>
                        <input type="text" onChange={handleChange} name="todo_name" value={modifyTodo.todo_name} />
                    </div>
                    <div>
                        <button onClick={handleModify}>수정</button>
                        <button onClick={closeModal}>취소</button>
                    </div>
                </div>    
            </ReactModal>
        </>
    );
}

export default ModifyModal;