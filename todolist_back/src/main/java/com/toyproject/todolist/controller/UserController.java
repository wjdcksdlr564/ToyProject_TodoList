package com.toyproject.todolist.controller;

import com.toyproject.todolist.dto.*;
import com.toyproject.todolist.entity.User;
import com.toyproject.todolist.service.UserService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/v1")
@Log4j2
public class UserController {

    /**
     * 공통 사항 : USer 정보 수정, 삭제시 비밀번호 확인 및 세션 초기화 필요
     * */

    @Autowired
    UserService userService;

    /*************************************
     * Title : 로그인 요청                 *
     * Writer : 권오광                    *
     * CreateDate : 2024-07-31           *
     * Content : Session 기반 로그인 요청   *
     *************************************/
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

    /*************************************
     * Title : USER 정보 요청              *
     * Writer : 권오광                    *
     * CreateDate : 2024-07-31           *
     * Content : Session User 정보 요청   *
     *************************************/
    @GetMapping("/user")
    public ResponseEntity<?> getUserApi(HttpServletRequest request) {
        HttpSession session = request.getSession();
        User user = (User) session.getAttribute("authentication");
        System.out.println(user);
        return ResponseEntity.ok().body(user);
    }

    /*************************************
     * Title : 로그아웃 요청               *
     * Writer : 권오광                    *
     * CreateDate : 2024-07-31           *
     * Content : Session 초기화           *
     *************************************/
    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request) {
        HttpSession session = request.getSession();
        if(session != null) {
            session.invalidate();
        }
        return ResponseEntity.ok().body("successfully logout!");
    }

    /*************************************
     * Title : USER 정보 수정              *
     * Writer : 권오광                    *
     * CreateDate : 2024-08-05           *
     * Content : User_id 기반 User 삭제    *
     *************************************/
    @PostMapping("/user/{userId}")
    public ResponseEntity<?> updateUser(@PathVariable int userId, @RequestBody ReqUpdateUserDto reqDto, HttpServletRequest request) {
        HttpSession session = request.getSession();
        log.info("{}", userId, reqDto, session);
        CommonRespUserDto respDto = userService.updateUser(reqDto, session);
        System.out.println(respDto);
        if(respDto.isSuccess()) {
            return ResponseEntity.ok().body(respDto);
        } else {
            return ResponseEntity.badRequest().body(respDto);
        }
    }

    /*************************************
     * Title : USER 삭제                  *
     * Writer : 권오광                    *
     * CreateDate : 2024-08-05           *
     * Content : Session 초기화           *
     *************************************/
    @DeleteMapping("/user/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable int userId, @RequestBody ReqDeleteUserDto reqDto, HttpServletRequest request) {
        HttpSession session = request.getSession();
        log.info("{}", userId, reqDto, session);
        CommonRespUserDto respDto = userService.deleteUser(reqDto, session);
        System.out.println(respDto);
        if(respDto.isSuccess()) {
            return ResponseEntity.ok().body(respDto);
        } else {
            return ResponseEntity.badRequest().body(respDto);
        }
    }

    /*************************************
     * Title : USER 등록                  *
     * Writer : 권오광                    *
     * CreateDate : 2024-08-05           *
     * Content : 신규 회원 등록             *
     *************************************/

    //TBC
}
