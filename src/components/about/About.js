import React, { Component } from 'react';
import '../about/about.css'

export default class About extends Component {
 render(){
  return (
    <div id='about-us'>
        <section className='intro'>
            <h2 id='title'>About us</h2>
            <div>
                <p id='text'>
                    LoresIPSUM
                </p>
            </div>
        </section>
    </div>
   );
 }
}