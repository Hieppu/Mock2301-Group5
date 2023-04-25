package com.example.mobileworld.service;


import com.example.mobileworld.dto.AccountDTO;
import com.example.mobileworld.dto.SignupDTO;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface IAccountService extends UserDetailsService {


    void signUp(SignupDTO acDTO) throws Exception;
    void active(String token) throws Exception;
}
