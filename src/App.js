import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Home from './pages/Home';
import Apresentacao from './pages/Apresentacao';
import Cadastro from './pages/Cadastro';

function App() {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID ||
    "688882610281-60007selpnj3ulv66gfg6manilek822t.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="app">
        <Router>
          <div className="card">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dupla" element={<Apresentacao />} />
              <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
          </div>
        </Router>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;