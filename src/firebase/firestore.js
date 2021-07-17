import { useEffect } from "react";
import { db } from "./firebase";
import { newMessage } from "../reducers/messgeSlice";
import { useDispatch } from "react-redux";


export async function sendMessage(message, userEmail) {
    const date = new Date()
    await db.collection('messages').add({
        message: message,
        userId: userEmail,
        time: date
    })
}

export async function useListenToMessage(){
    const dispatch = useDispatch()

    useEffect(()=>{
        let unsubscribe = db.collection("messages").orderBy('time').onSnapshot((snapshot) => {
            const collection = snapshot.docs
            const docs = collection.map((doc) => doc.data())
            const time = docs
            dispatch(newMessage(docs))
            console.log(time)
            //console.log(snapshot.docs.data())
        })

        return ()=> unsubscribe()
    }, [])   
}

