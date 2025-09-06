import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AdminPanel from './components/AdminPanel';
import './App.css';

function App() {
  const [frameImage, setFrameImage] = useState<string>('https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800');

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={<LandingPage frameImage={frameImage} />} 
          />
          <Route 
            path="/admin" 
            element={<AdminPanel frameImage={frameImage} setFrameImage={setFrameImage} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;