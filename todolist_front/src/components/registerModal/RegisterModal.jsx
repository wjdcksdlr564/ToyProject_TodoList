import { css } from '@emotion/react';
import axios from 'axios';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import api from '../../apis/instance';

const RegisterModal = ({ registerModalOpen, closeModal, setRefresh }) => {

    const [ registerTodo, setRegisterTodo ] = useState({
        todoName: ""
    });

    //등록
    const handleRegisterButtonClick = async (e) => {
        const registerTodoName = registerTodo.todoName.trim("");
        const registerData = {todoName: registerTodoName, userId: registerModalOpen.userId};
        if(!registerTodoName) {
            alert("Todo Name can not be null");
            return;
        }
        try {
            const response = await api.post(`/todo`, registerData);
            alert(response.data.message + " Registered!");
            // console.log(response.data);
            setRegisterTodo({todoName: ""});
            setRefresh(1);
            closeModal(data => {
                return {
                ...data,
                status: false
                }    
            });
        } catch(error) {
            alert("등록 중 에러가 발생했습니다.\n잠시 후 다시 시도하시기 바랍니다.\n" + "errorMessage : " + error.response.message);
        }
    }

    const handleInputChange = (e) => {
        setRegisterTodo(registerTodo => {
            return {
                ...registerTodo,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleRegisterInputOnKeyDown = (e) => {
        if(e.keyCode === 13) {
            handleRegisterButtonClick();
        }

        if (e.keyCode === 27) {
            setRegisterTodo({todoName: ""});
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
            isOpen={registerModalOpen.isOpen}
            onRequestClose={closeModal.isOpen}
            ariaHideApp={false}>
            <div css={s.container}>
                <h2>Add Todo</h2>
                <div css={s.container_sub1}>
                    <label htmlFor=""></label>
                    <input type="text" onChange={handleInputChange} name="todoName" value={registerTodo.todoName} onKeyDown={handleRegisterInputOnKeyDown} placeholder='Add a new todo...' autoFocus/>
                </div>
                <div css={s.container_sub2}>
                    <button onClick={handleRegisterButtonClick}>Add</button>
                    <button onClick={closeModal}>Cancel</button>
                </div>
            </div>    
        </ReactModal>
        </>    
        
    );
}

export default RegisterModal;