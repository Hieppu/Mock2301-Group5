package com.example.mobileworld.service;

import com.vsii.extrade.entity.GmailMessage;

public interface IEmailService {
    public String sendSimpleMail(GmailMessage gmailMessage);

}
