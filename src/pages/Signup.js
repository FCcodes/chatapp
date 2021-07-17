import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signup } from '../firebase/auth'
import { updateState } from '../reducers/userState'
import { useSelector } from 'react-redux'

const Signup = () => {    
    const [email, setEmail]  = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const signInState = useSelector((state)=> state.user.signedIn)   
    //console.log(signInState)
    
    const dispatch = useDispatch()
    const history = useHistory()

    if(signInState === true){
      history.push('/')        
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(password !== confirmpassword){
            console.log('password do not match')
        }
        const {userEmail, userId} = await signup(email, password)                
        dispatch(updateState({userEmail, userId}))

        //console.log(history)
        history.push('/')
    }  

    

    return (
      <>
        <div className="signup">
          <div className="alert">{error}</div>
          <form action="#" onSubmit={handleSubmit}>
            
            <label className="labelEmail" htmlFor="email">
              Email:
            </label>
            <br />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              required
            />
            <br />

            <label className="labelPassword" htmlFor="password">
              Password:
            </label>
            <br />
            <input
              password={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              required
            />
            <br />

            <label className="labelConfirmPassword" htmlFor="confirmPassword">
              Confirm Password:
            </label>
            <br />
            <input
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              id="confirmPassword"
              required
            />
            <br />

            <button className="btn" type="submit">
              Signup
            </button>
          </form>
        </div>
      </>
    )
}

export default Signup
