package com.toyproject.todolist.config;

import org.springframework.boot.web.servlet.server.CookieSameSiteSupplier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.session.web.http.CookieHttpSessionIdResolver;
import org.springframework.session.web.http.HeaderHttpSessionIdResolver;
import org.springframework.session.web.http.HttpSessionIdResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    /**************************************
     * Title : CorsRegistry Config        *
     * Writer : 김준일                     *
     * CreateDate : 2024-07-31            *
     * Content : Filter bean 추가          *
     *************************************/
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // 모든 요청 맵핑 주소에 대한 crossOrigin setting
        // 다른 곳에서 CrossOrigin 어노테이션 빼야 함
        registry.addMapping("/**")  // 요청 Mapping 주소
                .allowCredentials(true)
                .allowedHeaders("*")
                .allowedOrigins("http://localhost:3000")   //요청 baseURL
                .allowedMethods("*");   //요청 메소드
    }
}
