package com.neo.repository;

import com.neo.entity.UserInfo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserIndfoRepository extends JpaRepository<UserInfo, Long> {

}