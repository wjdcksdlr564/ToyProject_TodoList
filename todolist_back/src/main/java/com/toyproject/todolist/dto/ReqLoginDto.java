package com.toyproject.todolist.dto;

import com.toyproject.todolist.entity.User;
import lombok.Builder;
import lombok.Data;

import javax.servlet.http.HttpSession;

@Builder
@Data
public class ReqLoginDto {
    private String username;
    private String password;
}
