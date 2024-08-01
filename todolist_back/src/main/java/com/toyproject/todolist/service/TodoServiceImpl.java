package com.toyproject.todolist.service;
import com.toyproject.todolist.dto.*;
import com.toyproject.todolist.entity.Todo;
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
                    .userId(reqDto.getUserId())
                    .todoName(reqDto.getTodoName())
                    .status(reqDto.getStatus())
                    .build();
        return CommonRespDto.ofDefault(todoMapper.updateTodoName(todo));
    }

    // 단건 조회
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


    // 다건조회
    @Override
    public List<RespTodoListDto> getListApi(ReqGetTodoListDto reqDto) {
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


    // 다건 조회
    /*@Override
    public List<RespTodoListDto> getListApi(@PathVariable int userId, @PathVariable String todoName, @PathVariable String updateDate) {
        List<RespTodoListDto> respDtos = new ArrayList<>();

        // db 에서 가져온 값
        List<Todo> todos = todoMapper.findTodoListByTodoNameAndDate(userId, todoName, updateDate);
        for(Todo to : todos) {
            RespTodoListDto dto = RespTodoListDto.builder()
                    .todoId(to.getTodoId())
                    .todoName(to.getTodoName())
                    .status(to.getStatus())
                    .updateDate(to.getUpdateDate().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))
                    .build();

            respDtos.add(dto);
        }

        return respDtos;
    }*/

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
