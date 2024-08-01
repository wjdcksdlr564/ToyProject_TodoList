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

    const [ mode, setMode ] = useState(0);
    
    const [ searchParams, setSearchParams ] = useState({
        user_id: 0,
        todo_name: "",
        update_date: ""
    });
    
    const [ todo, setTodo ] = useState({
        check: false,
        user_id: 0,
        update_date: "",
        todo_name: ""
    });

    const [ check, setCheck ] = useState({
        id: "",
        check: false
    });

    const [ todoList, setTodoList ] = useState([]);
    const [ checkedList, setCheckedList ] = useState([]);

    useEffect(() => {
        if(mode === 1) {
            setTodoList(...todoList);
        }
        
        if(mode === 2) {
            //map, filter <- status 1인것만
            setTodoList( todoList => [...todoList.filter((index, check) => 
                check === true
            )]);
        }

        if(mode === 3) {
            //map, filter <- status 0인것만
            setTodoList( todoList => [...todoList.filter((index, check) => 
                check === false
            )]);
        }
    }, [checkedList]);

    const handleChangeMode = (e) => {
        if(e.target.name === "listall") {
            setMode(1);
        }

        if(e.target.name === "listcheck") {
            setMode(2);
        }

        if(e.target.name === "listchecknot") {
            setMode(3);
        }
    }


    const handleSearchInputChange = (e) => {
        setSearchParams(searchParams => ({
            ...searchParams,
            [e.target.name]: e.target.value
        }))
    }

    const handleRegisterButtonClick = () => {
        RegisterModal();
    }

    // 다건
    const handleSearchClick = async () => {
        try {
            const response = await axios.get("http://localhost:8080/todo", searchParams);
            setSearchParams({
                user_id: 0,
                todo_name: "",
                update_date: ""
            });
            console.log(response);
        } catch(e) {
            console.error(e);
        }
    }

    // 삭제
    const handleDeleteClick = async (e) => {
        const response = await axios.delete(`http://localhost:8080/${searchParams.index}`, searchParams)
        setTodoList(todoList => [ ...todoList.filter((searchParams, index) => index !== parseInt(e.target.value)) ])
        console.log(response);
    }

    const handleCheckChange = (e, ischecked) => {
        if(ischecked) {
            setCheck(check => {
                return {
                    ...check,
                    [e.target.name]: true
                }
            });
            setCheckedList(checkedList => [ ...checkedList, check])
        }

        if(!ischecked) {
            setCheck(check => {
                return {
                    ...check,
                    [e.target.name]: false
                }
            });
            setCheckedList(checkedList => [ ...checkedList, check])
        }
    }

    const handleLogoutClick = () => {
        <Link to="/login">

        </Link>
    }

    return (
        <div css={s.container}>
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