package com.gcs.t2_gcs.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gcs.t2_gcs.model.UserModel;

public interface IUserRepository extends JpaRepository<UserModel, UUID> {
    UserModel findByEmail(String email);
}
