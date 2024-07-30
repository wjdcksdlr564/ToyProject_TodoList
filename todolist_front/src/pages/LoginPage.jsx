import axios from 'axios';
import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./Loginstyle"
import { Link } from 'react-router-dom';

function LoginPage(props) {

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

    const handleSubmit = () => {

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
                            name='username' 
                            onChange={handleInputChange}
                            value={user.value}
                        />
                    </p>
                </div>
                <div css={s.inputcontainer}>
                    <p>
                        <label htmlFor="">PW: </label>
                        <input type="password" 
                            onChange={handleInputChange}
                            value={user.value}
                        />
                    </p>
                    <span css={s.inputCheck}>PW 확인 메세지</span>
                </div>
                <p>
                    <Link to="/async/todo">
                         <button css={s.submitButton} onClick={handleSubmit}>완료</button>
                    </Link>
                </p>
            </main>
        </div>
        </>
    );
}
    

export default LoginPage;