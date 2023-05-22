package com.example.mobileworld.dto;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import com.example.mobileworld.entity.Role;
import com.example.mobileworld.entity.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class MyUserDetails implements UserDetails {

    private User user;

    public MyUserDetails() {
    }

    public MyUserDetails(User user) {
        this.user = user;
    }

    public User getUserDto() {
        return user;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if(!user.getRoleList().isEmpty()){
            List<SimpleGrantedAuthority> authorityList = new ArrayList<>();
            for (Role role: user.getRoleList()) {
                authorityList.add(new SimpleGrantedAuthority(role.getName()));
            }
            return authorityList;
        }
    return null;
    }

    @Override
    public String getPassword() {
        // TODO Auto-generated method stub
        if (user.isOTPRequired()) {
            return user.getOptLoginCode();
        }
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        // TODO Auto-generated method stub
        return user.getUserName() || user.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isEnabled() {
        // TODO Auto-generated method stub
        return true;
    }

}

