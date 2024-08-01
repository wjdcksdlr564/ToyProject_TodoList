package com.toyproject.todolist.dto;

import com.toyproject.todolist.entity.Todo;
import lombok.Data;

@Data
public class ReqGetTodoDto {
    private int todoId;
    private int userId;
}
