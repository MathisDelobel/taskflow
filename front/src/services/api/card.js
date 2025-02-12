import {api} from "./api.js";

const cardApi = {
    getCards: async () => {
        const response = await api.get("/cards");
        return response.data;
    },

    getOneCard: async (id) => {
        const response = await api.get(`/cards/${id}`);
        return response.data;
    },

    createCard: async (card) => {
        const response = await api.post("/cards", card);
        return response.data;
    },

    updateCard: async (id, card) => {
        const response = await api.patch(`/cards/${id}`, card);
        return response.data;
    }
};

export default cardApi;
