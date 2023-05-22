package com.example.mobileworld.exception;

import com.vsii.extrade.exception.custorm.NotFoundException;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

@RestController
@ResponseBody
@Order(Ordered.HIGHEST_PRECEDENCE)
public class CustomeExceptionHandler {

    @ExceptionHandler(Exception.class)
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    public String handlerException(Exception ex , WebRequest wr){
        return ex.getLocalizedMessage();
    }

    @ExceptionHandler(NotFoundException.class)
    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    public String NotFoundHandlerString(Exception ex,WebRequest request){
        if (ex.getLocalizedMessage()!= null) {
            return ex.getLocalizedMessage();
        }
        return "Internal not found";
    }




}
