package com.toyproject.todolist.service;
import com.toyproject.todolist.dto.CommonRespDto;
import com.toyproject.todolist.dto.ReqRegisterTodoDto;
import com.toyproject.todolist.repository.TodoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoMapper todoMapper;


    @Override
    public CommonRespDto registerTodo(ReqRegisterTodoDto reqDto) {
        return CommonRespDto.ofDefault(todoMapper.save(reqDto.toEntity()));
    }

    @Override
    public CommonRespDto deleteTodo(int todoId) {
        return CommonRespDto.ofDefault(todoMapper.delete(todoId));
    }
}
