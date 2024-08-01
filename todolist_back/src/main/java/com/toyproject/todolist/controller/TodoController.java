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

    @Autowired
    private TodoServiceImpl todoService;

    // 등록
    @PostMapping("/todo")
    public ResponseEntity<?> registerApi(@RequestBody ReqRegisterTodoDto reqDto) {
        log.info("{}", reqDto);
        return ResponseEntity.ok().body(todoService.registerTodo(reqDto));
    }

    // 삭제
    @DeleteMapping("/todo/{todoId}")
    public ResponseEntity<?> deleteApi(@PathVariable int todoId) {
        log.info("{}", todoId);
        return ResponseEntity.ok().body(todoService.deleteTodo(todoId));
    }

    // 수정
    @PutMapping("/todo/{todoId}")
    public ResponseEntity<?> modifyTodoNameApi(@PathVariable int todoId, @RequestBody ReqUpdateTodoDto reqDto) {
        log.info("{}", reqDto);
        return ResponseEntity.ok().body(todoService.modifyTodo(reqDto));
    }

    // 단건조회
    @GetMapping("/todo/{todoId}")
    public ResponseEntity<?> getApi(@PathVariable int todoId, ReqGetTodoDto reqDto) {
        log.info("{}", todoId, reqDto);
        return ResponseEntity.ok().body(todoService.getTodo(reqDto));
    }


    // 다건조회
    @GetMapping("/todos")
    public ResponseEntity<?> getListApi(ReqGetTodoListDto reqDto) {
        log.info("{}", reqDto);
        System.out.println(reqDto);
        return ResponseEntity.ok().body(todoService.getListApi(reqDto));
    }

    // 전체조회
    @GetMapping("/todolist")
    public ResponseEntity<?> getAllApi() {return ResponseEntity.ok().body(todoService.getAllTodo());
    }
}
