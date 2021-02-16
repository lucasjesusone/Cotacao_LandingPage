import React, { Component } from 'react';
import '../footer/footer.css'
import { MenuItems } from './MenuItems';


export default class Footer extends Component {
 render(){
  return (
    <footer className='footer'>
       
        <p className='title-footer'>Support<br/> Lucasjesusone@gmail.com</p>
        <ul className='footer-list'>
       
             {MenuItems.map((item, index) => {
                return (
                <li key={index}>
                  <a className={item.className} href={item.url} target={item.target}>
                    {item.message}
                  </a>
                </li>
                )
            })} 
              
         
        </ul>
    </footer>
   );
 }
}