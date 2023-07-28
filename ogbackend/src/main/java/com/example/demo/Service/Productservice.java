package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Product;
import com.example.demo.Repository.Productrepo;

@Service
public class Productservice {

	@Autowired
	private Productrepo prorepo;
	
	
	
	public List<Product> GetProducts() {
		return prorepo.findAll();
	}
	public Product AddProduct(Product product) {
		return prorepo.save(product);
	}
	public Product EditProduct(Long id, Product product) {
		Product productx = prorepo.findById(id).orElse(null);
		if(productx != null) {
			productx.setProductname(product.getProductname());
			productx.setProductprice(product.getProductprice());
			productx.setProductquantity(product.getProductquantity());
			return prorepo.saveAndFlush(productx);
		}
		else {
			return null;
		}
	}
	public String DeleteProduct(Long id) {
		if((prorepo.findById(id).orElse(null))!=null) {
			prorepo.deleteById(id);
		return "user deleted "+id;
	}
		else {
			return "can't find user";
		}
	}
	}