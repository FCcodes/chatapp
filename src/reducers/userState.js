import { createSlice } from '@reduxjs/toolkit'

export const userState = createSlice({
    name: "userState",
    initialState: {
        signedIn: false,
        userId: '',
        email: ''        
    },

    reducers:{
        updateState: (state, action) => {
            //console.log(action.payload)        
            return state = {signedIn: true, email: action.payload.email, userId: action.payload.userId}
        },

        logOut: (state) => {
            return state = {signedIn: false, email:'', userId: ''}
        }
    }
})

export const { updateState, logOut } = userState.actions

export default userState.reducer