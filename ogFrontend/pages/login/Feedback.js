import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./api"

const Feedback = () => {
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    restaurant_Name: '',
    feedback: ''
  });

  const nav = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post("localhost:8081/addfed",formdata);
        if (res.status === 200) {
          alert('Feedback Added Successfully');
          return;
        }
      } catch (error) {
        console.log(error);
        alert('Failed to add Feedback. Please try again later.');
      }
    
      console.log(formdata);

  };

  return (
    <div className="down">
      <div className="login-form">
        <h2>FEEDBACK</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name"
            id="name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Enter your Email"
            id="email"
            onChange={handleChange}
          />
          <input
            type="name"
            placeholder="Enter the Restaurant Name"
            id="restaurant_Name"
            onChange={handleChange}
            required
          />
          <input
            type="name"
            placeholder="Enter Your FeedBack"
            id="feedback"
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
