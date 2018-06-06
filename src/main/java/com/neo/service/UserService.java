package com.neo.service;

import com.neo.entity.User;

import java.util.List;

public interface UserService {

    public List<User> getUserList();
    
    public boolean checkUserExits(String userName);
    
    public User findUserById(long id);
    
    public User findUserByToken(String id);
    
    public User findByuserNameAndpassword(String userName, String password);

    public void save(User user);

    public void edit(User user);

    public void delete(long id);


}
