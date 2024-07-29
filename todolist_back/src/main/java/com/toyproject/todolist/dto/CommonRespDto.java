package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CommonRespDto {
    private String message;
    private int count;
    private boolean success;

    public static CommonRespDto ofDefault(int count) {
        return CommonRespDto.builder()
                .message(count > 0 ? "Successful" : "Failed")
                .count(count)
                .success(count > 0)
                .build();
    }
}
