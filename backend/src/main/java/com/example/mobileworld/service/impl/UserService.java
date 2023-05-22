package com.example.mobileworld.service.impl;


import com.example.mobileworld.entity.User;
import com.example.mobileworld.repository.RoleRepository;
import com.example.mobileworld.repository.UserRepository;
import com.example.mobileworld.service.IUserService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.util.Date;

@Service
public class UserService implements IUserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    JavaMailSender mailSender;

    public static final String TOKEN_INVALID = "invalidToken";
    public static final String TOKEN_EXPIRED = "expired";
    public static final String TOKEN_VALID = "valid";

    @Override
    public void generateOneTimePassword(User user) {
        String OTP = OneTimePasswordUtil.OtpGenerator();
        String encodedOTP = passwordEncoder.encode(OTP);

        user.setOptLoginCode(encodedOTP);
        user.setOtpLoginCreatedDate(new Date());

        userRepository.save(user);

        try {
            sendOTPEmail(user, OTP);
        } catch (MessagingException | UnsupportedEncodingException | javax.mail.MessagingException exception ){
            exception.printStackTrace();
        }
    }

    @Override
    public void sendOTPEmail(User user, String OTP) throws MessagingException, UnsupportedEncodingException, javax.mail.MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setTo(user.getEmail());

        String subject = "Here's your One Time Password (OTP) - Expire in 5 minutes!";

        String content = "<p>Hello " + user.getFirstName() + "</p>"
                + "<p>For security reason, you're required to use the following "
                + "One Time Password to login:</p>"
                + "<p><b>" + OTP + "</b></p>"
                + "<br>"
                + "<p>Note: this OTP is set to expire in 5 minutes.</p>";

        helper.setSubject(subject);

        helper.setText(content, true);

        mailSender.send(message);
    }

    @Override
    public void clearOTP(User user) {
        user.setOptLoginCode(null);
        user.setOtpLoginCreatedDate(null);
        userRepository.save(user);
    }

    @Override
    public void updateUser2FA(User user, boolean status) {
        user.set2FA(status);
        userRepository.save(user);
    }
    @Override
    public User getUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }
    private boolean emailExists(final String email) {
        return userRepository.findByEmail(email) != null;
    }
}
