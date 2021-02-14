import React, { Component } from 'react';
import '../../components/nav/nav.css'
import { MenuItems } from '../nav/MenuItems'

export default class Nav extends Component {
    state = {clicked: false}
 

    onhandleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
  render(){
  return (
    <nav className='navbar'>
            
           <h1 className='logo'>COTAR.ME</h1>
            
            

            <ul className='list'>
                {MenuItems.map((item, index) => {
                  return (
                    <li key={index}>
                      <a className={item.cName} href={item.url}>
                        {item.title}
                      </a>
                    </li>
                  )
                })}
            </ul>
            <div className='menu-icon' onClick={this.onhandleClick}>
              <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>

    </nav>
   );
 }
}