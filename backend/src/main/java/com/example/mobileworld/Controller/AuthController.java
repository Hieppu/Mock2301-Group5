package com.example.mobileworld.Controller;

import com.example.mobileworld.dto.AccountDTO;
import com.example.mobileworld.dto.SignupDTO;
import com.example.mobileworld.service.IAccountService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/auth")
@Validated
@CrossOrigin("*")
public class AuthController {
    @Autowired
    private IAccountService accountService;

    @Autowired
    private ModelMapper modelMapper;

    @PostMapping(value = "/register")
    public ResponseEntity<?> signUp(@RequestBody SignupDTO acDTO) throws Exception {
        accountService.signUp(acDTO);
        return ResponseEntity.status(HttpStatus.OK).body("da gui link active ve email");
    }
    @PutMapping(value = "/register/active")
    public ResponseEntity<?> active(@RequestParam String token) throws Exception {
        accountService.active(token);
        return ResponseEntity.status(HttpStatus.OK).body("da gui link active ve email");
    }
}
