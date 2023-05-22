package com.example.mobileworld.exception;

import com.example.mobileworld.ultils.HttpUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.Locale;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
    @Autowired
    private HttpUtils httpUtils;
    @Autowired
    private MessageSource messageSource;
    /**
     * Exception handler for CommonException instances.
     * Builds and returns a ResponseEntity object containing a ResponseError object with the error code,
     * status code, and message populated from the MessageError object of the given exception.
     * @param exception the CommonException instance to handle
     * @param webRequest the WebRequest object associated with the exception
     * @return a ResponseEntity object with the ResponseError object and HTTP status code 400 (Bad Request)
     */
    @ExceptionHandler({CommonException.class})
    public ResponseEntity<ResponseError> handleCommonException(
            ICommonException exception,
            WebRequest webRequest) {

        ResponseError responseError = new ResponseError()
                .rpCode(exception.getMessageError().getCode())
                .rpStatus("400")
                .rpMessage(httpUtils
                        .populateMessage(
                                exception,
                                new Locale(httpUtils.getLanguage(webRequest)))
                        .getMessage());
        return ResponseEntity.status(Integer.parseInt(responseError.getRpStatus())).body(responseError);
    }
//    @Override
//    protected ResponseEntity<Object> handleMethodArgumentNotValid(
//            MethodArgumentNotValidException exception,
//            HttpHeaders headers,
//            HttpStatus status,
//            WebRequest request) {
//        ResponseError responseError = new ResponseError()
//                .rpCode("MethodArgumentNotValidException")
//                .rpStatus(status.toString())
//                .rpMessage(messageSource
//                        .getMessage("MethodArgumentNotValidException.message",
//                                null,
//                                "",
//                                new Locale(httpUtils.getLanguage(request))))
//                .detailMessage(exception.getLocalizedMessage());
//        return ResponseEntity
//                .status(status)
//                .body(responseError);
//    }
}
