package com.example.mobileworld.service.impl;


import com.example.mobileworld.entity.GmailMessage;
import com.example.mobileworld.service.IEmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService implements IEmailService {

    @Autowired
    private JavaMailSender mailSender;


    @Override
    public String sendSimpleMail(GmailMessage details) {

        // Creating a simple mail message
        SimpleMailMessage mailMessage = new SimpleMailMessage();

        // Setting up necessary details
        mailMessage.setTo(details.getTo());
        mailMessage.setText(details.getHtmlContent());
        mailMessage.setSubject(details.getSubject());

        // Sending the mail
        mailSender.send(mailMessage);
        return "Mail Sent Successfully...";

    }


}
