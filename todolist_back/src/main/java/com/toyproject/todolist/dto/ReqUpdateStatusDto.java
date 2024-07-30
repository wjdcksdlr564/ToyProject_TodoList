package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ReqUpdateStatusDto {
    private int todoId;
    private int status;
}
