package com.neo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neo.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findById(long id);
    
    User findByToken(String token);
    
    User findByUserNameAndPassword(String userName, String password);
   
//    @RestResource(path="userName",rel="userName")
//    User findByUserName(@Param("userName") String userName);

    User findByUserName(String userName);
    Long deleteById(Long id);
}
