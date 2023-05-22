package com.example.mobileworld.ultils;


import org.springframework.util.DigestUtils;

import java.time.DateTimeException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class ValidateUtil {
	final static String EMAIL_REGEX = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\\\.[A-Za-z0-9-]+)*(\\\\.[A-Za-z]{2,})$"; // Định dạng lại email
	final static String OTP_REGEX = "[0-9]{6}"; // Định dạng lại mã OTP
//	final static String ACTIVATION_CODE_REGEX = ""; //regex activation code when register
	final static String DATE_FORMAT_REGEX = "dd/MM/yyyy"; // Định dạng lại ngày tháng năm như mẫu
	final static String PASSWORD_REGEX = "^(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{7,}$"; // Định dạng password phải có 1 chữ in hoa , 1 kí tự đặc biệt và có độ dài lớn hơn 7
	final static String USERNAME_REGEX = "^[a-zA-Z0-9_]{3,15}$";// Định dạng username
	final static String URL_REGEX = "^https?://.+"; // Định dạng URL

	public static boolean validateMail(String mail) {
		return mail.matches(EMAIL_REGEX);
	}

	public static boolean validateOtp(String otp) {
		return otp.matches(OTP_REGEX);
	}

	public static boolean validateDateFormat(String date) {
		try {
			DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_FORMAT_REGEX);
			LocalDate.parse(date, formatter);
			return true;
		} catch (DateTimeException e) {
			return false;
		}

	}

	public static String toMd5Password(String pass){
		return DigestUtils.md5Hex(pass);
	}

	public static boolean ValidatePassword(String password){
		return password.matches(PASSWORD_REGEX);
	}

	public static boolean ValidateUsername(String username){
		return username.matches(USERNAME_REGEX);
	}

	public static boolean ValidateUrl(String url){
		return url.matches(URL_REGEX);
	}
}
