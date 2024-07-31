package com.toyproject.todolist.repository;

import com.toyproject.todolist.entity.Todo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TodoMapper {
    int save(Todo todo);
    int delete(int todoId);
    int updateTodoName(Todo todo);
    Todo findTodoById(int todoId);
    List<Todo> findTodoListByTodoId(Todo todo);
    List<Todo> findAllTodo();
}
