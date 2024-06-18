import axios from 'axios'; 
// import { useNavigate } from 'react-router-dom';

const api = axios.create({ 
    baseURL: 'http://localhost:8081', 
    withCredentials: true 
}); 

export const register = (user) => api.post('/register', user); 
export const login = (credentials) => api.post('/login', credentials); 
export const logout = () => api.get('/logout'); 
export const fetchUser = () => api.get('/home'); 
export const fetchTrips = () => api.get('/trajets'); 
// export const fetchAllTrips = () => api.get('/alltrajets');

export default api;



// const navigate = useNavigate();

// api.interceptors.response.use(
//     response => response,
//     error => {
//         if (error.response && error.response.status === 401) {
//             alert('Session expired. Please log in again.');
//             navigate('/login');
//         }
//         return Promise.reject(error);
//     }
// );