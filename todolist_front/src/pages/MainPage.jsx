import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./Mainstyle";
import axios from 'axios';
import RegisterModal from '../components/registerModal/RegisterModal';
import { Link } from 'react-router-dom';
import "./MainPageCss.css";
import ModifyModal from '../components/modifyTodoModal/ModifyModal';

function MainPage() {

    const [ mode, setMode ] = useState(0);

    const [ registerModalOpen, setRegisterModalOpen ] = useState(false);
    const [ modifyModalOpen, setModifyModalOpen ] = useState(false);
    
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

    // useEffect(() => {
    //     setRegisterModalOpen();
        
    // }, [registerModalOpen]);

    const handleChangeMode = (e) => {

        if(e.target.name === "listall") {
            setMode(1);
        }

        if(e.target.name === "listcheck") {
            setMode(2);
            document.getElementById('b').classList.add('fullhappen');
            document.getElementById('c').classList.remove('fullhappen');
            document.getElementById('d').classList.add('fullhappen');
        }

        if(e.target.name === "listchecknot") {
            setMode(3);
            document.getElementById('b').classList.add('fullhappen');
            document.getElementById('c').classList.add('fullhappen');
            document.getElementById('d').classList.remove('fullhappen');
        }
    }


    const handleSearchInputChange = (e) => {
        setSearchParams(searchParams => ({
            ...searchParams,
            [e.target.name]: e.target.value
        }))
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

    const handleRegisterButtonClick = () => {
        setRegisterModalOpen(true);
    }

    const handleModifyModalOpen = () => {
        setModifyModalOpen(true);
    }

    const closeModal = () => {
        setModifyModalOpen(false);
        setRegisterModalOpen(false);
    }

  
    return (
        <>
            <RegisterModal registerModalOpen={registerModalOpen} closeModal={closeModal} ></RegisterModal>
            <ModifyModal modifyModalOpen={modifyModalOpen} setModifyModalOpen={setModifyModalOpen}></ModifyModal>
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
                    <div onClick={handleLogoutClick} css={s.box1_sub4}>
                        <label htmlFor="" className='logout'>로그아웃</label>
                    </div>
                </div>
                <div css={s.box2} >
                    <div css={s.box2_sub1} onClick={() => handleChangeMode()}>전체</div>
                    <div css={s.box2_sub2} onClick={() => handleChangeMode()}>완료</div>
                    <div css={s.box2_sub3} onClick={() => handleChangeMode()}>미완료</div>
                    <div css={s.box2_sub4}>
                        <button onClick={handleRegisterButtonClick} css={s.box2_sub4_button}>등록</button>
                    </div>
                </div>
                <div css={s.box3}>
                    <div css={s.box3_sub1}>
                        <div css={s.box3_sub1_span1}>
                            <input type='date' css={s.box3_sub1_date} name='update_date' onChange={handleSearchInputChange} value={searchParams.updateDate}/>
                        </div>
                        <div css={s.box3_sub1_span2}>
                            <input type="text" css={s.box3_sub1_input} name='todo_name' onChange={handleSearchInputChange} value={searchParams.todoName}/>
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
                           {
                                todoList.map(todo =>
                                    <tr>
                                        <td>
                                            <input 
                                            id="checked" 
                                            type="checkbox"
                                            name="check" 
                                            checked={check} 
                                            onChange={handleCheckChange} />
                                        </td>
                                        <td>id</td>
                                        <td>날짜</td>
                                        <td>할 일</td>
                                        <td>
                                            <button onClick={handleModifyModalOpen}>수정</button>
                                            <button onClick={handleDeleteClick} value={searchParams.index}>삭제</button>
                                        </td>
                                    </tr>
                                )
                           }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
        
    );
}

export default MainPage;