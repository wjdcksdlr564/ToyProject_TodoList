import React, { useState } from 'react';
import ReactModal from 'react-modal';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import axios from 'axios';
import api from '../../apis/instance';

const ModifyModal = ({ modifyModalOpen, closeModal, setMode }) => {

    const [ modifyTodo, setModifyTodo ] = useState({
        todoName: ""
    });

    // 수정
    const handleModifyButtonClick = async (e) => {
        const updataData = {todoId: modifyModalOpen.todoId, userId: modifyModalOpen.userId, todoName: modifyTodo.todoName, status: modifyModalOpen.status};
        if(!updataData.todoName) {
            alert("Todo Name can not be null");
            return;
        }
        try {
            const response = await api.put(`http://localhost:8080/api/v1/todo/${parseInt(modifyModalOpen.todoId)}`, updataData);
            alert("Successfully Updated!");
            // console.log(response.data);
            setModifyTodo({todoName: ""});
            setMode(1);
            closeModal();

        } catch(error) {
            console.error(error.response.data);
            alert("등록 중 에러가 발생했습니다.\n잠시 후 다시 시도하시기 바랍니다.\n" + "errorMessage : " + error.response.message);
            setModifyTodo({todoName: ""});
        }
    }

    const handleInputChange = (e) => {
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
                isOpen={modifyModalOpen.isOpen}
                onRequestClose={closeModal.isOpen}
                ariaHideApp={false}>
                <div css={s.container}>
                    <h2>Update Todo: </h2>
                    <div>
                        <label htmlFor="">Modify Todo</label>
                        <input type="text" onChange={handleInputChange} name="todoName" value={modifyTodo.todoName} placeholder={"before: " + modifyModalOpen.todoName}/>
                    </div>
                    <div>
                        <button onClick={handleModifyButtonClick}>Modify</button>
                        <button onClick={closeModal}>Cancel</button>
                    </div>
                </div>    
            </ReactModal>
        </>
    );
}

export default ModifyModal;