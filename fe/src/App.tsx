import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuestionDetail from './pages/QuestionDetail'; 
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question/:id" element={<QuestionDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
