import React from 'react'

import Navbar from './components/Navbar'
import Textbox from './components/Textbox'
import Chat from './components/Chat'

const App = () => {
  const [chats, setChats] = React.useState([]);

  const addChat = (chat) => {
    setChats(chats => [...chats, chat]);
  }

  return (
    <>
      <Navbar />
      <div id="chatbox">
        {chats.map(chat =>
          <Chat key={Math.random()} query={chat.query}>{chat.text}</Chat>
        )}
      </div>
      <Textbox addChat={addChat} />
      <div style={{
        position: 'fixed',
        bottom: '0',
        height: '5rem',
        width: '100%',
        zIndex: '100',
        backgroundColor: 'var(--surface)',
        backdropFilter: 'blur(8px)'
      }} />
    </>
  )
}

export default App