package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CommonRespUserDto {
    private String message;
    private int count;
    private boolean success;

    public static CommonRespUserDto ofDefault(int count) {
        return CommonRespUserDto.builder()
                .message(count > 0 ? "Successfully Updated" : "Failed. check your information")
                .success(count > 0)
                .build();
    }
}

