import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false ;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false ;
    },
    deleteUserStart:(state, action) =>{
      state.loading = true ;
    },
    deleteUserSuccess:(state, action) =>{
      state.loading = false ;
      state.currentUser = null ;
      state.error = null ;
    },
    deleteUserFailure:(state, action) =>{
      state.error = action.payload ;
      state.loading = false ; 
    },
    SignOutUserStart:(state, action) =>{
      state.loading = true ;
    },
    SignOutUserSuccess:(state, action) =>{
      state.loading = false ;
      state.currentUser = null ;
      state.error = null ;
    },
    SignOutUserFailure:(state, action) =>{
      state.error = action.payload ;
      state.loading = false ; 
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserSuccess,
  updateUserFailure,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  SignOutUserFailure,
  SignOutUserStart,
  SignOutUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;
