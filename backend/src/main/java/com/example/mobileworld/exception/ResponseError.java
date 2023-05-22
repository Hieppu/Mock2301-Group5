package com.example.mobileworld.exception;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ResponseError {
    @JsonProperty("code")
    private String rpCode;
    @JsonProperty("status")
    private String rpStatus;
    @JsonProperty("message")
    private String rpMessage;

    private String detailMessage;

    /**
     * Sets the response code for this ResponseError instance.
     * @param rpCode the response code to set
     * @return this ResponseError instance with the updated response code
     */
    public ResponseError rpCode(String rpCode) {
        this.rpCode = rpCode;
        return this;
    }
    /**

     * Sets the HTTP status code for this ResponseError instance.
     * @param rpStatus the HTTP status code to set
     * @return this ResponseError instance with the updated HTTP status code
     */
    public ResponseError rpStatus(String rpStatus) {
        this.rpStatus = rpStatus;
        return this;
    }
    /**

     * Sets the response message for this ResponseError instance.
     * @param rpMessage the response message to set
     * @return this ResponseError instance with the updated response message
     */
    public ResponseError rpMessage(String rpMessage) {
        this.rpMessage = rpMessage;
        return this;
    }
    /**
     * Sets the detailed error message for this ResponseError instance.
     * @param detailMessage the detailed error message to set
     * @return this ResponseError instance with the updated detailed error message
     */
    public ResponseError detailMessage(String detailMessage) {
        this.detailMessage = detailMessage;
        return this;
    }
}
