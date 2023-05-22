package com.example.mobileworld.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "`User`")
public class User {
    private static final long OTP_VALID_DURATION = 5 * 60 * 1000;   // 5 minutes

    @Column(name = "user_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "firstname", nullable = false, length = 50)
    private String firstName;
    @Column(name = "lastname", nullable = false, length = 50)
    private String lastName;
    @Column(name = "username", nullable = false, unique = true, length = 20)
    private String userName;
    @Column(name = "password", nullable = false)
    private String password;
    @Column(name = "email", nullable = false, unique = true, length = 20)
    private String email;
    @Column(name = "createDate")
    @Temporal(TemporalType.DATE)
    @CreationTimestamp
    private LocalDate createDate;
    @Column(name = "updateDate")
    @Temporal(TemporalType.DATE)
    private Date updateDate;
    @Column(name = "is2FA", nullable = false)
    private boolean is2FA;
    @Column(name = "otpLoginCreatedDate")
    @Temporal(TemporalType.DATE)
    private Date otpLoginCreatedDate;
    @Column(name = "otpLoginCode", length = 6)
    private String optLoginCode;
    @Column(name = "resendOTPLoginCount")
    private Integer resendOTPLoginCount;
    @ManyToMany(cascade=CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "UserRole",
            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "role_id")})
    private List<Role> roleList;

    public User(String firstName, String lastName, String userName, String password, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.email = email;
    }

    @PrePersist
    public void prePersistIs2FA(){
        this.is2FA = false;
    }

    public boolean isOTPRequired() {
        if (this.getOptLoginCode() == null) {
            return false;
        }

        long currentTimeInMillis = System.currentTimeMillis();
        long otpRequestedTimeInMillis = this.getOtpLoginCreatedDate().getTime();

        if (otpRequestedTimeInMillis + OTP_VALID_DURATION < currentTimeInMillis) {
            // OTP expires
            return false;
        }

        return true;
    }
}
