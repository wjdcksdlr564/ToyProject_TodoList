import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./Mainstyle";
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authUserStateAtom } from '../atoms/AuthAtom';
import api from '../apis/instance';
import { BsList } from 'react-icons/bs';
import RegisterModal from '../components/registerModal/RegisterModal';
import ModifyModal from '../components/modifyTodoModal/ModifyModal';
import { PiNotePencilDuotone } from 'react-icons/pi';
import { MdDeleteOutline } from 'react-icons/md';
import { css } from '@emotion/react';

function MainPage() {
    const navigate = useNavigate();
    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;
    let date = today.getDate();  // 날짜
    if((month / 10) > 0){
        month = "0"+(today.getMonth() + 1);
    }
    if((date / 10) > 0){
        date = "0"+(today.getDate());
    }
    const todayDate = year + "-" + month + "-" + date;

    const [ authUserState, setAuthUserState ] = useRecoilState(authUserStateAtom);
    useEffect(() => {
        if(!!authUserState?.userId){
            setSearchParams(searchParams => {
                return {
                    ...searchParams,
                    userId: authUserState?.userId
                }
            });
            // console.log(authUserState);
        }
    }, [authUserState]);

    const [ searchParams, setSearchParams ] = useState({
        userId: 0,
        todoName: "",
        updateDate: todayDate
    });

    const [ allTodoList, setAllTodoList ] = useState([]);
    const [ todoList, setTodoList ] = useState([]);
    const [ mode, setMode ] = useState(1);
    const [ refresh, setRefresh ] = useState(0);

    const [ registerModalOpen, setRegisterModalOpen ] = useState({
        userId: 0,
        isOpen : false
    });
    const [ modifyModalOpen, setModifyModalOpen ] = useState({
        userId: 0,
        todoId: 0,
        todoName: "",
        isOpen: false,
        status : 0
    });

    useEffect( () => {
        const defaultTodoList = async () => {
            // console.log(searchParams);
            try {
                const response = await api.get("http://localhost:8080/api/v1/todos", {params: searchParams});
                setTodoList(response.data);
                setAllTodoList(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        if(!!searchParams?.userId) {
            defaultTodoList();
        }
    }, [searchParams.updateDate, searchParams.userId]);

    useEffect( () => {
        if(refresh !== 0) {
            const defaultTodoList = async () => {
                // console.log(searchParams);
                try {
                    const response = await api.get("http://localhost:8080/api/v1/todos", {params: searchParams});
                    setTodoList(response.data);
                    setAllTodoList(response.data);
                } catch (error) {
                    console.error(error);
                }
            }
            if(!!searchParams?.userId) {
                defaultTodoList();
            }
        }
        if(refresh === 1) {
            setMode(1);
        }
        setRefresh(0);
    }, [refresh]);

    useEffect(() => {
        if(mode === 1) {
            setTodoList([...allTodoList]);
        }
        
        if(mode === 2) {
            const completedTodo = [...allTodoList.filter(todo => todo.status === 1)];
            // console.log(completedTodo);
            setTodoList([...completedTodo]);
        }

        if(mode === 3) {
            const completedTodo = [...allTodoList.filter(todo => todo.status === 0)];
            // console.log(todoList);
            setTodoList([...completedTodo]);
        }
    }, [mode, allTodoList]);

    const handleMenuClick = (e, value) => {
        if(value === "allList") {
            // console.log("전체 선택");
            setMode(1);
        }

        if(value === "completedList") {
            // console.log("완료 선택");
            setMode(2);
        }

        if(value === "uncompletedList") {
            // console.log("미완료 선택");
            setMode(3);
        }
    }

    const handleDateInputChange = (e) => {
        setSearchParams(searchParams => ({
            ...searchParams,
            [e.target.name]: e.target.value
        }))
    }

    const handleSearchInputChange = (e) => {
        setSearchParams(searchParams => ({
            ...searchParams,
            [e.target.name]: e.target.value
        }))
    }

    // 다건 조회
    // searchparams 바뀔 때 마다 동작하게 해놔서 검색 버튼을 누를 일이 없음
    const handleSearchClick = async () => {
        try {
            const response = await api.get("http://localhost:8080/api/v1/todos", {params: searchParams});
            // console.log(response.data);
            setTodoList(response.data);
        } catch(e) {
            console.error(e);
        }
    }

    // 삭제
    const handleDeleteClick = async (todoId) => {
        if(window.confirm("정말 삭제하시겠습니까?")){
            try{
                const response = await api.delete(`http://localhost:8080/api/v1/todo/${parseInt(todoId)}`);
                // console.log(response.data);
                if(response.data.success) {
                    setTodoList(todoList => [ ...todoList.filter((todo) => todo.todoId !== parseInt(todoId))])
                }
            } catch (e) {
                console.error(e);
            }
            console.log(todoList);
            alert("정상 삭제 되었습니다.");
        }
    }

    // 체크박스 수정
    const handleCheckedChange = async (e, data1, data2) => {
        const todoId = parseInt(data1);
        const updateStatus = e.target.checked ? 1 : 0;
        try {
            const response = await api.put(`http://localhost:8080/api/v1/todo/${todoId}`, { todoId: todoId, userId: searchParams.userId, todoName: data2, status : updateStatus })
            // console.log(response.data);
            setAllTodoList(todos => {
                return [
                    ...todos.map(todo => {
                        if(todo.todoId === parseInt(todoId)) {
                            return {
                                ...todo,
                                status: updateStatus
                            }
                        }
                        return todo;
                    })
                ]
            })

        } catch (e) {
            console.error(e);
        }
    }

    const handleLogoutClick = async () => {
        try{
            const response = await api.post(`http://localhost:8080/api/v1/logout`);
            console.log(response.data);
            alert("로그아웃 되셨습니다.");
            navigate('/login');
        } catch (e) {
            console.error(e);
        }
    }

    const handleRegisterButtonClick = () => {
        setRegisterModalOpen({
            userId: searchParams.userId,
            isOpen: true
        });
    }

    const handleModifyModalOpen = (todoId, todoName, status) => {
        setModifyModalOpen({
            todoId: todoId,
            userId: searchParams.userId,
            todoName: todoName,
            isOpen: true,
            status: status
        });
    }

    const closeModal = () => {
        setModifyModalOpen(data => ({
            ...data,
            isOpen : false
        }));
        setRegisterModalOpen(data => ({
            ...data,
            isOpen : false
        }));
    }

    return (
        <>
            <RegisterModal registerModalOpen={registerModalOpen} closeModal={closeModal} setRefresh={setRefresh} ></RegisterModal>
            <ModifyModal modifyModalOpen={modifyModalOpen} closeModal={closeModal} setRefresh={setRefresh}></ModifyModal>
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
                            <label htmlFor="" onClick={handleLogoutClick}>Logout</label>
                        </div>
                    </div>
                    <div css={s.box2} >
                        <p css={mode === 1? s.box2_sub3 : s.box2_sub2} onClick={(e) => handleMenuClick(e, "allList")}>All</p>
                        <p css={mode === 2? s.box2_sub3 : s.box2_sub2} onClick={(e) => handleMenuClick(e, "completedList")}>Completed</p>
                        <p css={mode === 3? s.box2_sub3 : s.box2_sub2} onClick={(e) => handleMenuClick(e, "uncompletedList")}>Pending</p>
                        <p css={s.box2_sub4}>
                            <button onClick={handleRegisterButtonClick} css={s.box2_sub4_button}>Add</button>
                        </p>
                    </div>
                    <div css={s.box3}>
                        <div css={s.box3_sub1}>
                            <div css={s.box3_sub1_span1}>
                                <input type='date' css={s.box3_sub1_date} name='updateDate' onChange={handleDateInputChange} value={searchParams.updateDate}/>
                            </div>
                            <div css={s.box3_sub1_span2}>
                                <input type="text" css={s.box3_sub1_input} name='todoName' onChange={handleSearchInputChange} value={searchParams.todoName} placeholder='search todo...'/>
                                <button css={s.box3_sub1_button}
                                    onClick={handleSearchClick}>Search</button>
                            </div>
                        </div>
                        <table css={s.box3_sub2}>
                            <thead css={s.tableHeader}>
                                <tr css={s.tableTr}>
                                    <th>Status</th>
                                    <th>ID</th>
                                    <th>Updata Date</th>
                                    <th>Todo</th>
                                    <th>Management</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                    todoList.map((todo) =>
                                        <tr key={todo.todoId} css={todo.status === 1 ? s.completedSelectedItem : s.pendingSelectedItem}>
                                            <td>
                                                <input 
                                                type="checkbox"
                                                name="check"
                                                checked={todo.status === 1? "checked" : ""} 
                                                onChange={(e) => handleCheckedChange(e, todo.todoId, todo.todoName)}
                                                value={todo.status}
                                            />
                                            </td>
                                            <td>{todo.todoId}</td> 
                                            <td>{todo.updateDate}</td>
                                            <td>{todo.todoName}</td>
                                            <td css={s.managementButton}>
                                                <p>
                                                    <label htmlFor="" onClick={() => handleModifyModalOpen(todo.todoId, todo.todoName, todo.status)}><PiNotePencilDuotone size="25" /></label>
                                                    <button>Update</button>
                                                </p>
                                                <p>
                                                    <label htmlFor="" onClick={() => handleDeleteClick(todo.todoId)}><MdDeleteOutline size="25"/></label>
                                                    <button>Delete</button>
                                                </p>
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