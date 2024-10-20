import React, { useState } from 'react';
import "./LoginPage.css";
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: 'male',
    mobile: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check for empty fields
    if (!user.firstName || !user.lastName || !user.email || !user.mobile) {
      alert('Please fill in all the fields!');
      return;
    }

    // Save user data and navigate to ChooseSubjectPage if all fields are filled
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/choose-subject');
  };

  return (
    <div className="container">
      <div className="form-container">
        <center><h1>USER LOGIN</h1></center>
            
            <hr />
            <br />
            <br />
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email address" onChange={handleChange} required />
          <input type="tel" name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
          <select id='gender' name="gender" onChange={handleChange} required>
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <center><button type="submit">Login</button></center>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
