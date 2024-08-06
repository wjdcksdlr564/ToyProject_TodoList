package com.toyproject.todolist.dto;

import lombok.Data;

@Data
public class ReqDeleteUserDto {
    private int userId;
    private String password;
}
