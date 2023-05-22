package com.example.mobileworld.exception;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MessageError {
    private String code;
    private String message;
    private Object param;

    /**
     * Sets the error code for this MessageError instance.
     * @param code the error code to set
     * @return this MessageError instance with the updated error code
     */
    public MessageError code(String code) {
        this.code = code;
        return this;
    }
    /**
     * Sets the error message for this MessageError instance.
     * @param message the error message to set
     * @return this MessageError instance with the updated error message
     */
    public MessageError message(String message) {
        this.message = message;
        return this;
    }
    /**
     * Sets the parameter object for this MessageError instance.
     * @param param the parameter object to set
     * @return this MessageError instance with the updated parameter object
     */
    public MessageError param(Object param) {
        this.param = param;
        return this;
    }
}
