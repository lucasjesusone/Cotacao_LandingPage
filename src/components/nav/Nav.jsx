import React, {useState, useContext } from 'react';
import { Link } from 'react-scroll'
import '../../components/nav/nav.css'
import LandingContext from '../../context/context';


import { Button } from './Button'





const Nav = () => {
          
const [clicked, setClicked] = useState(false)
const onHandleClick = () => {
setClicked(!clicked)
}
          
         
const { nav } = useContext(LandingContext);
const { navbar } = nav;
    

          
             
    return (
          <>
            <nav className='navbar' id='nav'>
                  
                <i className='navbar-logo'><h1>COTAR.ME</h1></i>
                
                
                 <div className='menu-icon' onClick={onHandleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                 </div>

                     <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>   
                        
                        {navbar && 
                                navbar.map((item) => {

                            const {id, url, boxText} = item
                              
                            return (   
                          
                       <li 
                            key={id}
                            rel='noopener noreferrer'
                            onClick={ () => setClicked(false)}
                            >
                            
                            <Link to={url} 
                            smooth duration={1000} 
                            className='nav-links' 
                            onClick={ () => setClicked(false)} 
                            >
                              {boxText || ''}
                            </Link>
                           
                      </li>
                              )
                      })}
                 
                        <a 
                        href='https://lucasjesus.netlify.app/' 
                        target='_blank' 
                        rel='noreferrer noopener'
                        >
                          
                          <Button className='nav-links-mobile'>
                            
                            Login
                          
                          </Button>
                        </a>
   
                     </ul>
                  
          </nav>
          </>
        );
      }

      export default Nav;
      