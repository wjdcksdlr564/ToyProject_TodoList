package com.toyproject.todolist.service;
import com.toyproject.todolist.dto.*;
import com.toyproject.todolist.entity.Todo;
import com.toyproject.todolist.repository.TodoMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class TodoServiceImpl implements TodoService {

    private static final Logger log = LoggerFactory.getLogger(TodoServiceImpl.class);

    @Autowired
    private TodoMapper todoMapper;


    // Todo 등록
    @Override
    public CommonRespTodoDto registerTodo(ReqRegisterTodoDto reqDto) {
        return CommonRespTodoDto.ofDefault(todoMapper.save(reqDto.toEntity()));
    }

    // Todo 삭제
    @Override
    public CommonRespTodoDto deleteTodo(int todoId) {
        return CommonRespTodoDto.ofDefault(todoMapper.delete(todoId));
    }

    // Todo 수정
    @Override
    public CommonRespTodoDto modifyTodo(ReqUpdateTodoDto reqDto) {
        Todo todo = Todo.builder()
                    .todoId(reqDto.getTodoId())
                    .userId(reqDto.getUserId())
                    .todoName(reqDto.getTodoName())
                    .status(reqDto.getStatus())
                    .build();
        return CommonRespTodoDto.ofDefault(todoMapper.updateTodoName(todo));
    }

    // Todo 단건 조회
    @Override
    public RespTodoDto getTodo(ReqGetTodoDto reqDto) {
        Todo todo = todoMapper.findTodoById(reqDto.getTodoId(), reqDto.getUserId());

        return RespTodoDto.builder()
                .todoId(todo.getTodoId())
                .todoName(todo.getTodoName())
                .status(todo.getStatus())
                .updateDate(todo.getUpdateDate())
                .build();
    }


    // Todo 다건 조회
    @Override
    public List<RespTodoListDto> getTodoList(ReqGetTodoListDto reqDto) {
//    public List<RespTodoListDto> getListApi(int userId, String todoName, String updateDate) {

//        ReqGetTodoListDto reqDto = ReqGetTodoListDto.builder()
//                .userId(userId)
//                .todoName(todoName)
//                .updateDate(updateDate)
//                .build();

        List<RespTodoListDto> respDtos = new ArrayList<>();

        // db 에서 가져온 값
        List<Todo> todos = todoMapper.findTodoListByTodoNameAndDate(reqDto.getUserId(), reqDto.getTodoName(), reqDto.getUpdateDate());
        for(Todo to : todos) {
            RespTodoListDto dto = RespTodoListDto.builder()
                    .todoId(to.getTodoId())
                    .todoName(to.getTodoName())
                    .status(to.getStatus())
                    .updateDate(to.getUpdateDate().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))
                    .build();

            respDtos.add(dto);
        }

        System.out.println(todos);

        return respDtos;
    }

    // Todo 전체 조회
    @Override
    public List<RespGetAllTodoDto> getAllTodoList() {
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
