import React, { useState, useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { css } from '@emotion/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authStateAtom, authUserStateAtom } from '../../atoms/AuthAtom';

function ProfilePage(props) {
    const [ authUserState, setAuthUserState ] = useRecoilState(authUserStateAtom);
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSave = () => {
        // console.log("저장 버튼 클릭됨", user);
    }

    const handleCancel = () => {
        // console.log("취소 버튼 클릭됨");
        window.history.back(-1);
    }

    return (
        <div css={s.container}>
            <h1 css={s.header}>회원 정보 수정</h1>
                <div css={s.box1}>
                        <label css={s.labelsize}>ID: </label>
                        <input type="text" 
                            name="name" readOnly 
                            value={authUserState.username}/>
                </div>
                <div css={s.box1}>
                        <label css={s.labelsize}>이름: </label>
                        <input type="text"
                                name="username"
                                value={user.username}
                                onChange={handleChange}/>
                </div>
                <div css={s.box1}>
                        <label css={s.labelsize}>이메일: </label>
                        <input type="text"
                                name="email"
                                value={user.email}
                                onChange={handleChange}/>
                </div>
                <div css={s.box1}>
                        <label>비밀번호: </label>
                        <input type="password" 
                                name="password" 
                                value={user.value} />
                </div>
                <div css={s.button1}>
                    <button css={s.button2} type="submit" onClick={handleSave}>수정</button>
                    <button css={s.button2} type="button" onClick={handleCancel}>취소</button>
                </div>
        </div>
    );
};

export default ProfilePage;
