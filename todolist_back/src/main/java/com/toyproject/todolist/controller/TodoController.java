package com.toyproject.todolist.controller;

import com.toyproject.todolist.dto.ReqRegisterTodoDto;
import com.toyproject.todolist.entity.Todo;
import com.toyproject.todolist.service.TodoServiceImpl;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
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
}
