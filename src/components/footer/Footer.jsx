import React, { useContext, Fragment } from 'react';
import '../footer/footer.css'
import LandingContext from '../../context/context'


const Footer = () => {
  const { footer } = useContext(LandingContext);
  const { footerMap } = footer
  
  return (
    <footer className='footer'>
       
       <p className='title-footer'>Suporte<br/>lucasjesusone@gmail.com</p>
        <ul className='footer-list'>
        
        {footerMap && 
          footerMap.map(function(item) {
            
             const { id, title, subtitle, url, icon, icon1} = item
             return (
              <li key={id}>
                
                <a  
                className='footericon'
                href={url || 'https://www.linkedin.com/in/lucasgabrieljesus/'} 
                target='_blank' 
                rel='noopener noreferrer'
                >
                  {icon}
                  {icon1}
                </a>        
              </li>
              );
         
        })}
        
        </ul>
    </footer>
   );
}

export default Footer
