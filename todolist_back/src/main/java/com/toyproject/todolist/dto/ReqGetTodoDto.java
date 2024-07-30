package com.toyproject.todolist.dto;

import com.toyproject.todolist.entity.Todo;
import lombok.Data;

@Data
public class ReqGetTodoDto {
    private int todoId;

    public Todo toEntity() {
        return Todo.builder()
                .todoId(todoId)
                .build();
    }
}
