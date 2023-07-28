package com.example.demo.Service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.User;
import com.example.demo.Repository.Userrepo;


@Service
public class Userservice {

	@Autowired
	private Userrepo repository;
	
	public Optional<User> getDetails(String email)
	{
		return repository.findById(email);
	}
	public String updateDetails(User user)
	{
		repository.save(user);
		return "Updated";
	}

}