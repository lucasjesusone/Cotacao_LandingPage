import React, { Component } from 'react';
import '../../components/nav/nav.css'

export default class Nav extends Component {
 render(){
  return (
    <nav>
           
            <ul>
                <li className='logo'> <span> COTAR-ME</span></li>
            </ul>
        
            
            
            <ul >
                <li><a href='#mission'>Sobre nós</a></li>
                <li><a href='contact'>Missão</a></li>
                <li><a href='about-us'>Contato</a></li>
            </ul>
        

    </nav>
   );
 }
}