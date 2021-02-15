import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import '../mission/mission.css'

export default class Mission extends Component {
 render(){
  return (
    <div id='mission'>
        <section className='sectionMission'>
            <h2 className='title'>Our Mission</h2>
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