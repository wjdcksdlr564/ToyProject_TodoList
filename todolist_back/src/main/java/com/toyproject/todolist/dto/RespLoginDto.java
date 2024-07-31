package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

import javax.servlet.http.HttpSession;

@Builder
@Data
public class RespLoginDto {
    private String message;
    private int status;
    private boolean success;

    public static RespLoginDto ofDefault(int status) {
        return RespLoginDto.builder()
                .message(status > 0 ? "로그인 성공" : "로그인 실패")
                .status(status)
                .success(status > 0)
                .build();
    }
}
