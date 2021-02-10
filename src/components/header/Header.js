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
                <p>LOREMIPSU</p>
                <div><a className='contact' href='#contact'>Contact Us</a></div>
            </div>
        </div>
    </header>
   );
 }
}