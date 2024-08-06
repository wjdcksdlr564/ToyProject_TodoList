package com.toyproject.todolist.service;
import com.toyproject.todolist.dto.*;

import javax.servlet.http.HttpSession;

public interface UserService {
    RespLoginDto login(ReqLoginDto reqDto, HttpSession session);
    CommonRespUserDto updateUser(ReqUpdateUserDto reqDto, HttpSession session);
    CommonRespUserDto deleteUser(ReqDeleteUserDto reqDto, HttpSession session);
}
