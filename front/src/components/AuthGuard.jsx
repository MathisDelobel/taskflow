import { Outlet, useNavigate } from 'react-router';
import { useEffect } from 'react';
import storage from '../services/storage/storage.js';
import { toast } from 'react-toastify';

export default function AuthGuard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = storage.getAuthToken();

    // Si pas de token, redirige vers la page de connexion
    if (!token) {
      toast('Veuillez vous connectez', { type: 'warning' });
      navigate('/');
    }
  }, [navigate]);

  // Affiche les routes protégées si l'utilisateur est connecté
  const token = storage.getAuthToken();
  if (!token) {
    return null; // Empêche le rendu des enfants si l'utilisateur est redirigé
  }

  return <Outlet />;
}
