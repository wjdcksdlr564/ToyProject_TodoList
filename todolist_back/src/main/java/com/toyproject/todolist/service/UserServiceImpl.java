package com.toyproject.todolist.service;
import com.toyproject.todolist.dto.*;
import com.toyproject.todolist.entity.User;
import com.toyproject.todolist.repository.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserMapper userMapper;

    @Override
    public RespLoginDto login(ReqLoginDto reqDto, HttpSession session){
//        System.out.println(reqDto);
        User userPassword = userMapper.findUserByUsername(reqDto.getUsername());
//        System.out.println(user);
        if(userPassword == null) {
            return RespLoginDto.ofDefault(0);
        } else if (!reqDto.getPassword().equals(userPassword.getPassword())) {
            return RespLoginDto.ofDefault(0);
        }
        User user = userMapper.findUserByUsername(reqDto.getUsername());
        user.setPassword("");
        System.out.println("user 비밀번호 제거" + user);

        session.setAttribute("authentication", user);

        return RespLoginDto.ofDefault(1);
    }

    @Override
    public CommonRespUserDto updateUser(ReqUpdateUserDto reqDto, HttpSession session) {

        // 1. 비밀번호 확인
        User userPassword = userMapper.findUserPasswordByUserId(reqDto.getUserId());
        if(!reqDto.getPassword().equals(userPassword.getPassword())) {
            return CommonRespUserDto.ofDefault(0);
        }

        // 2. User 정보 업데이트
        User newUser = User.builder()
                .userId(reqDto.getUserId())
                .password(reqDto.getPassword())
                .email(reqDto.getEmail())
                .build();
        int respDto = userMapper.updateUserByUserId(newUser);

        // 3. 세션 초기화
        session.invalidate();
        return CommonRespUserDto.ofDefault(respDto);
    }


    @Override
    public CommonRespUserDto deleteUser(ReqDeleteUserDto reqDto, HttpSession session) {

        // 1. 비밀번호 확인
        User userPassword = userMapper.findUserPasswordByUserId(reqDto.getUserId());
        if(!reqDto.getPassword().equals(userPassword.getPassword())) {
            return CommonRespUserDto.ofDefault(0);
        }

        // 2. User 정보 삭제
        int respDto = userMapper.deleteUserByUserId(reqDto.getUserId());

        // 3. 세션 초기화
        session.invalidate();
        return CommonRespUserDto.ofDefault(respDto);
    }
}
