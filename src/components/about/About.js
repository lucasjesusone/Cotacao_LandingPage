import React, { Component } from 'react';
import '../about/about.css'
import {MenuItems} from './MenuItems'

export default class About extends Component {
 render(){
  return (
    <div id='about-us'>
        <section className='intro'>
            <h2 id='title'>About us</h2>
            <div>
               {MenuItems.map((item, index) => {
                   return (
                    <a key={index}>
                        <p className={item.cName}>
                            {item.message}
                        </p>
                    </a>
                   )
                })}
            </div>
        </section>
    </div>
   );
 }
}