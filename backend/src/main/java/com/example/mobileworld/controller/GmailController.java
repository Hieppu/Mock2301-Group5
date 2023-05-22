package com.example.mobileworld.controller;

import com.example.mobileworld.ultils.MailUtil;
import com.example.mobileworld.entity.GmailMessage;
import com.example.mobileworld.ultils.MailUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;

@RestController
@CrossOrigin("*")
public class GmailController {

    @Autowired
    private MailUtil gmailService;

    /**
     * This method handles an HTTP POST request for sending an email with HTML content using the REST API.
     * @param gmailMessage a GmailMessage object containing the email recipient, subject, and HTML content to be sent.
     * @return a ResponseEntity object containing the original GmailMessage object and the HTTP status of the request (in this case, 200 OK).
     * @throws MessagingException if there's an error with the email sending process.
     * @throws jakarta.mail.MessagingException if there's an error with the email sending process.
     */
    @PostMapping("/send")
    public ResponseEntity<GmailMessage> sendPasswordHtmlEmail(@RequestBody GmailMessage gmailMessage) throws MessagingException, jakarta.mail.MessagingException {
        gmailService.sendHtmlEmail(gmailMessage.getTo(), gmailMessage.getSubject(), gmailMessage.getHtmlContent());
        return new ResponseEntity<>(gmailMessage, HttpStatus.OK);
    }
}
