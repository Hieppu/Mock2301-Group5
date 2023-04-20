package com.example.mobileworld.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Account")
@Data
public class Account {
    @Column(name = "account_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int accountId;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "address")
    private String address;

    @Column(name = "phone_number")
    private int phoneNumber;

    @Column(name = "email")
    private String email;

    @Column(name = "avatar_url", length = 250, nullable = true)
    private String avatarUrl;

    @Column(name = "role", columnDefinition = "ENUM('ADMIN', 'USER')")
    @Enumerated(EnumType.STRING)
    private AccountRole role;

    @Column(name = "status", nullable = false)
    @Enumerated(EnumType.ORDINAL)
    private AccountStatus status;

    @Column(name = "join_date")
    private LocalDateTime joinDate;

    public enum AccountStatus {
        ACTIVE, NOT_ACTIVE;
    }

    public enum AccountRole {
        ADMIN, USER;

        public static AccountRole toEnum(String name) {
            for (AccountRole item : AccountRole.values()) {
                if (item.toString().equals(name))
                    return item;
            }
            return null;
        }
    }


}
