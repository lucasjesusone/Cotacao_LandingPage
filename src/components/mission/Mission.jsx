import React, { Component, useContext } from 'react';
import LandingProvider from '../../context/context';
import '../mission/mission.css'

const Mission = () => {
    const { mission } = useContext(LandingProvider)
    const { title, paragraph1, paragraph2} = mission

  return (
    <div id='mission'>
        <section className='sectionMission'>
            <h2 className='title'>{title || 'Something'}</h2>
            <div>
                     <a>
                           <p className='paragraph'>
                               {paragraph1 || 'something'}
                           </p>
                           <p className='paragraph'>
                               {paragraph2 || 'something'}
                           </p>
                    </a>
            </div>
        </section>
    </div>
   );
}

export default Mission;