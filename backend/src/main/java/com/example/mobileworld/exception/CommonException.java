package com.example.mobileworld.exception;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CommonException extends RuntimeException implements ICommonException {
    private MessageError messageError;

    /**
     * Sets the MessageError object for this CommonException instance.
     * @param messageError the MessageError object to set
     * @return this CommonException instance with the updated MessageError object
     */
    public CommonException messageError(MessageError messageError) {
        this.messageError = messageError;
        return this;
    }
}
