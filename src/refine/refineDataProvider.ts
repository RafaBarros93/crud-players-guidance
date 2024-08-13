import { DataProvider } from "@refinedev/core";
import axios from "axios";
import { API_URL } from "../constants";


export const dataProvider: DataProvider = {
    getList: async ({ resource, pagination }) => {

        const { data } = await axios.get(`${API_URL}/${resource}`, {
            params: { _page: pagination?.current, _limit: pagination?.pageSize },
        });

        return { data, total: data.length };
    },
    getOne: async ({ id, resource }) => {

        const { data } = await axios.get(`${API_URL}/${resource}/${id}`);
        console.log(data)
        return { data };
    },
    create: async ({ resource, variables }) => {

        const { data } = await axios.post(`${API_URL}/${resource}`, variables);
        return { data };
    },
    update: async ({ resource, id, variables }) => {
        debugger
        const { data } = await axios.put(`${API_URL}/${resource}/${id}`, variables);
        return { data };
    },
    deleteOne: async ({ id, resource }) => {

        await axios.delete(`${API_URL}/${resource}/${id}`);
        return { data: {} };
    },

};
