import React, {useState, useRef} from 'react'
import Messages from './Messages'
import { useSelector } from 'react-redux'
import { sendMessage } from '../firebase/firestore'

const ChatRoom = () => {
    const [input, setInput] = useState('')
    const bottom = useRef()
    const messages = useSelector(state => state.messages)
    //const userId  = useSelector(state => state.user.userId)   
    const userEmail  = useSelector(state => state.user.email)   
    

    function displayMessages(){
      let message
      if(messages.length === undefined){
        return //console.log('nothing')
      }
      message = messages.map(item => {

        let messageTime = new Date(item.time.seconds).toLocaleDateString().toString()
        let sentBy = item.userId === userEmail? 'you': item.userId
        //console.log(typeof item.messages, typeof item.email)

        return(
          <Messages
            message = {item.message}
            time = {messageTime}
            email  = {sentBy}            
          />          
        )
      })

      return message
    }

    function handleSubmit(){     
      console.log('h') 
      sendMessage(input, userEmail)
      setInput('')      
    }

    return (
      <div className="app">
        <div className="chat">
          {displayMessages()}
          <div ref={bottom} className="bottom"></div>
        </div>
        <div className="inputContainer">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="appinput"
            required
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"           
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={handleSubmit}
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
        </div>        
      </div>
    )
}

export default ChatRoom
