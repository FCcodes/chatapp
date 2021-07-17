import React, {useEffect, useState} from 'react'
import { login } from '../firebase/auth'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { updateState } from '../reducers/userState'

const Login = () => {

    const [email, setEmail]  = useState('')
    const [password, setPassword] = useState('')    
    const [error, setError] = useState('')
    const history = useHistory()
    const dispatch = useDispatch()

    console.log(process.env.REACT_APP_API_KEY)

    const handleSubmit= async (e)=>{
        e.preventDefault()         
        const {userEmail, userId} = await login(email, password)           
        dispatch(updateState({userEmail, userId}))
        history.push('/')      
    }

    return (
        <>
            <div className="login">
                <div className="alert">{error}</div>
                <form action="#" onSubmit={handleSubmit}>                    

                    <label className="labelEmail" htmlFor="email">Email:</label><br/>
                    <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" id="email" required /><br/>

                    <label className="labelPassword" htmlFor="password">Password:</label><br/>  
                    <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" id="password" required /><br/>
                    
                    <button className="btn" type="submit">Login</button>             
                </form>
            </div>
        </>
    )
}

export default  Login

