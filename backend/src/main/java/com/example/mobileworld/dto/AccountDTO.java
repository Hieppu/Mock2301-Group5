package com.example.mobileworld.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class AccountDTO {

    private int accountId;

    private String username;

    private String password;

    private String firstName;

    private String lastName;

    private String address;

    private String phoneNumber;

    private String email;

    private String avatarUrl;

    private String role;

    private String status;

    private LocalDateTime joinDate;
}
