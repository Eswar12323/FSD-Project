package com.example.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Product;
import com.example.demo.Service.Productservice;
@CrossOrigin("*")
@RequestMapping("/product")
@RestController
public class productcontroller {
	@Autowired
	private Productservice provice;
	
	
	@GetMapping("/getpro")
	public List<Product> GetProducts() {
		return provice.GetProducts();
	}
	@PostMapping("/addpro")
	public Product AddProduct(@RequestBody Product product) {
		return provice.AddProduct(product);
	}
	@PutMapping("/editpro/{id}")
	public Product EditProduct(@PathVariable Long id, @RequestBody Product product) {
		return provice.EditProduct(id, product);
	}
	@DeleteMapping("/deletepro/{id}")
	public String DeleteProduct(@PathVariable Long id) {
		return provice.DeleteProduct(id);
	}
}