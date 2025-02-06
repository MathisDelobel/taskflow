import {api} from "./api.js";

const boardApi = {
	getBoards: async () => {
		const response = await api.get("/boards");
		return response.data;
	},

	getOneBoard: async (id) => {
		const response = await api.get(`/boards/${id}`);
		return response.data;
	},

	createBoard: async (board) => {
		const response = await api.post("/boards", board);
		return response.data;
	}
};

export default boardApi;
