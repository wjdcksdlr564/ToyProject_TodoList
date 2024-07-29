import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./Mainstyle";
import useInput from '../hooks/useInput';
import axios from 'axios';

function MainPage() {

    const userIdInput = useInput();
    const todoIdInput = useInput();
    const todoNameInput = useInput();
    const updateDateInput = useInput();

    const [ todoList, setTodoList ] = useState([]);

    const handleRegisterButtonClick = () => {

    }

    const handleSearchClick = () => {
        const todo = {
            user_id: userIdInput.value,
            todo_id: todoIdInput.value,
            todo_name: todoNameInput.value,
            update_date: updateDateInput.value
        }

        axios.get("http://localhost:8080//todo", todo)
    }

    return (
        <div css={s.container}>
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
                        <button css={s.box2_sub4_button}>등록</button>
                    </div>
                </div>
                <div css={s.box3}>
                    <div css={s.box3_sub1}>
                        <div css={s.box3_sub1_span1}>
                            <input type='date' css={s.box3_sub1_date}></input>
                        </div>
                        <div css={s.box3_sub1_span2}>
                            <input type="text" css={s.box3_sub1_input} />
                            <button css={s.box3_sub1_button}
                                value>검색</button>
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
                            {
                                todoList.map(todo => {
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td css={s.resultButton}>
                                            <button>수정</button>
                                            <button>삭제</button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default MainPage;