package com.example.mobileworld.service;

import com.example.mobileworld.dto.SignupDTO;
import com.example.mobileworld.entity.Account;
import com.example.mobileworld.repository.IAccountRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class AccountService implements IAccountService {

    @Autowired
    private IAccountRepository accountRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private JavaMailSender mailSender;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account ac = accountRepository.findByUsername(username);

        return new User(ac.getUsername(), ac.getPassword(), AuthorityUtils.createAuthorityList(ac.getRole().toString()));
    }

    @Override
    public void signUp(SignupDTO acDTO) throws Exception {
        if (accountRepository.existsByUsername(acDTO.getUsername())) {
            throw  new Exception("Error: Username is already taken!");
        }

        if (accountRepository.existsByEmail(acDTO.getEmail())) {
            throw  new Exception("Error: Email is already taken!");
        }
        // tao 1 account mơi
        Account ac = modelMapper.map(acDTO, Account.class);
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        ac.setPassword(encoder.encode(ac.getPassword()));
        ac.setRole(Account.AccountRole.USER);
        ac.setStatus(Account.AccountStatus.NOT_ACTIVE);
        ac.setToken(UUID.randomUUID().toString());
        accountRepository.save(ac);

        // gui email
        String text = "click vào đây: \n ";
        String link = text + "http://localhost:8888/api/accounts/register/active?token=" + ac.getToken();

        SimpleMailMessage passwordResetEmail = new SimpleMailMessage();
        passwordResetEmail.setTo(ac.getEmail());
        passwordResetEmail.setSubject("Active account");
        passwordResetEmail.setText(link);

        mailSender.send(passwordResetEmail);
    }

    @Override
    public void active(String token) throws Exception {
        // tim account theo token
        Account account = accountRepository.findByToken(token);
        if (account==null)
            throw  new Exception("Token ko ton tại");

        // update status cho account đó
        account.setToken("");
        account.setStatus(Account.AccountStatus.ACTIVE);
        accountRepository.save(account);
    }
}
