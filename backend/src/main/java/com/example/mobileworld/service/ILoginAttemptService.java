package com.example.mobileworld.service;

public interface ILoginAttemptService {
    void loginFailed(final String key);
    boolean isBlocked();
}
