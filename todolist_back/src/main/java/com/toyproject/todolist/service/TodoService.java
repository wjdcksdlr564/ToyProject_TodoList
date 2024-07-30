package com.toyproject.todolist.service;


import com.toyproject.todolist.dto.*;

import java.util.List;

public interface TodoService {
    CommonRespDto registerTodo(ReqRegisterTodoDto reqDto);
    CommonRespDto deleteTodo(int todoId);
    CommonRespDto modifyTodo(ReqUpdateTodoDto reqDto);
    RespTodoDto getTodo(int todoId);
    List<RespTodoListDto> getListApi(ReqGetTodoListDto reqDto);
}
