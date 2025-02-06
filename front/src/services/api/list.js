import {api} from "./api.js";

const listApi = {
    getLists: async () => {
        const response = await api.get("/lists");
        return response.data;
    },

    getOneList: async (id) => {
        const response = await api.get(`/lists/${id}`);
        return response.data;
    },

    createList: async (list) => {
        const response = await api.post("/lists", list);
        return response.data;
    }
};

export default listApi;
