import { api } from "./api.js";

const userApi = {
	getUsers: async () => {
		const response = await api.get("/users");
		return response.data;
	},

	getCurrentUser: async () => {
		const response = await api.post("/auth/me");
		return response.data;
	},

	login: async (user) => {
		const response = await api.post("/login", user);
		return response.data;
	},
};

export default userApi;
