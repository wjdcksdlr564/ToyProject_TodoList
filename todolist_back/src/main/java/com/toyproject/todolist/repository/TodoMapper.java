package com.toyproject.todolist.repository;

import com.toyproject.todolist.entity.Todo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface TodoMapper {
    int save(Todo todo);
    int delete(int todoId);
    int updateTodoName(Todo todo);
    Todo findTodoById(int todoId);
    List<Todo> findTodoListByTodoNameAndDate(@Param("userId") int userId, @Param("todoName") String todoName, @Param("date") String date);
    List<Todo> findAllTodo();
}
