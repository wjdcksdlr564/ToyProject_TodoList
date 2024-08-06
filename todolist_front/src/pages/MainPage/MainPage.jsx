import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authUserStateAtom } from '../../atoms/AuthAtom';
import api from '../../apis/instance';
import { BsList } from 'react-icons/bs';
import RegisterModal from '../../components/registerModal/RegisterModal';
import ModifyModal from '../../components/modifyTodoModal/ModifyModal';
import { PiNotePencilDuotone } from 'react-icons/pi';
import { MdDeleteOutline, MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md';
import { css } from '@emotion/react';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri';

function MainPage() {
    const navigate = useNavigate();

    //오늘 날짜 yyyy-mm-dd 로 생성해주는 함수
    const getTodayDate = () => {
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
        return todayDate;
    }
    
    //사용자 로그인 정보 불러오고, 로그아웃을 위해 Atom 호출
    const [ authUserState, setAuthUserState ] = useRecoilState(authUserStateAtom);
    // 검색 조건을 담기 위한 useState
    const [ searchParams, setSearchParams ] = useState({
        userId: 0,
        todoName: "",
        updateDate: getTodayDate()
    });
    // 최초 조회, 검색조건 조회, 삭제시 전체 데이터를 담기 위한 useState
    const [ allTodoList, setAllTodoList ] = useState([]);
    // Mode에 따라 TodoList를 뿌려주기 위한 useState
    const [ todoList, setTodoList ] = useState([]);
    // 전체, 완료, 미완료 조건을 담기 위한 useState
    const [ mode, setMode ] = useState(1);
    // 등록, 수정시 전체 리스트를 다시 불러오기 위한 조건 useState
    const [ refresh, setRefresh ] = useState(0);
    // 등록 모달창 실행 및 데이터 전달을 위한 useState
    const [ registerModalOpen, setRegisterModalOpen ] = useState({
        userId: 0,
        isOpen : false
    });
    // 수정 모달창 실행 및 데이터 전달을 위한 useState
    const [ modifyModalOpen, setModifyModalOpen ] = useState({
        userId: 0,
        todoId: 0,
        todoName: "",
        isOpen: false,
        status : 0
    });

    // 최초 로그인시 로그인 정보를 불러와 조회 조건 useState에 넣기 위한 useEffect
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

    // 검색 조건 값의 변경에 따라 전체 TodoList를 불러오기 위한 useEffect
    useEffect( () => {
        const defaultTodoList = async () => {
            // console.log(searchParams);
            try {
                const response = await api.get("/todos", {params: searchParams});
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

    // 모달창에서 등록, 수정시 전체 TodoList를 불러오기 위한 useEffect
    useEffect( () => {
        if(refresh !== 0) {
            const defaultTodoList = async () => {
                // console.log(searchParams);
                try {
                    const response = await api.get("/todos", {params: searchParams});
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

    // 전체 리스트가 수정되거나 전체, 완료, 미완료 조건에 따라 선택적으로 데이터를 렌더링하기 위한 useEffect
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

    // 메뉴 변경시 searchParams 초기화 메소드
    const resetSearchparams = () => {
        setSearchParams(data => {
            return {
                ...data,
                todoName: ""
            }
        });
    }

    // 각 메뉴 버튼 선택시 모드 변경 메소드
    const handleMenuClick = (e, value) => {
        if(value === "allList") {
            // console.log("전체 선택");
            resetSearchparams();
            setMode(1);
        }

        if(value === "completedList") {
            // console.log("완료 선택");
            resetSearchparams();
            setMode(2);
        }

        if(value === "uncompletedList") {
            // console.log("미완료 선택");
            resetSearchparams();
            setMode(3);
        }
    }

    // 날짜 변경 이벤트를 받기 위한 메소드
    const handleDateInputChange = (e) => {
        setSearchParams(searchParams => ({
            ...searchParams,
            [e.target.name]: e.target.value
        }))
    }

    // 검색어 변경 이벤트를 받기 위한 메소드
    const handleSearchInputChange = (e) => {
        setSearchParams(searchParams => ({
            ...searchParams,
            [e.target.name]: e.target.value
        }))
    }

    // 다건 조회 (userId, updateDate, todoName 기반)
    const handleSearchClick = async () => {
        try {
            const response = await api.get("/todos", {params: searchParams});
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
                const response = await api.delete(`/todo/${parseInt(todoId)}`);
                // console.log(response.data);
                if(response.data.success) {
                    setAllTodoList(todoList => [ ...todoList.filter((todo) => todo.todoId !== parseInt(todoId))])
                }
            } catch (e) {
                console.error(e);
            }
            console.log(todoList);
            alert("정상 삭제 되었습니다.");
        }
    }

    // 체크박스 수정 (Label을 안 쓰고 checkbox를 사용할 경우 사용)
    // const handleCheckedChange = async (e, data1, data2) => {
    //     const todoId = parseInt(data1);
    //     const updateStatus = e.target.checked ? 1 : 0;
    //     try {
    //         const response = await api.put(`/todo/${todoId}`, { todoId: todoId, userId: searchParams.userId, todoName: data2, status : updateStatus })
    //         // console.log(response.data);
    //         setAllTodoList(todos => {
    //             return [
    //                 ...todos.map(todo => {
    //                     if(todo.todoId === parseInt(todoId)) {
    //                         return {
    //                             ...todo,
    //                             status: updateStatus
    //                         }
    //                     }
    //                     return todo;
    //                 })
    //             ]
    //         })

    //     } catch (e) {
    //         console.error(e);
    //     }
    // }

    // check Label 클릭시 status 갑 변경을 위한 메소드
    const handleCheckLabelClick = async (todoId, todoName, status) => {
        const updateTodoId = parseInt(todoId);
        const updateStatus = status ? 0 : 1;
        const putData = { todoId: updateTodoId, userId: searchParams.userId, todoName: todoName, status : updateStatus }
        try {
            const response = await api.put(`/todo/${todoId}`, putData);
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

    // 프로필 버튼 선택시 mypage 경로 변경을 위한 메소드
    const handleProfileClick = () => {
        alert("프로필을 미구현 단계입니다.");
    }

    // 로그아웃 버튼 선택시 로그아웃을 위한 메소드
    const handleLogoutClick = async () => {
        try{
            const response = await api.post(`/logout`);
            // console.log(response.data);
            alert(response.data);
            setAuthUserState({
                    userId: 0,
                    username: "",
                    name: "",
                    email: ""
                });
            // alert(response.data);
            navigate('/login');
        } catch (e) {
            console.error(e);
        }
        console.log(authUserState);
    }

    // 등록 버튼 선택시 등록 모달창 호출을 위한 메소드
    const handleRegisterButtonClick = () => {
        setRegisterModalOpen({
            userId: searchParams.userId,
            isOpen: true
        });
    }

    // 수정 버튼 선택시 수정 모달창 호출을 위한 메소드
    const handleModifyModalOpen = (todoId, todoName, status) => {
        setModifyModalOpen({
            todoId: todoId,
            userId: searchParams.userId,
            todoName: todoName,
            isOpen: true,
            status: status
        });
    }

    // 모달창을 닫기 위한 메소드
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

    const handleSearchOnKeyDown = (e) => {
        if(e.keyCode === 13) {
            handleSearchClick();
        }
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
                            <h1>Todo List</h1>
                        </div>
                        <div css={s.box1_sub3}>
                            <label onClick={handleProfileClick}>Profile</label>
                            <label onClick={handleLogoutClick}>Logout</label>
                        </div>
                    </div>
                    <div css={s.box2} >
                        <div css={s.box2_sub}>
                            <p css={mode === 1? s.box2_sub1 : ""} onClick={(e) => handleMenuClick(e, "allList")}>All</p>
                            <p css={mode === 2? s.box2_sub1 : ""} onClick={(e) => handleMenuClick(e, "completedList")}>Completed</p>
                            <p css={mode === 3? s.box2_sub1 : ""} onClick={(e) => handleMenuClick(e, "uncompletedList")}>Pending</p>
                        </div>
                        <p css={s.box2_sub_1}>
                            <button onClick={handleRegisterButtonClick} css={s.box2_sub4_button}>Add</button>
                        </p>
                    </div>
                    <div css={s.box3}>
                        <div css={s.box3_sub1}>
                            <div css={s.box3_sub1_span1}>
                                <input type='date' css={s.box3_sub1_date} name='updateDate' onChange={handleDateInputChange} value={searchParams.updateDate}/>
                            </div>
                            <div css={s.box3_sub1_span2}>
                                <input type="text" css={s.box3_sub1_input} name='todoName' onChange={handleSearchInputChange} onKeyDown={handleSearchOnKeyDown} value={searchParams.todoName} placeholder='search todo...' autoFocus/>
                                <button css={s.box3_sub1_button} onClick={handleSearchClick}>Search</button>
                            </div>
                        </div>
                        <div css={s.tableCotainer}>
                            <table css={s.box3_sub2}>
                                <thead>
                                    <div css={s.tableHeader}>
                                        <tr css={s.tableTr}>
                                            <th>Status</th>
                                            <th>ID</th>
                                            <th>Updata Date</th>
                                            <th>Todo</th>
                                            <th>Management</th>
                                        </tr>
                                    </div>
                                </thead>
                                <tbody>
                                    <div css={s.tableBody}>
                                        { !!todoList.length ?
                                            todoList.map((todo) =>
                                                <tr key={todo.todoId} css={todo.status === 1? s.selectedItem : s.tableItem} onClick={() => handleCheckLabelClick(todo.todoId, todo.todoName, todo.status)}>
                                                    <td>
                                                        <label htmlFor={todo.todoId} >
                                                            {todo.status === 1 ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked />}
                                                        </label>
                                                        <input 
                                                        type="checkbox"
                                                        name="check"
                                                        checked={todo.status === 1? true : false} 
                                                        // onChange={(e) => handleCheckedChange(e, todo.todoId, todo.todoName)}
                                                        value={todo.status}
                                                        id={todo.todoId}
                                                        readOnly
                                                        />
                                                        
                                                    </td>
                                                    <td>{todo.todoId}</td> 
                                                    <td>{todo.updateDate}</td>
                                                    <td>{todo.todoName}</td>
                                                    <td css={s.managementButton}>
                                                        <p>
                                                            <label onClick={() => handleModifyModalOpen(todo.todoId, todo.todoName, todo.status)}><PiNotePencilDuotone size="25" /></label>
                                                            <button>Update</button>
                                                        </p>
                                                        <p>
                                                            <label onClick={() => handleDeleteClick(todo.todoId)}><MdDeleteOutline size="25" /></label>
                                                            <button>Delete</button>
                                                        </p>
                                                    </td>
                                                </tr>
                                            ) : <span css={s.emptyRetulse}>"There is no information"</span>
                                        }
                                    </div>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    </>
    );
}

export default MainPage;