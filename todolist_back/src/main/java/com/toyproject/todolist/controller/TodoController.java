package com.toyproject.todolist.controller;

import com.toyproject.todolist.dto.ReqGetTodoDto;
import com.toyproject.todolist.dto.ReqGetTodoListDto;
import com.toyproject.todolist.dto.ReqRegisterTodoDto;
import com.toyproject.todolist.dto.ReqUpdateTodoDto;
import com.toyproject.todolist.service.TodoServiceImpl;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@Log4j2
public class TodoController {
    /**
     * 공통 사항 : USER_ID에 맞게 DB CRUD 필요
     * */

    @Autowired
    private TodoServiceImpl todoService;

    /*************************************
     * Title : TODO 등록                  *
     * Writer : 최단비                    *
     * CreateDate : 2024-07-30           *
     * Content : TODO 객체 DB 등록         *
     *************************************/
    @PostMapping("/todo")
    public ResponseEntity<?> registerApi(@RequestBody ReqRegisterTodoDto reqDto) {
        log.info("{}", reqDto);
        return ResponseEntity.ok().body(todoService.registerTodo(reqDto));
    }


    /*************************************
     * Title : TODO 단건 조회              *
     * Writer : 최단비                    *
     * CreateDate : 2024-07-31           *
     * Content : ID 기반 단건 조회         *
     *************************************/
    @GetMapping("/todo/{todoId}")
    public ResponseEntity<?> getApi(@PathVariable int todoId, ReqGetTodoDto reqDto) {
        log.info("{}", todoId, reqDto);
        return ResponseEntity.ok().body(todoService.getTodo(reqDto));
    }

    /**************************************************
     * Title : TODO 다건 조회                           *
     * Writer : 최단비                                  *
     * CreateDate : 2024-07-31                         *
     * Content : TODO_NAME, UPDATE_DATE 기반 다건 조회   *
     **************************************************/
    @GetMapping("/todos")
    public ResponseEntity<?> getListApi(ReqGetTodoListDto reqDto) {
        log.info("{}", reqDto);
        System.out.println(reqDto);
        return ResponseEntity.ok().body(todoService.getTodoList(reqDto));
    }

    /**************************************************
     * Title : TODO 전체 조회                           *
     * Writer : 최단비                                  *
     * CreateDate : 2024-07-31                         *
     * Content : TODO_NAME, UPDATE_DATE 기반 다건 조회   *
     **************************************************/
    @GetMapping("/todolist")
    public ResponseEntity<?> getAllApi() {return ResponseEntity.ok().body(todoService.getAllTodoList());
    }

    /**************************************************
     * Title : TODO 삭제                                *
     * Writer : 최단비                                  *
     * CreateDate : 2024-07-30                         *
     * Content : TODO_NAME 기반 튜플 삭제                 *
     **************************************************/
    @DeleteMapping("/todo/{todoId}")
    public ResponseEntity<?> deleteApi(@PathVariable int todoId) {
        log.info("{}", todoId);
        return ResponseEntity.ok().body(todoService.deleteTodo(todoId));
    }

    /**************************************************
     * Title : TODO 수정                                *
     * Writer : 최단비                                  *
     * CreateDate : 2024-07-30                         *
     * Content : TODO_ID 기반 Status, Todo_Name 수정    *
     **************************************************/
    @PutMapping("/todo/{todoId}")
    public ResponseEntity<?> modifyTodoApi(@PathVariable int todoId, @RequestBody ReqUpdateTodoDto reqDto) {
        log.info("{}", reqDto);
        return ResponseEntity.ok().body(todoService.modifyTodo(reqDto));
    }

}
