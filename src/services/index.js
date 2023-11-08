// services/api.js
const API_URL = process.env.API_BASE_URL;

export async function getPost(id) {
    try {
        const response = await fetch(`${API_URL}/posts/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
export async function getPosts() {
    try {
        const response = await fetch(`${API_URL}/posts`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
