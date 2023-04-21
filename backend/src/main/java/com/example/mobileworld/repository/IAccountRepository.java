package com.example.mobileworld.repository;

import com.example.mobileworld.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface IAccountRepository extends JpaRepository<Account, Integer>, JpaSpecificationExecutor<Account> {

    public boolean existsByUsername(String username);

    public boolean existsByEmail(String email);

    public Account findByUsername(String username);

    public Account findByEmail(String email);

    public Account findByToken(String token);

}
