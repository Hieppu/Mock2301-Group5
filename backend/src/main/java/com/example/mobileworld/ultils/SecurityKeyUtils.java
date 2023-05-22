package com.example.mobileworld.ultils;

import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class SecurityKeyUtils {
    /**
     * method generate security key for strategy
     * @return security key of strategy
     */
    public String generateUniqueKey(){
        return UUID.randomUUID().toString();
    }
}
