import axios from 'axios'; 

const api = axios.create({ 
    baseURL: 'http://localhost:8081', 
    withCredentials: true 
}); 

export const register = (user) => api.post('/register', user); 
export const login = (credentials) => api.post('/login', credentials); 
export const logout = () => api.get('/logout'); 
export const fetchUser = () => api.get('/'); 
export const fetchTrips = () => api.get('/trajets'); 

export default api;