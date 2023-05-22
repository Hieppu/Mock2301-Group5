package com.example.mobileworld.ultils;


import com.example.mobileworld.exception.ICommonException;
import com.example.mobileworld.exception.MessageError;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.WebRequest;

import java.util.Locale;
import java.util.Map;

@Component
public class HttpUtils {
    @Autowired
    private MessageSource messageSource;

    /**
     * To populate messages from a properties file to an ICommonException object
     * @param ex     the ICommonException object to populate the message from
     * @param locale the Locale object to use for localization (or null for default)
     * @return a MessageError object with the populated error message and code
     */
    public MessageError populateMessage(ICommonException ex, Locale locale) {
        if (locale == null) {
            locale = new Locale("vi", "VI");
        }
        if (ex != null) {
            MessageError messageError = ex.getMessageError();

            String message = messageError.getMessage();
            String code = messageError.getCode();
            Object params = messageError.getParam();

            if (message == null || message.isEmpty()) {
                String defaultMessage = messageSource
                        .getMessage("defaultMessage", new Object[]{params},
                                "", locale);
                messageError.message(
                        messageSource
                                .getMessage(code, new Object[]{params},
                                        defaultMessage, locale));
            }
            return messageError;
        } else {
            try {
                throw new Exception();
            } catch (Exception exception) {
                System.out.println("error!!!");
            }
        }
        return new MessageError();
    }

    /**
     * Returns the language code from the "lang" header of the given WebRequest.
     * @param webRequest the WebRequest to get the language code from
     * @return the language code as a string
     */
    public String getLanguage(WebRequest webRequest) {
        return webRequest.getHeader("lang") != null ? webRequest.getHeader("lang") : "en";
    }

    ;

    public String getLanguage(Map<String, String> headers) {
        return headers.get("lang") != null ? headers.get("lang") : "vi";
    }

    ;
}

