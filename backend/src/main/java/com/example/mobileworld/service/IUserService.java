package com.example.mobileworld.service;

import com.example.mobileworld.entity.User;
import jakarta.mail.MessagingException;
import java.io.UnsupportedEncodingException;

public interface IUserService {
    public void generateOneTimePassword(User user) throws MessagingException, UnsupportedEncodingException;

    public void sendOTPEmail(User user, String OTP) throws MessagingException, UnsupportedEncodingException, javax.mail.MessagingException;

    public void clearOTP(User user);

    public User getUserByEmail(String email);

    public void updateUser2FA(User user, boolean status);
}
