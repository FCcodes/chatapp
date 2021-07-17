import React from 'react'

const Messages = ({message,time, email}) => {
    //console.log(message)
    return (
        <>
            <div  className="message">
                <h4>{message}</h4>
                <span className="messageID"><h5>{email}</h5> <h5>{time}</h5></span>
            </div>
        </>
    )
}

export default Messages
