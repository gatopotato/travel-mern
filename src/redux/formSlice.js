import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    path: '/',
    userName: '',
    email: '',
    phoneNumber: '',
    numberOfGuests: '',
    checkInDate: '',
    checkOutDate: '',
    branchName: '',
    roomName: '',
    loading: false
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetForm: () => initialState,
    loadForm: (state) => {
      state.loading = true;
    },
    loadFormSuccess: (state) => {
      state.loading = false ;
    },
    loadingFalse:(state)=>{
      state.loading = false;
    }
  },
});

export const { setFormData, resetForm, loadForm, loadFormSuccess,loadingFalse } = formSlice.actions;
export default formSlice.reducer;
