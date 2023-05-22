package com.example.mobileworld.service.impl;


import com.example.mobileworld.dto.authentication.*;
import com.example.mobileworld.dto.MyUserDetails;
import com.example.mobileworld.entity.GmailMessage;
import com.example.mobileworld.entity.User;
import com.example.mobileworld.exception.UserAlreadyExistException;
import com.example.mobileworld.repository.RoleRepository;
import com.example.mobileworld.repository.UserRepository;
import com.example.mobileworld.service.IAuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

import javax.servlet.http.HttpSession;


@Service
public class AuthenticationService implements IAuthenticationService {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private EmailService emailService;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private  UserService userService;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public AuthenticationDTO login(AuthenticationDTOLogin dtoLogin) {
        Authentication auth = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(dtoLogin.getUsername(), dtoLogin.getPassword()));
        MyUserDetails details =(MyUserDetails) auth.getPrincipal();
        if (details.getUserDto().isOTPRequired()){
        userService.clearOTP(details.getUserDto());
        return new AuthenticationDTO(jwtService.generateToken(details));
        }
        if (details.getUserDto().is2FA()) {
            userService.generateOneTimePassword(details.getUserDto());
            return new AuthenticationDTO("A OTP code has been sent to your email");
        }
            return new AuthenticationDTO(jwtService.generateToken(details));
        }


    @Override
        public String getEmailCode (String email, HttpSession session){

            if (userRepository.findByEmail(email).isPresent()) {
                throw new UserAlreadyExistException("This email already have an account");
            }

            String code = OneTimePasswordUtil.OtpGenerator();
            session.setAttribute(DigestUtils.md5Hex(email), DigestUtils.md5Hex(code));
            sendVerificationCode(email, code);
            return "A verification code has been sent to your email " + code;
        }

    private void sendVerificationCode(String email, String code) {
        String subject = "Email Verification";
        String content = "Here your verification code :" + code;
        GmailMessage gmailMessage = new GmailMessage(email, subject, content);
        emailService.sendSimpleMail(gmailMessage);
    }

    @Override
    public boolean verifyEmail(EmailVerificationDTO dto, HttpSession session) {
        String md5Email = DigestUtils.md5Hex(dto.getEmail());
        String md5Code = DigestUtils.md5Hex(dto.getCode());
        if (session.getAttribute(md5Email) != null && session.getAttribute(md5Email).equals(md5Code)) {
            session.removeAttribute(md5Email);
            return true;
        }
        return false;
    }

    @Override
    public AuthenticationDTO register(AuthenticationDTORegister dto) {
        if (userRepository.findByEmail(dto.getEmail()).isPresent()) {
            throw new UserAlreadyExistException("This email already have an account");
        }
//            Role role = new Role(1L,"user","abc");
//            roleRepository.save(role);
            User user = new User(dto.getFirstName(), dto.getLastName(), dto.getUsername(), passwordEncoder.encode(dto.getPassword()), dto.getEmail());
            userRepository.save(user);

            MyUserDetails details = new MyUserDetails(user);
            return new AuthenticationDTO(jwtService.generateToken(details));
        }

    }

