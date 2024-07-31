package com.toyproject.todolist.service;
import com.toyproject.todolist.dto.*;
import com.toyproject.todolist.entity.Todo;
import com.toyproject.todolist.repository.TodoMapper;
import lombok.extern.log4j.Log4j2;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodoServiceImpl implements TodoService {

    private static final Logger log = LoggerFactory.getLogger(TodoServiceImpl.class);

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

    @Override
    public CommonRespDto modifyTodo(ReqUpdateTodoDto reqDto) {
        Todo todo = Todo.builder()
                    .todoId(reqDto.getTodoId())
                    .todoName(reqDto.getTodoName())
                    .status(reqDto.getStatus())
                    .build();
        return CommonRespDto.ofDefault(todoMapper.updateTodoName(todo));
    }

    // 단건 조회
    @Override
    public RespTodoDto getTodo(int todoId) {
        Todo todo = todoMapper.findTodoById(todoId);

        return RespTodoDto.builder()
                .todoId(todo.getTodoId())
                .todoName(todo.getTodoName())
                .status(todo.getStatus())
                .updateDate(todo.getUpdateDate())
                .build();
    }

    // 다건 조회
    @Override
    public List<RespTodoListDto> getListApi(ReqGetTodoListDto reqDto) {
        List<RespTodoListDto> respDtos = new ArrayList<>();

        // dto -> entity
        Todo todo = Todo.builder()
                .todoName(reqDto.getTodoName())
                //.updateDate(reqDto.getUpdateDate())
                .build();

        // db 에서 가져온 값
        List<Todo> todos = todoMapper.findTodoListByTodoId(todo);
        for(Todo to : todos) {
            RespTodoListDto dto = RespTodoListDto.builder()
                    .todoId(to.getTodoId())
                    .todoName(to.getTodoName())
                    .status(to.getStatus())
                    .updateDate(to.getUpdateDate())
                    .build();

            respDtos.add(dto);
        }

        return respDtos;
    }

    @Override
    public List<RespGetAllTodoDto> getAllTodo() {
        List<RespGetAllTodoDto> respAllDto = new ArrayList<>();

        // db에서 꺼내온 값을
        List<Todo> todos = todoMapper.findAllTodo();

        // dto로 변환
        for(Todo to: todos) {
            RespGetAllTodoDto dto = RespGetAllTodoDto.builder()
                    .todoId(to.getTodoId())
                    .todoName(to.getTodoName())
                    .status(to.getStatus())
                    .updateDate(to.getUpdateDate())
                    .build();
            respAllDto.add(dto);
        }

        return respAllDto;
    }
}
