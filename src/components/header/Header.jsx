  import React, { useContext } from 'react';
  import LandingProvider from '../../context/context'
  import '../header/header.css'
  

  const Header = () => {
      const { header } = useContext(LandingProvider)
      const { title, url, text, button } = header
  
    return (
      <header className='header'>
          
          <div className='head'>
              <h1 className='title-header'>{title}<br/>CHANGING THE WORLD</h1>
              <div>
              <a>
                      <p className='message' href={url}>
                        {text}
                      </p>
                      <a className='contact'>
                        {button  || 'Contact us'}
                      </a>
                </a>
              </div>
          </div>
      </header>
    );
  }

  export default Header;