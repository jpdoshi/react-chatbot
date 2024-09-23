import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Textbox = () => {
  return (
    <div className='text-field'>
      <input type="text" name="query" id="textbox" placeholder="Message Chatbot" />
      <button className="go">
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </div>
  )
}

export default Textbox