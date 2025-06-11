const baseUrl = 'https://jsonplaceholder.typicode.com/users';

export function getAllUsers() {
    return fetch(`${baseUrl}`).then(res => res.json());
}

export function getUsersById(id) {
    return fetch(`${baseUrl}/${id}`).then(res => res.json());
}
