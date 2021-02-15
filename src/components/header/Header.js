  import React, { Component } from 'react';

import '../header/header.css'
import { MenuItems } from './MenuItems';

export default class Header extends Component {
 render(){
  return (
    <header className='header'>
        
        <div className='head'>
            <h1 className='title-header'>COTAR.ME<br/>CHANGING THE WORLD</h1>
            <div>
               {MenuItems.map((item, index) =>{
                 return (
                  <a key={index}>
                    <p className={item.cName} href={item.url}>
                      {item.message}
                    </p>
                  </a>
                 )
               })}
            </div>
        </div>
    </header>
   );
 }
}
