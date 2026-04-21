import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    outroDado: ''
  });

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setFormData(prev => ({
        ...prev,
        nome: savedUser.name,
        email: savedUser.email
      }));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonDados = JSON.stringify(formData, null, 2);
    console.log("Objeto JSON Gerado:", jsonDados);
    alert("Cadastro finalizado! O JSON foi gerado no console (F12).");
  };

  // Estilo comum para os inputs
  const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #475569',
    backgroundColor: '#0f172a',
    color: '#f8fafc',
    marginTop: '5px'
  };

  return (
    <div>
      <h2 style={{ color: '#38bdf8', marginBottom: '20px' }}>Cadastro</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left' }}>
        
        <div>
          <label style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Nome:</label>
          <input 
            type="text" 
            value={formData.nome} 
            readOnly 
            style={{ ...inputStyle, backgroundColor: '#1e293b', cursor: 'not-allowed', color: '#64748b' }}
          />
        </div>

        <div>
          <label style={{ fontSize: '0.9rem', color: '#94a3b8' }}>E-mail:</label>
          <input 
            type="email" 
            value={formData.email} 
            readOnly 
            style={{ ...inputStyle, backgroundColor: '#1e293b', cursor: 'not-allowed', color: '#64748b' }}
          />
        </div>

        <div>
          <label style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Telefone:</label>
          <input 
            type="tel" 
            placeholder="(00) 00000-0000"
            value={formData.telefone}
            onChange={(e) => setFormData({...formData, telefone: e.target.value})}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Informações Adicionais:</label>
          <textarea 
            placeholder="Conte algo mais..."
            value={formData.outroDado}
            onChange={(e) => setFormData({...formData, outroDado: e.target.value})}
            style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }}
          />
        </div>

        <button type="submit" style={{
          backgroundColor: '#38bdf8',
          color: '#0f172a',
          border: 'none',
          padding: '12px',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginTop: '10px'
        }}>
          Finalizar e Gerar JSON
        </button>
      </form>

      <button 
        onClick={() => navigate('/')} 
        style={{ 
          marginTop: '15px', 
          background: 'none', 
          border: 'none', 
          color: '#94a3b8', 
          textDecoration: 'underline', 
          cursor: 'pointer',
          fontSize: '0.9rem'
        }}
      >
        Cancelar
      </button>
    </div>
  );
}

export default Cadastro;