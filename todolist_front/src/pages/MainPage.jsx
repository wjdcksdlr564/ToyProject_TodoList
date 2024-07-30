import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./Mainstyle";
import axios from 'axios';
import ReactModal from 'react-modal';
import { css } from '@emotion/react';

function MainPage() {

    const [ isModalOpen, setModalOpen ] = useState(false);

    const [ searchParams, setSearchParams ] = useState({
        index: 0,
        todoName: "",
        updateDate: ""
    });

    const handleSearchInputChange = (e) => {
        setSearchParams(searchParams => ({
            ...searchParams,
            [e.target.name]: e.target.value
        }))
    }

    const [ todoList, setTodoList ] = useState([]);

    const handleRegisterButtonClick = () => {
            setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const handleSearchClick = async () => {
        try {
            const response = await axios.get("http://localhost:8080//todo", searchParams);
            setSearchParams({
                index: 0,
                todoName: "",
                updateDate: ""
            })
            console.log(response);
        } catch(e) {
            console.error(e);
        }
    }

    const handleDeleteClick = (e) => {
        setTodoList(todoList => [ ...todoList.filter((searchParams, index) => index !== parseInt(e.target.value)) ])
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
                        height: '250px',
                        backgroundColor: '#fafafa'
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
                    <h2>할 일 추가</h2>
                    <div>
                        <label htmlFor="">추가할 일</label>
                        <input type="text" name="add" />
                    </div>
                    <div>
                        <button>등록</button>
                        <button onClick={closeModal}>취소</button>
                    </div>
                </div>
            </ReactModal>
            <ReactModal
                style={{
                    content: {
                        boxSizing: 'border-box',
                        transform: 'translate(-50%, -50%)',
                        top: '50%',
                        left: '50%',
                        padding: '20px',
                        width: '400px',
                        height: '250px',
                        backgroundColor: '#fafafa'
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
                    <h2>할 일 수정</h2>
                    <div>
                        <label htmlFor="">수정할 일</label>
                        <input type="text" name="add" />
                    </div>
                    <div>
                        <button>수정</button>
                        <button onClick={closeModal}>취소</button>
                    </div>
                </div>
            </ReactModal>
            <div css={s.semi_container}>
                <div css={s.box1} >
                    <div css={s.box1_sub1}>
                        로고
                    </div>
                    <div css={s.box1_sub2}>
                        <label htmlFor="">GNB</label>
                    </div>
                    <div css={s.box1_sub3}>
                        <label htmlFor="">회원정보</label>
                    </div>
                    <div css={s.box1_sub4}>
                        <label htmlFor="" className='logout'>로그아웃</label>
                    </div>
                </div>
                <div css={s.box2} >
                    <div css={s.box2_sub1}>전체</div>
                    <div css={s.box2_sub2}>완료</div>
                    <div css={s.box2_sub3}>미완료</div>
                    <div css={s.box2_sub4}>
                        <button onClick={handleRegisterButtonClick} css={s.box2_sub4_button}>등록</button>
                    </div>
                </div>
                <div css={s.box3}>
                    <div css={s.box3_sub1}>
                        <div css={s.box3_sub1_span1}>
                            <input type='date' css={s.box3_sub1_date} name='updateDate' onChange={handleSearchInputChange} value={searchParams.updateDate}/>
                        </div>
                        <div css={s.box3_sub1_span2}>
                            <input type="text" css={s.box3_sub1_input} name='todoName' onChange={handleSearchInputChange} value={searchParams.todoName}/>
                            <button css={s.box3_sub1_button}
                                onClick={handleSearchClick}>검색</button>
                        </div>
                    </div>
                    <table css={s.box3_sub2}>
                        <thead>
                            <tr>
                                <th>진행상태</th>
                                <th>ID</th>
                                <th>날짜</th>
                                <th>할 일</th>
                                <th>관리</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >
                                    <input type="checkbox" />
                                </td>
                                <td >id</td>
                                <td ></td>
                                <td ></td>
                                <td >
                                    <button onClick={handleRegisterButtonClick}>수정</button>
                                    <button onClick={handleDeleteClick} value={searchParams.index}>삭제</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default MainPage;