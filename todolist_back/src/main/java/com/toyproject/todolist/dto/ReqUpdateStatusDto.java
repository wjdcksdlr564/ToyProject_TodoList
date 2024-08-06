package com.toyproject.todolist.dto;

import lombok.Data;

@Data
public class ReqUpdateStatusDto {
    private int todoId;
    private int status;
}
