import React, { Component } from 'react';
import '../footer/footer.css'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'


export default class Footer extends Component {
 render(){
  return (
    <footer>
        <h3></h3>
        <p className='footer-text'>Support<br/> Lucasjesusone@gmail.com</p>
        <ul>
            <li>
              <a href="https://www.linkedin.com/in/lucasgabrieljesus/" target="_blank">
                
                <i className='icon'><FaLinkedinIn/>
                </i>

              </a>
            </li>
            
            <li>
              <a href="https://github.com/LucasJesusone" target="_blank">
                
                <i className='icon'><AiFillGithub />
                </i>
                
              </a>
            </li>
        </ul>
    </footer>
   );
 }
}