import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stores from './pages/Stores';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lojas" element={<Stores />} />
      </Routes>
    </Router>
  );
};

export default App;
