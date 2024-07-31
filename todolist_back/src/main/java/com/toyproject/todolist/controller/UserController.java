package com.toyproject.todolist.controller;

import com.toyproject.todolist.dto.CommonRespDto;
import com.toyproject.todolist.dto.ReqLoginDto;
import com.toyproject.todolist.dto.RespLoginDto;
import com.toyproject.todolist.entity.User;
import com.toyproject.todolist.service.UserService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/v1")
@Log4j2
public class UserController {

    @Autowired
    UserService userService;

    // 로그인 요청
    @PostMapping("/login")
    public ResponseEntity<?> loginApi (@RequestBody ReqLoginDto reqDto, HttpServletRequest request) {
        HttpSession session = request.getSession();
        System.out.println("session : " + session);
        System.out.println("reqDto : " + reqDto);
        RespLoginDto respDto = userService.login(reqDto, session);
        System.out.println(respDto);
        if(respDto.isSuccess()) {
            return ResponseEntity.ok().body(respDto);
        } else {
            return ResponseEntity.badRequest().body(respDto);
        }
    }

    // 사용자 정보 요청
    @GetMapping("/user")
    public ResponseEntity<?> getUserApi(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        User user = (User) session.getAttribute("authentication");
        return ResponseEntity.ok().body(user);
    }

    // 로그아웃 요청
    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if(session != null) {
            session.invalidate();
        }
        return ResponseEntity.ok().body("로그아웃 성공");
    }
}
