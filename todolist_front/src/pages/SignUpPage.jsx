import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./SignUpStyle";
import { Navigate, useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    username:"",
    password: "",
    passwordConfirm: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setUserInfo(data => {
        return {
            ...userInfo,
            [e.target.name] : e.target.value
        }
    });
    }

    const handleSubmitClick = () => {
        navigate("/login");
  };

  return (
    <>
        <div css={s.container}>
            <h1 css={s.header}>회원 가입</h1>
                <div css={s.inputbox}>
                    <label css={s.labelsize} htmlFor="">ID: </label>
                    <input type="text"
                            name = "username"
                            onChange={handleInputChange}
                            value={userInfo.username}/>
                </div>
                <div css={s.inputbox}>
                    <label css={s.labelsize} htmlFor="">PW: </label>
                    <input type="password" 
                            name = "password"
                            onChange={handleInputChange}
                            value={userInfo.password}/>
                </div>
                <div css={s.inputbox}>
                    <label css={s.labelsize} htmlFor="">PW확인: </label>
                    <input type="password" 
                            name = "passwordConfirm"
                            onChange={handleInputChange}
                            value={userInfo.passwordConfirm}/>
                </div>
                <div css={s.inputbox}>
                    <label css={s.labelsize} htmlFor="">이메일: </label>
                    <input type="text" 
                            name = "email"
                            onChange={handleInputChange}
                            value={userInfo.email}/>
                </div>
                <div>

                </div>
                <div css={s.button}>
                    <button css={s.inbutton} onClick={handleSubmitClick} >회원 가입</button>
                </div>
        </div>
    </>
  )

}

export default SignUpPage;