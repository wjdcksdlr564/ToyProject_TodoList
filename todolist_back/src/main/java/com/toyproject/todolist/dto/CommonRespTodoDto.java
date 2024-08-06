package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CommonRespTodoDto {
    private String message;
    private int count;
    private boolean success;

    public static CommonRespTodoDto ofDefault(int count) {
        return CommonRespTodoDto.builder()
                .message(count > 0 ? "Successful" : "Failed")
                .count(count)
                .success(count > 0)
                .build();
    }
}
