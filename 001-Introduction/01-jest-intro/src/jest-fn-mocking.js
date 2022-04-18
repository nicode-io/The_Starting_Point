export const fetchUser = (id, process) => {
    return fetch(`http://localhost:4000/users/${ id }`);
};
