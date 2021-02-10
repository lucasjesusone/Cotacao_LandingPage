import React, { Component } from 'react';
import '../../components/nav/nav.css'

export default class Nav extends Component {
 render(){
  return (
    <nav>
        
            <ul>
                <li className='logo'><span>COTAR-ME</span></li>
            </ul>


            <ul >
                <li><a>Missão</a></li>
                <li><a>Contato</a></li>
                <li><a>Sobre Nós</a></li>
            </ul>
        

    </nav>
   );
 }
}