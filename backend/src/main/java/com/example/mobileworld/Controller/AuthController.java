package com.example.mobileworld.Controller;

import com.example.mobileworld.dto.AccountDTO;
import com.example.mobileworld.dto.SignupDTO;
import com.example.mobileworld.entity.Account;
import com.example.mobileworld.repository.IAccountRepository;
import com.example.mobileworld.service.AccountService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping(value = "api/auth")
@Validated
@CrossOrigin("*")
public class AuthController {
    @Autowired
    private AccountService accountService;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private IAccountRepository iAccountRepository;

    @PostMapping("/sign-up")
    @Transactional
    public ResponseEntity<?> registerUser(@RequestBody @Valid SignupDTO signupDTO) {
        System.out.println(signupDTO.toString());
        if (iAccountRepository.existsByUsername(signupDTO.getUsername())) {
            return ResponseEntity.badRequest().body("Error: Username is already taken!");
        }

        if (iAccountRepository.existsByEmail(signupDTO.getEmail())) {
            return ResponseEntity.badRequest().body("Error: Email is already taken!");
        }
        // chuyen accDTO thanh account
        Account ac = modelMapper.map(signupDTO, Account.class);

        // ma hoa pww
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String enCryptPassword = passwordEncoder.encode(signupDTO.getPassword());
        ac.setPassword(enCryptPassword);
        // status = not active
        ac.setStatus(Account.AccountStatus.NOT_ACTIVE);

        // acRepository.save(ac);

        // luu acc lai
        // Send mail active
        // acService.createAccount(ac);

        return ResponseEntity.ok().body("User registered successfully!");
    }

//    @RequestMapping(value = "/acctive", method = RequestMethod.POST)
//    public ResponseEntity<?> resetPassWord(@RequestParam(value = "newPassword") String newPassword,
//                                           @RequestParam(value = "token") String token) {
//        // tim acc thi token
//        Account account = iAccountRepository.findByToken(token);
//
//        // su status = active
//
//        iAccountRepository.save(account);
//        return ResponseEntity.status(HttpStatus.OK).build();
//    }
}
