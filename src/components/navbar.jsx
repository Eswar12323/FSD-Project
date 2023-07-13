import React from "react";
import { Link } from "react-router-dom";
import { House, ShoppingCart,SignOut } from "phosphor-react";
import { UserPlus} from "phosphor-react";
import { Phone} from "phosphor-react";
import { ShoppingBagOpen } from "phosphor-react";
import { SignIn } from "phosphor-react";

import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"><House size={28}/> </Link>
        <Link to="/shop"> <ShoppingBagOpen size={28} /></Link>
        <Link to="/contact"> <Phone size={28} /> </Link>
        <Link to="/login"><SignIn size={32} /></Link>
        <Link to="/Signup"> 
        <UserPlus size={28} /> </Link>
        <Link to="/cart">
            <ShoppingCart size={28} />
        </Link>
        <Link to="/">
        <SignOut size={32} />
        </Link>
        
      </div>
    </div>
  );
};
