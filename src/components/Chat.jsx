import React from 'react'

const Chat = (props) => {
  return (
    <div className='chat-container'>
      {(props.query)
        ? <p className='chat query'>{props.children}</p>
        : <p className='chat' dangerouslySetInnerHTML={{ __html: props.children }} />}
    </div>
  )
}

export default Chat