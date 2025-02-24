import {api} from "./api.js";

const listApi = {

    createList: async (list) => {
        const response = await api.post("/lists", list);
        return response.data;
    },

    updateList: async (id, list) => {
        const response = await api.patch(`/lists/${id}`, list);
        return response.data;
    }
};

export default listApi;
