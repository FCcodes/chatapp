import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
    name: "messageSlice",
    initialState: {
        messages: []
    },

    reducers:{
        newMessage: (state, action) => {
            return state = [...action.payload]
        },

        clearMessages :(state, action) => {
            return state = []
        }
    }
})

export const { newMessage, clearMessages } = messageSlice.actions

export default messageSlice.reducer