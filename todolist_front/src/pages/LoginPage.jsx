import axios from 'axios';
import React, { useState } from 'react';
import useInput from '../hooks/useInput';
/** @jsxImportSource @emotion/react */
import * as s from "./Loginstyle"

function LoginPage(props) {
    const userNameInput = useInput();
    const userPassword = useInput();

    const handleSubmit = () => {
        const user = {
            userName : userNameInput.value,
            userPassword : userPassword.value,
    }

    axios.post("http://localhost:8080/user", user)
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    }
    
    return (
        <>
        <div css={s.container}>
            <header css={s.header}>
                <h1>ToDoList</h1>
            </header>
            <main css={s.mainCotainer}>
                <div css={s.inputcontainer}>
                    <p css={s.inputText}>
                        <label htmlFor="">ID: </label>
                        <input type="text"
                            name='id' 
                            onChange={userNameInput.onChange}
                            value={userNameInput.value}
                        />
                    </p>
                    <span css={s.inputCheck}>ID 확인 메세지</span>
                </div>
                <div css={s.inputcontainer}>
                    <p>
                        <label htmlFor="">PW: </label>
                        <input type="password" 
                            onChange={userPassword.onChange}
                            value={userPassword.value}
                        />
                    </p>
                    <span css={s.inputCheck}>PW 확인 메세지</span>
                </div>
                <p>
                    <button css={s.submitButton}>완료</button>
                </p>
            </main>
        </div>
        </>
    );
}
    

export default LoginPage;