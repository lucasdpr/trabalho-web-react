import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Home from './pages/Home';
import Apresentacao from './pages/Apresentacao';
import Cadastro from './pages/Cadastro';

function App() {
  const clientId = "688882610281-60007selpnj3ulv66gfg6manilek822t.apps.googleusercontent.com";

  // Estilos injetados diretamente (CSS-in-JS)
  const styles = {
    container: {
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      margin: 0,
      padding: '20px'
    },
    card: {
      backgroundColor: '#1e293b',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      textAlign: 'center',
      width: '100%',
      maxWidth: '400px',
      border: '1px solid #334155',
      color: '#f8fafc'
    }
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div style={styles.container}>
        <Router>
          <div style={styles.card}>
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