import {api} from "./api.js";

const boardApi = {
	getBoards: async () => {
		const response = await api.get("/boards");
		return response.data;
	},
};

export default boardApi;
