package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long Productid;
	private String productname;
	private  Long productprice;
	private Long productquantity;
	
	
	public Long getProductid() {
		return Productid;
	}
	public void setProductid(Long productid) {
		Productid = productid;
	}
	public String getProductname() {
		return productname;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
	public Long getProductprice() {
		return productprice;
	}
	public void setProductprice(Long productprice) {
		this.productprice = productprice;
	}
	public Long getProductquantity() {
		return productquantity;
	}
	public void setProductquantity(Long productquantity) {
		this.productquantity = productquantity;
	}
}