package com.toyproject.todolist.service;
import com.toyproject.todolist.dto.ReqLoginDto;
import com.toyproject.todolist.dto.RespLoginDto;

import javax.servlet.http.HttpSession;

public interface UserService {
    RespLoginDto login(ReqLoginDto reqDto, HttpSession session);
}
