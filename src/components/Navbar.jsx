import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav>
      <h1 className='title'>JD CHATBOT</h1>
      <div className="nav-links">
        <a href="https://jpdoshi.tech"><FontAwesomeIcon icon={faGlobe} /></a>
        <a href="https://github.com/jpdoshi"><FontAwesomeIcon icon={faGithub} /></a>
      </div>
    </nav>
  )
}

export default Navbar