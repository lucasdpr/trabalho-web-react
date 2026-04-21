import React from 'react';
import { useNavigate } from 'react-router-dom';

function Apresentacao() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 style={{ color: '#38bdf8', marginBottom: '10px' }}>Desenvolvedor</h1>
      
      {/* Linha divisória sutil */}
      <div style={{ 
        height: '2px', 
        background: 'linear-gradient(90deg, transparent, #38bdf8, transparent)', 
        margin: '20px 0' 
      }}></div>
      
      <div style={{ 
        textAlign: 'left', 
        fontSize: '1.1rem', 
        color: '#f8fafc', 
        lineHeight: '1.8',
        backgroundColor: 'rgba(15, 23, 42, 0.3)',
        padding: '20px',
        borderRadius: '12px',
        marginBottom: '25px'
      }}>
        <p style={{ margin: '5px 0' }}><strong>Nome:</strong> Lucas Gabriel de Paula Rafael</p>
        <p style={{ margin: '5px 0' }}><strong>Matrícula:</strong> 20241000941</p>
        <p style={{ margin: '5px 0' }}><strong>Curso:</strong> Engenharia de Software</p>
        <p style={{ margin: '5px 0' }}><strong>Período:</strong> 5º Período</p>
      </div>

      <button 
        onClick={() => navigate('/')}
        style={{
          width: '100%',
          padding: '12px',
          borderRadius: '10px',
          border: '1px solid #38bdf8',
          backgroundColor: 'transparent',
          color: '#38bdf8',
          fontWeight: 'bold',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#38bdf8';
          e.target.style.color = '#0f172a';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = '#38bdf8';
        }}
      >
        Voltar para o Início
      </button>
    </div>
  );
}

export default Apresentacao;