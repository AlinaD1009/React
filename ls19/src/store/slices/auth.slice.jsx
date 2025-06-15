import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
    name: 'auth',
    initialState:{
        login:'',
        password: '',
        isLogget: false,
    },
    reducers: {
        setNewUser: (store, action) =>({...action.payload}),
        setLoginState: (store,action) => ({...store, isLogget: action.payload}),
        removeUser: () => ({ login: '',password: ''})
    }
})


export const { setNewUser, removeUser, setLoginState } = authSlice.actions;
export default authSlice.reducer;