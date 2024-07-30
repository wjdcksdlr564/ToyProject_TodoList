package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Builder
@Data
public class RespGetAllTodoDto {
    private int todoId;
    private String todoName;
    private int status;
    private LocalDateTime updateDate;
}
