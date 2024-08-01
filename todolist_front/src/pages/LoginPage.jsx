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

    const handleInputChange = (e) => {
        setUser(user => ({
            ...user,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async () => {
        try {
            console.log(user);
            const response = await api.post("http://localhost:8080/api/v1/login", user);
            console.log(response.status);
            setAuthState(true);
            navigate("/");
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data.message);
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
                        <label htmlFor=""></label>
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
                        <label htmlFor=""></label>
                        <input type="password"
                            name="password"
                            onChange={handleInputChange}
                            value={user.value}
                            placeholder='password'
                        />
                    </p>
                    <span css={s.inputCheck}>확인 메세지</span>
                </div>
                <p>
                    <button css={s.submitButton} onClick={handleSubmit}>로그인</button>
                </p>
                <p>
                    <button css={s.submitButton} >회원가입</button>
                </p>
            </main>
        </div>
        </>
    );
}
    

export default LoginPage;