const API = 'http://localhost:5001';
const headers = {
    'Accept': 'application/json',
    'Authorization': 'test'
}

export const getCategories = () =>
    fetch(`${API}/categories`, {headers});
