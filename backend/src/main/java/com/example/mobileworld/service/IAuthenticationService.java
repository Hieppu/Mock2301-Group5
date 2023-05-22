package com.example.mobileworld.service;

import com.example.mobileworld.dto.authentication.*;

import javax.servlet.http.HttpSession;
import java.io.UnsupportedEncodingException;


public interface IAuthenticationService {
     AuthenticationDTO login(AuthenticationDTOLogin dtoLogin) ;

//    AuthenticationDTO loginOtp(AuthenticationDTOLoginWithOtp dtoLogin) ;
    String getEmailCode(String email , HttpSession session);
     boolean verifyEmail(EmailVerificationDTO dto , HttpSession session);
     AuthenticationDTO register(AuthenticationDTORegister dto );

}
