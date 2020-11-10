import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080'
});

export const getAll = (route) => api.get(route);
export const getById = (route, id) => api.get(`${route}/${id}`);
export const insertNew = (route, payload) => api.post(route, payload);
export const updateById = (route ,id, payload) => api.put(`${route}/${id}`, payload);
export const deleteById = (route, id) => api.delete(`${route}/${id}`);


const apis = {
    getAll,
    getById,
    insertNew,
    updateById,
    deleteById
}

export default apis;