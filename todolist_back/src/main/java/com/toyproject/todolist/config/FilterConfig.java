package com.toyproject.todolist.config;

import com.toyproject.todolist.filter.SecurityFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfig {

    @Autowired
    private SecurityFilter securityFilter;

    /**************************************
     * Title : Security Config            *
     * Writer : 권오광                     *
     * CreateDate : 2024-07-31            *
     * Content : Filter bean 추가          *
     *************************************/
    @Bean
    public FilterRegistrationBean<SecurityFilter> securityFilterRegistrationBean() {
        FilterRegistrationBean<SecurityFilter> registrationBean = new FilterRegistrationBean<>();
        registrationBean.setFilter(securityFilter);
        registrationBean.addUrlPatterns("/api/v1/user/*"); // 필터를 적용할 URL 패턴 설정
        registrationBean.addUrlPatterns("/api/v1/todo/*"); // 필터를 적용할 URL 패턴 설정
        registrationBean.addUrlPatterns("/api/v1/logout/*"); // 필터를 적용할 URL 패턴 설정
//        registrationBean.setOrder(1);   // 필터 실행 순서를 지정해 줄 수 있음. (숫자가 낮은 것 부터 실행)
        return registrationBean;
    }
}