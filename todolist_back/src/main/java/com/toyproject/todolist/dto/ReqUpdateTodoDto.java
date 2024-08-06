package com.toyproject.todolist.dto;

import lombok.Data;

@Data
public class ReqUpdateTodoDto {
    private int todoId;
    private int userId;
    private String todoName;
    private int status;
}
