package com.toyproject.todolist.repository;

import com.toyproject.todolist.entity.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    User findUserByUsername(String username);
    User findUserPasswordByUserId(int userId);
    User findUserPasswordByUsername(int username);
    int updateUserByUserId(User user);
    int deleteUserByUserId(int userId);
}
