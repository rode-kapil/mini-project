import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from 'react-use';

function ResultPage() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [message, setMessage] = useState('');
  const score = localStorage.getItem('score');
  const totalQuestions = 25; 
  const navigate = useNavigate();
  const { width, height } = useWindowSize();

  // Determine the message and whether to show confetti based on score
  useEffect(() => {
    const scoreInt = parseInt(score, 10); // Convert score to an integer

    if (scoreInt > 20) {
      setMessage('Congratulations ! 🎉');
      setShowConfetti(true); 
    } else if (scoreInt < 10) {
      setMessage('Better luck next time! 😢👍');
      setShowConfetti(false); 
    } else {
      setMessage('Quiz Completed ! 👍');
      setShowConfetti(false); 
    }
  }, [score]);

  return (
    <div className="container">
      {showConfetti && <Confetti width={width} height={height} />}
      
      <div className="form-container">
        <br /><br />
        <h1>{message}</h1> 
        <br /><br />
        <h1>You scored {score} out of {totalQuestions}</h1>
        <br /><br />
        <button onClick={() => navigate('/quiz')}>Play Again</button>
        <button onClick={() => navigate('/choose-subject')}>Choose another subject</button>
        <button onClick={() => navigate('/')}>Log out</button>
        <br /><br />
      </div>
    </div>
  );
}

export default ResultPage;
