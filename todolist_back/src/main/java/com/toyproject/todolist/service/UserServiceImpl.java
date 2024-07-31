package com.toyproject.todolist.service;
import com.toyproject.todolist.dto.ReqLoginDto;
import com.toyproject.todolist.dto.RespLoginDto;
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
        System.out.println(reqDto);
        User user = userMapper.findUserByUsername(reqDto.getUsername());
        System.out.println(user);
        if(user == null) {
            return RespLoginDto.ofDefault(0);
        } else if (!reqDto.getPassword().equals(user.getPassword())) {
            return RespLoginDto.ofDefault(0);
        }

        System.out.println("session: " + session.getId());
        session.setAttribute("authentication", user);

        return RespLoginDto.ofDefault(1);
    }
}
