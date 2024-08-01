package com.toyproject.todolist.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Todo {
    private int todoId;
    private int userId;
    private String todoName;
    private int status;
    private LocalDateTime createDate;
    private LocalDateTime updateDate;
}
