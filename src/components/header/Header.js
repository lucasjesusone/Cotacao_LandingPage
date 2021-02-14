import React, { Component } from 'react';

import '../header/header.css'

export default class Header extends Component {
 render(){
  return (
    <header>
        
        <div className='head'>
            <h1>COTAR.ME<br/>CHANGING THE WORLD</h1>
            <div>
                <p>Realize suas cotações de compras com fornecedores de forma fácil, receba notificações à cada evento que ocorre no processo. Além disso você também pode integrar nossa plataforma com seu sistema ERP</p>
                <div>
                    <a className='contact' href='#contact'>Contact Us</a>
                </div>
            </div>
        </div>
    </header>
   );
 }
}