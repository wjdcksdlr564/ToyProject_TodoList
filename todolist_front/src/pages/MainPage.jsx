import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./Mainstyle";
import axios from 'axios';
import ReactModal from 'react-modal';
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';
import { authUserStateAtom } from '../atoms/AuthAtom';
import { BsList } from 'react-icons/bs';
import { PiNotePencilDuotone } from 'react-icons/pi';
import { MdDeleteOutline } from 'react-icons/md';


function MainPage() {
    const [ authUserState, setAuthUserState ] = useRecoilState(authUserStateAtom);

    useEffect(() => {
        setSearchParams(data => {
            return {
                ...searchParams,
                userId: authUserState.userId
            }
        })
    }, [authUserState]);
    const [ isModalOpen, setModalOpen ] = useState(false);

    const [ searchParams, setSearchParams ] = useState({
        userId: 0,
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

    // 다건 조회
    const handleSearchClick = async () => {
        try {
            console.log(searchParams);
            const response = await axios.get("http://localhost:8080/api/v1/todos", {
                "params": searchParams
            });
            // setSearchParams({
            //     ...searchParams,
            //     todoName: "",
            //     updateDate: ""
            // })
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
                    <h2>Update</h2>
                    <div>
                        <input type="text" name="add" placeholder='Add Todo...'/>
                    </div>
                    <div>
                        <button>Ok</button>
                        <button onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            </ReactModal>
            <div css={s.semi_container}>
                <div css={s.box1} >
                    <div css={s.box1_sub1}>
                        <BsList size="40"/>
                    </div>
                    <div css={s.box1_sub2}>
                        <label htmlFor=""></label>
                    </div>
                    <div css={s.box1_sub3}>
                        <label htmlFor="">Profile</label>
                    </div>
                    <div css={s.box1_sub4}>
                        <label htmlFor="" className='logout'>Logout</label>
                    </div>
                </div>
                <div css={s.box2} >
                    <div css={s.box2_sub1}>All</div>
                    <div css={s.box2_sub2}>Completed</div>
                    <div css={s.box2_sub3}>Pending</div>
                    <div css={s.box2_sub4}>
                        <button onClick={handleRegisterButtonClick} css={s.box2_sub4_button}>Add</button>
                    </div>
                </div>
                <div css={s.box3}>
                    <div css={s.box3_sub1}>
                        <div css={s.box3_sub1_span1}>
                            <input type='date' css={s.box3_sub1_date} name='updateDate' onChange={handleSearchInputChange} value={searchParams.updateDate} data-placeholder='YYYY-MM-DD'/>
                        </div>
                        <div css={s.box3_sub1_span2}>
                            <input type="text" css={s.box3_sub1_input} name='todoName' onChange={handleSearchInputChange} value={searchParams.todoName} placeholder='search todo...' />
                            <button css={s.box3_sub1_button}
                                onClick={handleSearchClick}>Search</button>
                        </div>
                    </div>
                    <table css={s.box3_sub2}>
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Todo</th>
                                <th>관리</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >
                                    <input type="checkbox" />
                                </td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td >
                                    
                                    <label htmlFor="" for="up"> <PiNotePencilDuotone /> </label>
                                    <button onClick={handleRegisterButtonClick} id="up">update</button>

                                    <label htmlFor="" for="del"> <MdDeleteOutline /> </label>
                                    <button onClick={handleDeleteClick} id='del' value={searchParams.index}>delete</button>
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