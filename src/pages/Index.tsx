
import React from 'react';
import { Navigate } from 'react-router-dom';
import LandingPage from './LandingPage';

const Index = () => {
  // When the app grows, we can check for authentication here
  // and redirect logged in users to dashboard
  const isLoggedIn = false;

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  return <LandingPage />;
};

export default Index;
