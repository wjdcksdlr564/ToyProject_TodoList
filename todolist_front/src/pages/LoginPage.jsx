import axios from 'axios';
import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./Loginstyle"
import api from '../apis/instance';
import { useRecoilState } from 'recoil';
import { authStateAtom } from '../atoms/AuthAtom';
import { useNavigate } from 'react-router-dom';

function LoginPage(props) {
    
    const navigate = useNavigate();
    const [ authState, setAuthState ] = useRecoilState(authStateAtom);
    const [ user, setUser ] = useState({
        username : "",
        password : ""
    });
    const [ loginMessage, setLoginMessage ] = useState({
        message: ""
    });

    const handleInputChange = (e) => {
        setUser(user => ({
            ...user,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async () => {

        try {
            // console.log(user);
            const response = await api.post("http://localhost:8080/api/v1/login", user);
            // console.log(response.status);
            setAuthState(true);
            alert(response.data.message);
            navigate("/");
        } catch (error) {
            // console.error(error.response.data);
            setLoginMessage(error.response.data);
        }
    }

    const handePasswordInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            handleSubmit();
        }
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
                        <input type="text"
                            name='username' 
                            onChange={handleInputChange}
                            value={user.value}
                            placeholder='username'
                        />
                    </p>
                </div>
                <div css={s.inputcontainer}>
                    <p>
                        <input type="password"
                            name="password"
                            onChange={handleInputChange}
                            value={user.value}
                            onKeyDown={handePasswordInputKeyDown}
                            placeholder='password'
                        />
                    </p>
                    <span css={s.inputCheck}>{loginMessage.message}</span>
                </div>
                <p>
                    <button css={s.submitButton} onClick={handleSubmit}>Login</button>
                </p>
                <p>
                    <button css={s.submitButton} >Signup</button>
                </p>
            </main>
        </div>
        </>
    );
}
    

export default LoginPage;