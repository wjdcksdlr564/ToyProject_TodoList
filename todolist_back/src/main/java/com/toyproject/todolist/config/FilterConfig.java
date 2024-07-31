package com.toyproject.todolist.config;

import com.toyproject.todolist.filter.SecurityFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfig {

    @Bean
    public FilterRegistrationBean<SecurityFilter> SecurityFilter() {
        FilterRegistrationBean<SecurityFilter> registrationBean = new FilterRegistrationBean<>();
        registrationBean.setFilter(new SecurityFilter());
        registrationBean.addUrlPatterns("/api/v1/user/*"); // 필터를 적용할 URL 패턴 설정
        registrationBean.addUrlPatterns("/api/v1/todo/*"); // 필터를 적용할 URL 패턴 설정
        registrationBean.addUrlPatterns("/api/v1/logout/*"); // 필터를 적용할 URL 패턴 설정
        return registrationBean;
    }
}