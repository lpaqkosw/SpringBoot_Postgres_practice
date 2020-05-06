package muidb.muidb.jwt;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class Test {
	@RequestMapping({ "/hello" })
	public String firstPage(HttpServletRequest request, HttpServletResponse response) {
        JwtUtil parse = new JwtUtil();
        final String requestTokenHeader = request.getHeader("Authorization");
        String test = parse.getUsernameFromToken(requestTokenHeader.substring(7));
		return test;
	}
}