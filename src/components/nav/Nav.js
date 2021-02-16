import React, { Component } from 'react';

import '../../components/nav/nav.css'
import { Button } from './Button'
import { MenuItems } from '../nav/MenuItems'




export default class Nav extends Component {
    state = {clicked: false}


    onhandleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
  render(){
  return (
    <nav className='navbar'>
            
           <i className='navbar-logo'><h1>COTAR.ME</h1></i>
          
           
           <div className='menu-icon' onClick={this.onhandleClick}>
              <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>

            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}
   
            >
                {MenuItems.map((item, index) => {
                  return (
                    <li key={index}>
                      <a className={item.cName} href={item.url}>
                        {item.title}
                      </a>
                    </li>
                  )
                })}
                <Button>Sign up</Button>
            </ul>
            
    </nav>
   );
 }
}