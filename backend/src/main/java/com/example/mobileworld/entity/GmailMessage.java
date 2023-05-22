package com.example.mobileworld.entity;

import java.util.Random;

public class GmailMessage {

    private String to;
    private String subject;
    private String htmlContent;


    public GmailMessage(String to, String subject, String htmlContent) {
        this.to = to;
        this.subject = subject;
        this.htmlContent = htmlContent;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getHtmlContent() {
        return htmlContent;
    }

    public void setHtmlContent(String htmlContent) {
        this.htmlContent = htmlContent;
    }

    public String getPassword() {
        return generateString;
    }

//Tao random password
    int leftLimit = 97;

    int rightLimit = 122;

    int targetStringLength = 8;

    Random random = new Random();

    String generateString = random.ints(leftLimit, rightLimit +1)
            .limit(targetStringLength)
            .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
            .toString();
}
