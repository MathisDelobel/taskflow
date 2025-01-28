import { createContext, useContext, useState, useEffect } from "react";
import storage from "../services/storage/storage.js"; // Par exemple pour récupérer le token
import userApi from "../services/api/user.js";

const userContext = createContext();

export function UserProvider({ children }) {
	const [user, setUser] = useState(null); // Stocke les infos utilisateur
	const [loading, setLoading] = useState(true); // Indique si on charge encore les infos
	const [isLogged, setIsLogged] = useState(!!storage.getAuthToken()); //Verifie si un user est connecté

	useEffect(() => {
		async function fetchUser() {
			const token = storage.getAuthToken(); // Récupère le token
			if (token) {
				try {
					const userData = await userApi.getCurrentUser(); // Appelle l'API pour les infos utilisateur
					setUser(userData);
				} catch (error) {
					console.error(
						"Erreur lors du chargement des infos utilisateur :",
						error,
					);
					setUser(null); // En cas d'erreur, on considère l'utilisateur déconnecté
				}
			}
			setLoading(false); // Fin du chargement
		}

		fetchUser();
	}, []);

	return (
		<userContext.Provider
			value={{ user, setUser, loading, isLogged, setIsLogged }}
		>
			{children}
		</userContext.Provider>
	);
}

// Hook personnalisé pour accéder facilement au contexte utilisateur
export function useUserContext() {
	return useContext(userContext);
}
