import { css } from '@emotion/react';
import React, { useState } from 'react';
import ReactModal from 'react-modal';

const ModifyModal = () => {

    const [ isModalOpen, setModalOpen ] = useState(false);

    const [ modifyTodo, setModifyTodo ] = useState({
        user_id: 0,
        todo_id: 0,
        todo_name: ""
    });

    const closeModal = () => {
        setModalOpen(false);
    }

    // 수정
    const handleModify = async (e) => {
        setModifyTodo(registerTodo);
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
            isOpen={true}>
                <h2>할 일 수정</h2>
                <div>
                    <label htmlFor="">수정할 일</label>
                    <input type="text" onChange={handleChange} name="todo_name" value={modifyTodo.todo_name} />
                </div>
                <div>
                    <button onClick={handleModify}>수정</button>
                    <button onClick={closeModal}>취소</button>
                </div>
            </ReactModal>
        </>
    );
}

export default ModifyModal;