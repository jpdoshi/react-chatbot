import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Textbox = () => {
  const [query, setQuery] = React.useState('');

  const changeColor = () => {
    const textField = document.getElementsByClassName('text-field')[0];
    if (textField.style.border != '3px solid var(--primary)') {
      textField.style.border = '3px solid var(--primary)';
    } else {
      textField.style.border = '3px solid #212121';
    }
  }

  const submitQuery = () => {
    if (query && query != '') {
      document.getElementById('textbox').value = '';
      document.getElementsByClassName('go')[0].style.color = '#424242';

      setQuery('');
      console.log(query);
    }
  }

  const textChange = () => {
    const queryText = document.getElementById('textbox').value;
    setQuery(queryText);

    const goButton = document.getElementsByClassName('go')[0];
    if (queryText == '') {
      goButton.style.color = '#212121';
    } else {
      goButton.style.color = 'var(--primary)';
    }
  }

  return (
    <div className='text-field'>
      <input
        type="text"
        name="query"
        id="textbox"
        placeholder="Message Chatbot"
        onFocus={changeColor}
        onBlur={changeColor}
        onChange={textChange}
      />
      <button className="go" onClick={submitQuery}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </div>
  )
}

export default Textbox