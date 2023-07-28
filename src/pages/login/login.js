import React, { useState, useEffect } from "react";
import basestyle from "../Base.module.css";
import loginstyle from "./Login.module.css";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

const Login = ({ setUserState }) => {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  // const [error, setError] = useState("");
  const navigate = useNavigate();



  const handleSubmit = async(e) => {
    e.preventDefault();
      navigate("/");

      try {
        const response = await axios.post("http://localhost:8181/api/v1/auth/authenticate",{
          "gmail":email,
          "password":pass
        });
        console.log(response.data);
      } catch (error) {
        console.log("error fetching data");
      }
    };
  

  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  return (
    <div className={`${loginstyle.login} ${showAnimation ? "show" : ""} custom-login`}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label id="lab">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
         <br/><br/>
        <p className={basestyle.error}></p>
        <label id="lab">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={pass}
          required
        />
        {/* <p className={basestyle.error}>{error}</p> */}
        <button className={basestyle.button_common} type="submit">
          Login
        </button>
      </form>
      <NavLink to="/signup">Create an account</NavLink>
    </div>
  );
};

export default Login;