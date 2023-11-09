// services/api.js
const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export async function getPost(id: number | string): Promise<Post> {
    try {
        const response = await fetch(`${API_URL}/posts/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
export async function getPosts(): Promise<Post[]> {
    try {
        const response = await fetch(`${API_URL}/posts`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
