import React, { useContext } from 'react';
import LandingProvider from '../../context/context';
import '../mission/mission.css'

const Mission = () => {
    const { mission } = useContext(LandingProvider)
    const { title, paragraph1, paragraph2} = mission

  return (
    <div className='divMission' id='mission'>
        <section className='sectionMission'>
            <h2 className='title'>{title || 'Something'}</h2>
            <div>
                     <div >
                           <p className='paragraph'>
                               {paragraph1 || 'something'}
                           </p>
                             <p className='paragraph'>
                               {paragraph2 || 'something'}
                           </p>
                 </div>
            </div>
        </section>
    </div>
   );
}

export default Mission;