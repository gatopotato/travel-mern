import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    error: null,
    loading: false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        refreshSignIn: (state) => {
            state.loading = false;
            state.error = null;
            state.currentUser = null;
        },
        signInStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        signoutSuccess: (state) => {
            state.currentUser = null;
            state.error = null;
            state.loading = false;
        }
    }
});

export const { signInStart, signInSuccess, signInFailure, signoutSuccess,refreshSignIn } = userSlice.actions;
export default userSlice.reducer;
