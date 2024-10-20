import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../components/LoginPage.jsx';
import ChooseSubjectPage from '../components/ChooseSubjectPage.jsx';
import WelcomePage from '../components/WelcomePage.jsx';
import QuizPage from '../components/QuizPage.jsx';
import ResultPage from '../components/ResultPage.jsx';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/choose-subject" element={<ChooseSubjectPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;