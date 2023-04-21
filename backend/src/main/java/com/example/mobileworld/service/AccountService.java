package com.example.mobileworld.service;

import com.example.mobileworld.entity.Account;
import com.example.mobileworld.repository.IAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AccountService implements UserDetailsService {

    @Autowired
    private IAccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account ac = accountRepository.findByUsername(username);

        return new User(ac.getUsername(), ac.getPassword(), AuthorityUtils.createAuthorityList(ac.getRole().toString()));
    }
}
