package com.toyproject.todolist.dto;

import com.toyproject.todolist.entity.Todo;
import lombok.Data;

@Data
public class ReqRegisterTodoDto {
    private String todoName;

    public Todo toEntity() {
        return Todo.builder()
                .todoName(todoName)
                .build();
    }
}
