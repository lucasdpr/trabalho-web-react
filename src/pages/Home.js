import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Importante para ler os dados da conta

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    // Restaura a sessão ao voltar para a Home
    try { return JSON.parse(localStorage.getItem('user')); } catch { return null; }
  });

  const handleSuccess = (credentialResponse) => {
    // 1. Descodifica o token para pegar foto e nome
    const decoded = jwtDecode(credentialResponse.credential);
    // 2. Salva no estado para mostrar na tela agora
    setUser(decoded);
    
    // 3. Salva no localStorage para a página de Cadastro conseguir ler depois
    localStorage.setItem('user', JSON.stringify(decoded));
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div>
      <h1>{user ? `Bem-vindo, ${user.given_name}!` : 'Entrada do Sistema'}</h1>

      <div className="stack">
        {!user ? (
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => console.log('Falha na autenticação')}
            theme="filled_blue"
            shape="pill"
            size="large"
          />
        ) : (
          <>
            <img className="avatar" src={user.picture} alt="Foto do usuário" referrerPolicy="no-referrer" />
            <p className="email">{user.email}</p>
            <button className="btn btn-ok" onClick={() => navigate('/cadastro')}>
              Ir para o Cadastro
            </button>
            <button className="link" onClick={handleLogout}>Sair</button>
          </>
        )}
      </div>

      <button className="btn btn-ghost" onClick={() => navigate('/dupla')}>
        Ver Informações do Aluno
      </button>
    </div>
  );
}

export default Home;
