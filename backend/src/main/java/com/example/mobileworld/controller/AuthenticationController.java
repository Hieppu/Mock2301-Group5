package com.example.mobileworld.controller;

import com.example.mobileworld.dto.MyUserDetails;
import com.example.mobileworld.dto.authentication.*;
import com.example.mobileworld.repository.UserRepository;
import com.example.mobileworld.service.IUserService;
import com.example.mobileworld.service.impl.AuthenticationService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import javax.validation.constraints.Email;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
@Validated
public class AuthenticationController {

    private final Logger LOGGER = LoggerFactory.getLogger(getClass());

    @Autowired
    private IUserService userService;

    @Autowired
    private MessageSource messages;
    @Autowired
    private AuthenticationService authenticationService;
    @GetMapping(value = "/login")
    public AuthenticationDTO login(@RequestBody @Valid AuthenticationDTOLogin dtoLogin) {
        return authenticationService.login(dtoLogin);
    }

    @PutMapping(value="/update2FA")
    public String updateF2A(@AuthenticationPrincipal MyUserDetails details ,@RequestBody boolean status) {
            try {

                userService.updateUser2FA(details.getUserDto(),status);
                return "updated";
            } catch (RuntimeException exception){
                return "failed";
            }
        }
    @PostMapping("/email")
    public String sendVerificationCode(HttpSession session , @RequestBody @Email String email)  {
        return authenticationService.getEmailCode(email,session);
    }
    @PostMapping("/email-verify")
    public boolean verifyEmail(HttpSession session ,@RequestBody @Valid EmailVerificationDTO dto)  {
        return authenticationService.verifyEmail(dto,session);
    }

    @PostMapping("/register")
    public AuthenticationDTO register(@RequestBody @Valid AuthenticationDTORegister dto)  {
        return authenticationService.register(dto);
    }
}
