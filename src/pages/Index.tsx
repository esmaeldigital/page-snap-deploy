
import React from 'react';
import { Navigate } from 'react-router-dom';
import LandingPage from './LandingPage';

const Index = () => {
  // Quando o app crescer, podemos verificar a autenticação aqui
  // e redirecionar usuários logados para o painel
  const isLoggedIn = false;

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  return <LandingPage />;
};

export default Index;
