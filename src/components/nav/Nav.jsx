      import React, {useState, useContext } from 'react';

      import '../../components/nav/nav.css'
      import LandingContext from '../../context/context';
      import { Button } from './Button'





      const Nav = () => {
          
          const [clicked, setClicked] = useState(false)
          const onHandleClick = (event) => {
            setClicked(!event.target.value)
          }
          
         
          const { nav } = useContext(LandingContext);
          const { navbar } = nav;
    
        return (
          <>
          <nav className='navbar'>
                  
                  <i className='navbar-logo'><h1>COTAR.ME</h1></i>
                
                
                <div className='menu-icon' onClick={onHandleClick} value={onHandleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                  <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>   
                        
                        {navbar && 
                                navbar.map((item) => {

                          const {id, url, boxText} = item
                              
                          return (   
                          
                          <li 
                            key={id}
                            href={url }
                            rel='noopener noreferrer'
                            
                          >
                            <a className='nav-links'  >
                              {boxText || ''}
                            </a>
                            
                          </li>
                        )
                      })}
                      <Button className='nav-links-mobile'>Sign up</Button>
                  </ul>
                  
          </nav>
          </>
        );
      }

      export default Nav;