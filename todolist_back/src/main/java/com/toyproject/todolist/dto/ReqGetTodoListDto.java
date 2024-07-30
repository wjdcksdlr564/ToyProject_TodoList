package com.toyproject.todolist.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ReqGetTodoListDto {
    private String todoName;
    // private LocalDateTime updateDate;
}
