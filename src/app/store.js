import { configureStore } from '@reduxjs/toolkit'
import userState from '../reducers/userState'
import  messageSlice  from '../reducers/messgeSlice'

export default configureStore({
    reducer: {
        user: userState,
        messages: messageSlice
    },
})