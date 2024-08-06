package com.toyproject.todolist.dto;

import lombok.Data;

@Data
public class ReqUpdateUserDto {
    private int userId;
    private String password;
    private String email;
}
