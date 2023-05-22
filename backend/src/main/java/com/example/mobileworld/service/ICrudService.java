package com.example.mobileworld.service;

public interface ICrudService<T>{
    T save(T t);

    void delete(Long id);

    T findById(Long id);
}
