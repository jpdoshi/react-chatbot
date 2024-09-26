import React from 'react'

const Chat = (props) => {
  return (
    <div className='chat-container'>
      <p className={(props.query ? 'chat query' : 'chat')}>{props.children}</p>
    </div>
  )
}

export default Chat