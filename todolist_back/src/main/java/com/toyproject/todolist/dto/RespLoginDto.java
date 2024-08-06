package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class RespLoginDto {
    private String message;
    private int status;
    private boolean success;

    public static RespLoginDto ofDefault(int status) {
        return RespLoginDto.builder()
                .message(status > 0 ? "SuccessFully Login!!" : "Failed Login check your info")
                .status(status)
                .success(status > 0)
                .build();
    }
}
