import { createSlice } from '@reduxjs/toolkit';
import {jwtDecode} from 'jwt-decode'; // Correct import

// Load token from localStorage and decode it (if exists)
const loadTokenFromLocalStorage = () => {
    try {
        const token = localStorage.getItem('userToken');
        if (!token || typeof token !== 'string') {
            return { token: null, user: null, isLoggedIn: false };
        }
        const decodedUser = jwtDecode(token); // Decode only if token is valid
        return { token, user: decodedUser, isLoggedIn: true };
    } catch (e) {
        console.warn('Failed to load token from localStorage or decode:', e);
        return { token: null, user: null, isLoggedIn: false };
    }
};

const initialState = loadTokenFromLocalStorage();

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action) => {
            const  token = action.payload;
            if (token && typeof token === 'string') {
                state.token = token;
                state.user = jwtDecode(token); // Decode only valid token
                state.isLoggedIn = true;
                // state.statusp = statusp;
                localStorage.setItem('userToken', token); // Save token to localStorage
            } else {
                console.warn('Invalid token provided');
            }
        },
        clearToken: (state) => {
            state.token = null;
            state.user = null;
            state.isLoggedIn = false;
            // state.statusp = '';
            localStorage.removeItem('userToken'); // Remove token from localStorage
        },
    },
});

export const { setToken, clearToken } = userSlice.actions;
export default userSlice.reducer;
