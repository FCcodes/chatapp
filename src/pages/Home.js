import React from 'react'
import ChatRoom from '../components/ChatRoom'
import { logout } from '../firebase/auth'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { logOut } from '../reducers/userState'
import { clearMessages } from '../reducers/messgeSlice'

const Home = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    async function handleClickSignOut(){
        dispatch(logOut())
        dispatch(clearMessages())
        await logout()         
    }

    return (
        <div className="home">
            <button onClick={handleClickSignOut} >Sign Out</button>
            <ChatRoom />            
        </div>
    )
}

export default Home
