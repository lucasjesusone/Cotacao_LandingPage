  import React, { useContext } from 'react';
  import { Link } from 'react-scroll'
  import LandingProvider from '../../context/context'
  import '../header/header.css'
  

const Header = () => {
const { header } = useContext(LandingProvider)
const { title, url, text, button } = header
  
    return (
      <header className='header' id='mapHeader'>
          
          <div className='head'>
              <h1 className='title-header'>{title}<br/>CHANGING THE WORLD</h1>
                <div>
                    <div>
                       <p className='message' >
                           {text}
                       </p>
                      <Link to='contact' smooth duration={1000} className='contact' href={url}>
                        {button  || 'Contact us'}
                      </Link>
                </div>
              </div>
          </div>
      </header>
    );
  }

  export default Header;