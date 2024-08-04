import React, { useState } from 'react';
import ReactModal from 'react-modal';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import axios from 'axios';
import api from '../../apis/instance';

const ModifyModal = ({ modifyModalOpen, closeModal, setRefresh }) => {

    const [ modifyTodo, setModifyTodo ] = useState({
        todoName: modifyModalOpen.todoName
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
            setRefresh(2);
            setModifyTodo({todoName: ""});
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

    const handleModifyInputOnKeyDown = (e) => {
        if(e.keyCode === 13) {
            handleModifyButtonClick();
        }

        if (e.keyCode === 27) {
            setModifyTodo({todoName: ""});
            closeModal(data => {
                return {
                ...data,
                status: false
                }    
            });
        }
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
                        backgroundColor: 'white',
                        borderRadius: '30px'
                    }
                }}
                isOpen={modifyModalOpen.isOpen}
                onRequestClose={closeModal.isOpen}
                ariaHideApp={false}>
                <div css={s.container}>
                    <h2>Update Todo </h2>
                    <div css={s.container_sub1}>
                        <label htmlFor=""></label>
                        <input type="text" onChange={handleInputChange} name="todoName" onKeyDown={handleModifyInputOnKeyDown} value={modifyTodo.todoName} placeholder={"before: " + modifyModalOpen.todoName}/>
                    </div>
                    <div css={s.container_sub2}>
                        <button onClick={handleModifyButtonClick}>Update</button>
                        <button onClick={closeModal}>Cancel</button>
                    </div>
                </div>    
            </ReactModal>
        </>
    );
}

export default ModifyModal;