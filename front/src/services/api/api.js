import axios from "axios";
import { toast } from "react-toastify";

// Configurer une instance Axios
export const api = axios.create({
	baseURL: "http://localhost:3001",
	timeout: 5000,
});

// Intercepteur pour gérer les erreurs
api.interceptors.response.use(
	(response) => response, // Les réponses réussies passent ici sans modification
	(error) => {
		if (error.response) {
			// Gérer les erreurs avec une réponse du serveur
			if (error.response.data.message) {
				toast.error(`${error.response.data.message}`);
			} else {
				toast.error(
					"Une erreur s'est produite sur le serveur. Veuillez réessayer plus tard.",
				);
			}
		} else if (error.request) {
			// Gérer les erreurs réseau (pas de réponse reçue)
			toast.error(
				"Impossible de contacter le serveur. Vérifiez votre connexion.",
			);
		} else {
			// Gérer les autres erreurs inattendues
			toast.error("Une erreur inattendue s'est produite.");
		}
		return Promise.reject(error); // Propager l'erreur pour la gestion ultérieure
	},
);

export function setAuthenticationHeaders(token) {
	// This line add the authentication token to the axios instance Authorization Headers for every following requests
	api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function unsetAuthenticationHeaders() {
	// This line remove the authentication token from the axios instance Authorization Headers
	api.defaults.headers.common.Authorization = undefined;
}
