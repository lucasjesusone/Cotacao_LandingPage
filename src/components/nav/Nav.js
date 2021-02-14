import React, { Component } from 'react';
import '../../components/nav/nav.css'

export default class Nav extends Component {
 render(){
  return (
    <nav>
           
            <ul>
                <li className='logo'> <span> COTAR.ME</span></li>
            </ul>
        
            
            
            <ul>
                <li><a href='#mission'>Contatos</a></li>
                <li><a href='contact'>Mission</a></li>
                <li><a href='about-us'>Login</a></li>
            </ul>
        

    </nav>
   );
 }
}