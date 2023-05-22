package com.example.mobileworld.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.vsii.extrade.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class UserDto {

    @NotNull
    @Size(min = 1, message = "{Size.userDto.firstName}")
    private String firstName;

    @NotNull
    @Size(min = 1, message = "{Size.userDto.lastName}")
    private String lastName;

    @NotNull
    @Size(min = 1, message = "{Size.userDto.password}")
    private String password;

    @NotNull
    @Size(min = 1, message = "{Size.userDto.email}")
    private String email;

    @NotNull
    @Size(min = 1, message = "{Size.userDto.username}")
    private String username;
    private Date otpLoginCreatedDate;
    private String optLoginCode;
    private Integer resendOTPLoginCount;
    private boolean isUsing2FA;

    private List<Role> roleList;

    public UserDto(String password, String email, String username, Date otpLoginCreatedDate, String optLoginCode, Integer resendOTPLoginCount, boolean isUsing2FA, List<Role> roleList) {
        this.password = password;
        this.email = email;
        this.username = username;
        this.otpLoginCreatedDate = otpLoginCreatedDate;
        this.optLoginCode = optLoginCode;
        this.resendOTPLoginCount = resendOTPLoginCount;
        this.isUsing2FA = isUsing2FA;
        this.roleList = roleList;
    }

    public UserDto(String password, String email, String userName, Date otpLoginCreatedDate, Integer resendOTPLoginCount, boolean fa, List<Role> roleList) {
    }



}
