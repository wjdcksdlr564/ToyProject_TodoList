package com.toyproject.todolist.dto;

import lombok.Data;

@Data
public class ReqGetTodoDto {
    private int todoId;
    private int userId;
}
