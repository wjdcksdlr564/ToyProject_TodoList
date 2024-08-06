package com.toyproject.todolist.dto;

import lombok.Data;

@Data
public class ReqGetTodoListDto {
    private int userId;
    private String todoName;
    private String updateDate;
}
