package com.gcs.t2_gcs.service;

import org.springframework.stereotype.Service;

import com.gcs.t2_gcs.model.UserModel;
import com.gcs.t2_gcs.repository.IUserRepository;

@Service
public class UserService {

    private final IUserRepository userRepository;

    public UserService(IUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserModel register(String username, String email, String password) {
        UserModel user = new UserModel();
        user.setUsername(username);
        user.setEmail(email);
        user.setPassword(password);
        return userRepository.save(user);
    }

    public UserModel login(String email, String password) {
        UserModel user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }

    public UserModel findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}