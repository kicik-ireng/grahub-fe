import axios from 'axios';

// Gunakan environment variable jika ada, jika tidak default ke localhost:3000
const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/v1';

export const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor untuk token jika nanti ada otentikasi
apiClient.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    // Unpack backend response wrapper if present
    if (response.data && response.data.success !== undefined && response.data.data !== undefined) {
      // Modify response.data to just be the inner data
      response.data = response.data.data;
    }
    return response;
  },
  (error) => {
    // Handle global errors, e.g. 401 Unauthorized
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);
