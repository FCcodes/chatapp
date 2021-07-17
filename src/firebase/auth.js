import { auth } from "./firebase";
import { useEffect } from "react";
import { updateState } from "../reducers/userState";
import { useDispatch } from "react-redux";
//import { useHistory } from 'react-router-dom'


export async function signup(email, password){ 
    let userEmail 
    let userId      
    try{        
        await auth.createUserWithEmailAndPassword(email, password)       
        await auth.onAuthStateChanged(user => {
            userEmail = user.email
            userId = user.uid            
        })

        return {userEmail, userId}
    }catch(err){
        console.log(err)
    }      
}

export async function login(email, password){

    let userEmail 
    let userId 
    try{
        await auth.signInWithEmailAndPassword(email, password)
        await auth.onAuthStateChanged(user => {
            userEmail = user.email
            userId = user.uid
        
        })
        return {userEmail, userId}
    }catch(err){
        console.log(err)
    }
}

export async function logout(){
    auth.signOut()
}

export function useSignInListener(){
    const dispatch = useDispatch()    

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user !== null){
                console.log(user)
                let email = user.email
                let userId = user.uid
                dispatch(updateState({email, userId}))               
            }else{
                console.log('not signed in')
            }          
        })

        return () => unsubscribe()
    }, [])
}