import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080'
});

export const insertUser = payload => api.post(`/add-user`, payload);
export const getAllUsers = () => api.get(`/users`);
export const updateUserById = (id, payload) => api.put(`/edit-user/${id}`, payload);
export const deleteUserById = id => api.delete(`/delete-user/${id}`);
export const getUserById = id => api.get(`/${id}`);
export const getAllMachines = () => api.get(`/machines`);

const apis = {
    insertUser,
    getAllUsers,
    updateUserById,
    deleteUserById,
    getUserById,
    getAllMachines,
}

export default apis;