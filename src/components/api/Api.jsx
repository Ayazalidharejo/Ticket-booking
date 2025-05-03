// // API Service - handles all API calls to the backend
// const API_URL = 'http://localhost:5000/api';

// // Auth API calls
// export const register = async (userData) => {
//   try {
//     const response = await fetch(`${API_URL}/users/register`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     });
    
//     const data = await response.json();
    
//     if (!response.ok) {
//       throw new Error(data.message || 'Registration failed');
//     }
    
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const login = async (userData) => {
//   try {
//     const response = await fetch(`${API_URL}/users/login`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     });
    
//     const data = await response.json();
    
//     if (!response.ok) {
//       throw new Error(data.message || 'Login failed');
//     }
    
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const getCurrentUser = async (token) => {
//   try {
//     const response = await fetch(`${API_URL}/users/me`, {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer ${token}`,
//       },
//     });
    
//     const data = await response.json();
    
//     if (!response.ok) {
//       throw new Error(data.message || 'Failed to get user data');
//     }
    
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// // Events API calls
// export const getAllEvents = async () => {
//   try {
//     const response = await fetch(`${API_URL}/events`);
//     const data = await response.json();
    
//     if (!response.ok) {
//       throw new Error(data.message || 'Failed to fetch events');
//     }
    
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const getEventById = async (eventId) => {
//   try {
//     const response = await fetch(`${API_URL}/events/${eventId}`);
//     const data = await response.json();
    
//     if (!response.ok) {
//       throw new Error(data.message || 'Failed to fetch event');
//     }
    
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const createEvent = async (eventData, token) => {
//   try {
//     const response = await fetch(`${API_URL}/events`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//       },
//       body: JSON.stringify(eventData),
//     });
    
//     const data = await response.json();
    
//     if (!response.ok) {
//       throw new Error(data.message || 'Failed to create event');
//     }
    
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const updateEvent = async (eventId, eventData, token) => {
//   try {
//     const response = await fetch(`${API_URL}/events/${eventId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//       },
//       body: JSON.stringify(eventData),
//     });
    
//     const data = await response.json();
    
//     if (!response.ok) {
//       throw new Error(data.message || 'Failed to update event');
//     }
    
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const deleteEvent = async (eventId, token) => {
//   try {
//     const response = await fetch(`${API_URL}/events/${eventId}`, {
//       method: 'DELETE',
//       headers: {
//         'Authorization': `Bearer ${token}`,
//       },
//     });
    
//     const data = await response.json();
    
//     if (!response.ok) {
//       throw new Error(data.message || 'Failed to delete event');
//     }
    
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// // Tickets API calls
// export const getTicketsForEvent = async (eventId) => {
//   try {
//     const response = await fetch(`${API_URL}/tickets/event/${eventId}`);
//     const data = await response.json();
    
//     if (!response.ok) {
//       throw new Error(data.message || 'Failed to fetch tickets');
//     }
    
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// // Bookings API calls
// export const getUserBookings = async (token) => {
//   try {
//     const response = await fetch(`${API_URL}/bookings`, {
//       headers: {
//         'Authorization': `Bearer ${token}`,
//       },
//     });
    
//     const data = await response.json();
    
//     if (!response.ok) {
//       throw new Error(data.message || 'Failed to fetch bookings');
//     }
    
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const createBooking = async (bookingData, token) => {
//   try {
//     const response = await fetch(`${API_URL}/bookings`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//       },
//       body: JSON.stringify(bookingData),
//     });
    
//     const data = await response.json();
    
//     if (!response.ok) {
//       throw new Error(data.message || 'Failed to create booking');
//     }
    
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const cancelBooking = async (bookingId, token) => {
//   try {
//     const response = await fetch(`${API_URL}/bookings/${bookingId}/cancel`, {
//       method: 'PATCH',
//       headers: {
//         'Authorization': `Bearer ${token}`,
//       },
//     });
    
//     const data = await response.json();
    
//     if (!response.ok) {
//       throw new Error(data.message || 'Failed to cancel booking');
//     }
    
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };



import axios from 'axios';

const API_URL = 'https://booking-backend-xi.vercel.app/api' || 'http://localhost:5000/api';


// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add a request interceptor to add the auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;