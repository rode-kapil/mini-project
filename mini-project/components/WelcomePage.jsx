import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [displayedText, setDisplayedText] = useState('');
  const [isTextComplete, setIsTextComplete] = useState(false);  // New state to track if text is fully displayed
  const navigate = useNavigate();

  const text = `Welcome ! ${user.firstName} ${user.lastName}, Are you ready for the Quiz session ?`;
  const delay=50;
  let timer = [];

  useEffect(() => {
    // let index = 0;
    console.log(text.length);
    text.split('').forEach((item,index)=>{
      const t = setTimeout(() => {
        setDisplayedText((prev)=>[...prev, item]);
      },index*50);
      timer.push(t);

    });
    setIsTextComplete(true);

    return () => {timer.forEach(clearTimeout)};

  }, [text]);

  return (
    <div className="container">
      <div className="form-container">
        <h1>{displayedText}</h1>
        <br /><br />
        {/* Show Start Quiz button when the text is fully displayed */}
        {isTextComplete && (
          <button onClick={() => navigate('/quiz')}>Start Quiz</button>
        )}
      </div>
    </div>
  );
}

export default WelcomePage;
