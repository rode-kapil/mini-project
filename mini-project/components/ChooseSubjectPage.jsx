import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ChooseSubjectPage.css";

function ChooseSubjectPage(){
  const [subject, setSubject] = useState('');
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleNext = () => {
    if (!subject) {
      alert('Please select a subject!');
      return;
    }
    localStorage.setItem('subject', subject);
    navigate('/welcome');
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Hello, {user.firstName} {user.lastName} ....!</h1>
        <br /><br />
        <h1>Choose a Subject</h1>
        <br /><br />
        <select onChange={(e) => setSubject(e.target.value)} required>
          <option value="">Select Subject</option>
          <option value="English">Electronic and Device Circuits</option>
          <option value="Math">Integrated Circuit Application</option>
          <option value="Science">Digital Circuit and Microprocessor</option>
        </select>
        <br /><br />
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default ChooseSubjectPage;
