import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Importante para ler os dados da conta

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // Estado para guardar o usuário logado

  const handleSuccess = (credentialResponse) => {
    // 1. Descodifica o token para pegar foto e nome
    const decoded = jwtDecode(credentialResponse.credential);
    console.log(decoded);
    
    // 2. Salva no estado para mostrar na tela agora
    setUser(decoded);
    
    // 3. Salva no localStorage para a página de Cadastro conseguir ler depois
    localStorage.setItem('user', JSON.stringify(decoded));
  };

  return (
    <div>
      <h1 style={{ color: '#38bdf8', fontSize: '2rem', marginBottom: '20px' }}>
        {user ? `Bem-vindo, ${user.given_name}!` : 'Entrada do Sistema'}
      </h1>
      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        marginBottom: '30px'
      }}>
        {!user ? (
          /* Se NÃO estiver logado, mostra o botão do Google */
          <GoogleLogin 
            onSuccess={handleSuccess}
            onError={() => console.log('Falha na autenticação')}
            theme="filled_blue"
            shape="pill"
            size="large"
          />
        ) : (
          /* Se JÁ estiver logado, mostra a FOTO que o professor pediu */
          <div style={{ textAlign: 'center' }}>
            <img 
              src={user.picture} 
              alt="Foto do usuário" 
              style={{ borderRadius: '50%', width: '80px', border: '3px solid #38bdf8', marginBottom: '10px' }}
            />
            <p style={{ color: '#f8fafc' }}>{user.email}</p>
            <button 
              onClick={() => navigate('/cadastro')}
              style={{
                backgroundColor: '#10b981', // Verde para indicar sucesso/prosseguir
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                cursor: 'pointer',
                marginTop: '10px'
              }}
            >
              Ir para o Cadastro
            </button>
          </div>
        )}
      </div>

      <button 
        onClick={() => navigate('/dupla')}
        style={{
          width: '100%',
          padding: '14px',
          borderRadius: '10px',
          border: '1px solid #475569',
          backgroundColor: '#334155',
          color: '#f8fafc',
          cursor: 'pointer'
        }}
      >
        Ver Informações do Aluno
      </button>
    </div>
  );
}

export default Home;