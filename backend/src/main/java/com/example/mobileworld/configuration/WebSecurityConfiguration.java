package com.example.mobileworld.configuration;

import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.stereotype.Component;

@Component
@EnableWebSecurity
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {

//	@Autowired
//	private AccountService acService;
//
//	@Autowired
//	private AuthEntryPointJwt authEntryPoint;
//
//	@Override
//	protected void configure(AuthenticationManagerBuilder authBuilder) throws Exception {
//		authBuilder.userDetailsService(acService).passwordEncoder(new BCryptPasswordEncoder());
//	}
//
//	@Bean
//	public AuthTokenFilter createAuthTokenFiler() {
//		return new AuthTokenFilter();
//	}
//
//
//	@Bean
//	@Override
//	public AuthenticationManager authenticationManagerBean() throws Exception {
//		return super.authenticationManagerBean();
//	}
	
//	@Override
//	protected void configure(HttpSecurity http) throws Exception{
//		http
//		.cors()
//		.and()
//		.authorizeRequests()
//			.antMatchers("/api/auth/**").permitAll()
//			.antMatchers("/api/accounts/**").hasAnyAuthority("ADMIN")
//			.antMatchers("/api/accounts/**").permitAll()
//			.antMatchers("/api/accounts/forgot-password").permitAll()
//			.antMatchers("/api/accounts/reset-password").permitAll()
//			.antMatchers("/api/groups/**").hasAnyAuthority("ADMIN")
//		.anyRequest().authenticated()
//		.and()
//		.exceptionHandling().authenticationEntryPoint(authEntryPoint)
//		.and()
//		.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//		.and()
//		.httpBasic()
//		.and()
//		.csrf().disable();
//
//		http.addFilterBefore(createAuthTokenFiler(), UsernamePasswordAuthenticationFilter.class);
//	}
	public void  configure(WebSecurity webSecurity){
		webSecurity.ignoring().antMatchers("/api/auth/sign-up");
	}
}

