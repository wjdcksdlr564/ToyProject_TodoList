package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Builder
public class RespTodoDto {
    private int todoId;
    private String todoName;
    private int status;
    private LocalDateTime updateDate;
}
