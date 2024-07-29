package com.toyproject.todolist.service;


import com.toyproject.todolist.dto.CommonRespDto;
import com.toyproject.todolist.dto.ReqRegisterTodoDto;

public interface TodoService {

    CommonRespDto registerTodo(ReqRegisterTodoDto reqDto);
    CommonRespDto deleteTodo(int todoId);
}
