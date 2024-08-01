import React, { useState, useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./ProfileStyle";
import { css } from '@emotion/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authStateAtom, authUserStateAtom } from '../atoms/AuthAtom';
import ReactModal from 'react-modal';
ReactModal.setAppElement("#root");

function ProfilePage(props) {
    const [ authUserState, setAuthUserState ] = useRecoilState(authUserStateAtom);

    const [ isModalOpen, setModalOpen ] = useState(false);

    const [ userDetail, setUserDetail ] = useState({
        userId:"",
        name:"",
        email:"",
        password: ""
    });

    const [ modifyUser, setModifyUser ] = useState({
        userProfile: userDetail
    });

    const handleChange = (e) => {
        setUserDetail(userDetail =>{
            return {
                userDetail,
                [e.target.name]: e.target.name
            }
        })
    };

    const openModal = () => {
        const response = axios.get("http://localhost:8080/api/v1/user", userDetail)
        .then(result => {
            console.log(result.data);
        })
        setModalOpen(true);
    }

    const handleCancel = () => {
        console.log("취소 버튼 클릭됨");
        window.history.back(-1);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const handleModify = (e) => {
        setModifyUser(modifyUser =>{
            return {
                ...modifyUser,
                [e.target.name]: e.target.value
            }
        })
        const response = axios.put("http://localhost:8080/api/v1/user", modifyUser);
    }

    return (
        <div css={s.container}>
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
                isOpen={isModalOpen}
                onRequestClose={closeModal}
            >
                <div css={css`
                    display: flex; 
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    height: 100%;
                `}>
                    <div css={s.box1}>
                            <label css={s.labelsize}>ID: </label>
                            <input type="text" 
                                name="name" readOnly 
                                value={authUserState.username}
                                />
                    </div>
                    <div css={s.box1}>
                        <label css={s.labelsize}>이름: </label>
                        <input type="text"
                                name="username"
                                value={userDetail.username}
                                onChange={handleChange}
                                />
                    </div>
                    <div css={s.box1}>
                        <label css={s.labelsize}>이메일: </label>
                        <input type="text"
                                name="email"
                                value={userDetail.email}
                                onChange={handleChange}
                                />
                    </div>
                    <div css={s.box1}>
                        <label>비밀번호: </label>
                        <input type="password" 
                                name="password" 
                                value={userDetail.value} 
                                />
                    </div>
                    <div css={s.button1}>
                        <button name="userProfile" value={userDetail} onClick={handleModify}>수정</button>
                        <button onClick={closeModal}>취소</button>
                    </div>
                </div>
            </ReactModal>
            <h1 css={s.header}>회원 정보 수정</h1>
                <div css={s.box1}>
                        <label css={s.labelsize}>ID: </label>
                        <input type="text" 
                            name="name" readOnly 
                            value={authUserState.username}
                            />
                </div>
                <div css={s.box1}>
                        <label css={s.labelsize}>이름: </label>
                        <input type="text"
                                name="username"
                                value={userDetail.username}
                                onChange={handleChange}
                                />
                </div>
                <div css={s.box1}>
                        <label css={s.labelsize}>이메일: </label>
                        <input type="text"
                                name="email"
                                value={userDetail.email}
                                onChange={handleChange}
                                />
                </div>
                <div css={s.box1}>
                        <label>비밀번호: </label>
                        <input type="password" 
                                name="password" 
                                value={userDetail.password} 
                                />
                </div>
                <div css={s.button1}>
                    <button css={s.button2} type="submit" onClick={openModal}>수정</button>
                    <button css={s.button2} type="button" onClick={handleCancel}>취소</button>
                </div>
        </div>
    );
};

export default ProfilePage;