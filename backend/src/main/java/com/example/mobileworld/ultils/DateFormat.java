package com.example.mobileworld.ultils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateFormat {
	private final static SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

	public static Date ParseDate(String datetime) throws ParseException {

		return sdf.parse(datetime);
	}

	public static String toDateFormat(Date date) {
		return sdf.format(date);
	}
}
