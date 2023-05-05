package com.example.mobileworld.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class SignupDTO {
	@NotBlank(message = "Username can not be null")
	private String username;
	
	private String firstName;
	
	private String lastName;
	
	private String email;

	private String address;

	private String phoneNumber;

	private String password;
}
