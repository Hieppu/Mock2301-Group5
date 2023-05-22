package com.example.mobileworld.controller;

import com.vsii.extrade.entity.User;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AuthorityController {
    final private List<User> users = List.of(
            User.builder().id(1L).firstName("user 1").email("u1@gmail.com").build(),
            User.builder().id(2L).firstName("user 2").email("u2@gmail.com").build()
    );

    @GetMapping("/hello")
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok("hello is exception");
    }

    @GetMapping("user/all")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<List<User>> getCustomerList() {
        List<User> customers = this.users;
        return ResponseEntity.ok(customers);
    }

    @GetMapping("/user/{id}")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public ResponseEntity<User> getCustomerList(@PathVariable("id") String id) {
        List<User> users = this.users.stream().filter(user -> user.getId().equals(id)).toList();
        return ResponseEntity.ok(users.get(0));
    }
}
