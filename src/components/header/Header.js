import React, { Component } from 'react';
import Nav from '../nav/Nav'
import '../header/header.css'

export default class Header extends Component {
 render(){
  return (
    <header>
        <Nav/>
        <div className='head'>
            <h1>COTAR-ME <br/>CHANGING THE WORLD</h1>
            <div>
                <p>Integer posuere leo non erat ornare dictum id vitae magna. Proin consectetur iaculis nisi, ut convallis tortor tempor congue. Curabitur sit amet tempus felis. Duis tellus eros, pellentesque at rhoncus eu, maximus ut diam.</p>
                <div><a className='contact' href='#contact'>Contact Us</a></div>
            </div>
        </div>
    </header>
   );
 }
}