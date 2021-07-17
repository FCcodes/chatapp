import React from 'react'
import { Route, Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useSignInListener } from '../firebase/auth'

const PrivateRoute = ({component: Component, ...rest}) => {    
    const signin = useSelector((state) => state.user.signedIn)
    console.log(signin)   
    
    return (
        <Route
            {...rest}
            render={(props)=>{
                if(signin === true){
                    return <Component {...props}/>
                }else {
                    return <Redirect to='/signup'/>
                }
            }}        
        />        
    )
}

export default PrivateRoute
