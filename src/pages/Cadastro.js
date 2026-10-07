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
    let savedUser = null;
    try { savedUser = JSON.parse(localStorage.getItem('user')); } catch { /* dado corrompido */ }
    if (!savedUser) {
      navigate('/');
      return;
    }
    setFormData(prev => ({
      ...prev,
      nome: savedUser.name,
      email: savedUser.email
    }));
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonDados = JSON.stringify(formData, null, 2);
    console.log("Objeto JSON Gerado:", jsonDados);
    alert("Cadastro finalizado! O JSON foi gerado no console (F12).");
  };

  return (
    <div>
      <h2>Cadastro</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input id="nome" className="field" type="text" value={formData.nome} readOnly />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input id="email" className="field" type="email" value={formData.email} readOnly />
        </div>
        <div>
          <label htmlFor="telefone">Telefone</label>
          <input
            id="telefone" className="field" type="tel" placeholder="(00) 00000-0000"
            value={formData.telefone}
            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="outro">Informações Adicionais</label>
          <textarea
            id="outro" className="field" placeholder="Conte algo mais..."
            value={formData.outroDado}
            onChange={(e) => setFormData({ ...formData, outroDado: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">Finalizar e Gerar JSON</button>
      </form>

      <button className="link" onClick={() => navigate('/')}>Cancelar</button>
    </div>
  );
}

export default Cadastro;
