package com.toyproject.todolist.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.expression.TypedValue;

@Configuration
public class TestConfig {

    @Bean
    public TypedValue typedValue() {
        return new TypedValue(null);
    }
}