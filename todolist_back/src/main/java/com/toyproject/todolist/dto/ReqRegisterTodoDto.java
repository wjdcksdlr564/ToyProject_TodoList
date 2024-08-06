package com.toyproject.todolist.dto;

import com.toyproject.todolist.entity.Todo;
import lombok.Data;

@Data
public class ReqRegisterTodoDto {
    private int userId;
    private String todoName;

    public Todo toEntity() {
        return Todo.builder()
                .userId(userId)
                .todoName(todoName)
                .build();
    }
}
