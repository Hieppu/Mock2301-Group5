package com.example.mobileworld.configuration;

import jakarta.mail.internet.MimeMessage;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessagePreparator;

import java.io.InputStream;
@org.springframework.context.annotation.Configuration
public class Configuration {
    @Bean
    public JavaMailSender initJavaMailSender(){
        return new JavaMailSender() {

            @Override
            public javax.mail.internet.MimeMessage createMimeMessage() {
                return null;
            }

            @Override
            public javax.mail.internet.MimeMessage createMimeMessage(InputStream contentStream) throws MailException {
                return null;
            }

            @Override
            public void send(javax.mail.internet.MimeMessage mimeMessage) throws MailException {

            }

            @Override
            public void send(javax.mail.internet.MimeMessage... mimeMessages) throws MailException {

            }

            @Override
            public void send(MimeMessagePreparator mimeMessagePreparator) throws MailException {

            }

            @Override
            public void send(MimeMessagePreparator... mimeMessagePreparators) throws MailException {

            }

            @Override
            public void send(SimpleMailMessage simpleMessage) throws MailException {

            }

            @Override
            public void send(SimpleMailMessage... simpleMessages) throws MailException {

            }
        };
    }
}
