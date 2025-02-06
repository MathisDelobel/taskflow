import { createContext, useContext, useState, useEffect } from 'react';
import storage from '../services/storage/storage.js'; // Par exemple pour récupérer le token
import userApi from '../services/api/user.js';
import boardApi from '../services/api/board.js';

const userContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState(null); // Stocke les infos utilisateur
  const [isLoading, setIsLoading] = useState(true); // Indique si on charge encore les infos
  const [isLogged, setIsLogged] = useState(!!storage.getAuthToken()); //Verifie si un user est connecté


  // Fonction pour récupérer et mettre à jour les données utilisateur
  async function fetchUserData() {
    const token = storage.getAuthToken();
    if (token) {
      try {
        const data = await userApi.getCurrentUser();
        setUserData(data);
      } catch (error) {
        console.error(
          'Erreur lors de la récupération des données utilisateur :',
          error,
        );
        setUserData(null);
        setIsLogged(false);
      }
    } else {
      // Si aucun token, on considère l'utilisateur comme déconnecté
      setUserData(null);
      setIsLogged(false);
    }
    setIsLoading(false);
  }

  // Charger les données utilisateur au démarrage
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <userContext.Provider
      value={{
        userData,
        setUserData,
        isLoading,
        isLogged,
        setIsLogged,
        fetchUserData,
      }}
    >
      {children}
    </userContext.Provider>
  );
}

// Hook personnalisé pour accéder facilement au contexte utilisateur
export function useUserContext() {
  return useContext(userContext);
}
