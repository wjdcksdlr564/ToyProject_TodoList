package com.toyproject.todolist.filter;
import com.toyproject.todolist.entity.User;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.*;
import javax.servlet.http.HttpFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@Log4j2
public class SecurityFilter extends HttpFilter implements Filter {


    /**************************************
     * Title : Security Filter            *
     * Writer : 권오광                     *
     * CreateDate : 2024-07-31            *
     * Content : HttpRes,resq 기반 세션 확인 *
     *************************************/
    @ResponseBody
    public void doFilter (ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;
        HttpSession session = httpRequest.getSession();
        log.info(" 시큐리티 필터 동작");
        System.out.println("session: " + session.getId());
        User user = (User) session.getAttribute("authentication");
        if(user == null && !httpRequest.getMethod().equals("OPTIONS")) {
            httpResponse.sendError(HttpServletResponse.SC_UNAUTHORIZED, "세션이 유효하지 않습니다.");  //status : 401 에러, 정상은 200 처리
            return ;
        }

        chain.doFilter(request, response);
    }
}
