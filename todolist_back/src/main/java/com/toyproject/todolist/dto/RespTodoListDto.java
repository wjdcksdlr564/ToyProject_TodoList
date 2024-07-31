package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class RespTodoListDto {
    private int todoId;
    private String todoName;
    private int status;
    private String updateDate;
}
