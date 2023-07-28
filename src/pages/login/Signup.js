import React, { useEffect, useState } from "react";
import basestyle from "../Base.module.css";
import registerstyle from "./Register.module.css";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

const Signup = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  
  const navigate = useNavigate();
  const [details,setDetails] = useState([]);
  useEffect(()=>{
      fetchData();
  },[]);

  const fetchData = async()=>{
      try{
      const response = await axios.get("http://127.0.0.1:2004/get");
      setDetails(response.data);
      console.log(response); 
      }
  catch(error){
     console.log("error fetching data");
  }
};

  const handleSubmit = (e) => {
      const data = {
          name:name,
          gmail: email,
          password: pass,
      } 
  
  if(name.trim() === ''|| email.trim()===''|| pass.trim()==='') { 
      alert('Please Enter Details');
  }
  if (details.some((user) => user.email === email)) {
      alert('User already exists.');
  }
  else if (!isStrongPassword(pass)) {
      alert("Please enter a strong password combination.");
  }
  else{
      axios.post("http://127.0.0.1:8181/api/v1/auth/register", data);
      console.log(data);
      navigate("/Login");
  }
  
};
const isStrongPassword = (pass) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(pass);
  const hasLowerCase = /[a-z]/.test(pass);
  const hasNumber = /\d/.test(pass);
  const hasSpecialChar = /[!@#$%^&*()]/.test(pass);

  return (
      pass.length >= minLength &&
    hasUpperCase &&
    hasLowerCase &&
    hasNumber &&
    hasSpecialChar
  );
};

  return (
    <>
      <div className={`${registerstyle.register} custom-signup`}>
        <form onSubmit={handleSubmit}>
          
          <h1>Sign up</h1>
          <label id="lab">Name</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <br/><br/>
          <p className={basestyle.error}></p>
          <label id="lab">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <br/>
          <br/>
          <p className={basestyle.error}></p>
          <label id="lab">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            required
          />
          <button className={basestyle.button_common} type="submit">
            Register
          </button>
        </form>
        <NavLink to="/login">Already registered? Login</NavLink>
      </div>
    </>
  );
};

export default Signup;