import React from 'react';
import { useNavigate } from 'react-router-dom';

function Apresentacao() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Desenvolvedor</h1>
      <div className="divider" />
      <div className="info">
        <p><strong>Nome:</strong> Lucas Gabriel de Paula Rafael</p>
        <p><strong>Matrícula:</strong> 20241000941</p>
        <p><strong>Curso:</strong> Engenharia de Software</p>
        <p><strong>Período:</strong> 5º Período</p>
      </div>
      <button className="btn btn-outline" onClick={() => navigate('/')}>
        Voltar para o Início
      </button>
    </div>
  );
}

export default Apresentacao;
