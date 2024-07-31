package com.toyproject.todolist.repository;

import com.toyproject.todolist.entity.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    User findUserByUsername(String username);
}
