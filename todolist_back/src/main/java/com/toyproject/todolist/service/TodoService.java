package com.toyproject.todolist.service;


import com.toyproject.todolist.dto.*;

import java.util.List;

public interface TodoService {
    CommonRespTodoDto registerTodo(ReqRegisterTodoDto reqDto);
    CommonRespTodoDto deleteTodo(int todoId);
    CommonRespTodoDto modifyTodo(ReqUpdateTodoDto reqDto);
    RespTodoDto getTodo(ReqGetTodoDto reqDto);
    List<RespTodoListDto> getTodoList(ReqGetTodoListDto reqDto);
    List<RespGetAllTodoDto> getAllTodoList();
}
