package com.example.mobileworld.service;


import com.example.mobileworld.exception.ReCaptchaInvalidException;

public interface ICaptchaService {
    
    default void processResponse(final String response) throws ReCaptchaInvalidException {}
    
    default void processResponse(final String response, String action) throws ReCaptchaInvalidException {}
    
    String getReCaptchaSite();

    String getReCaptchaSecret();
}
