// api/routes.js
import axios from 'axios';

export async function fetchRoutes() {
    try {
        const response = await axios.get('/api/routes'); // 假设后端API返回路由数据
        return response.data;
    } catch (error) {
        console.error('Error fetching routes:', error);
        throw error;
    }
}
