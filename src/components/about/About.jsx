import React, { useContext } from 'react';
import LandingContext from '../../context/context';
import '../about/about.css'


const About = () => {
const { about } = useContext(LandingContext);
const { textabout, message } = about;
  
    return ( 
        <div id='about'>
            <div className='about-us' >
                <section className='intro'>
                    <h2 className='title'>{textabout || 'Lorem'}</h2>
                         <div>
             
                                <div>
                                     <p className='textMessage'>
                                         {message || 'Lorem'}
                                     </p>
                    </div>
             </div>
        </section>
    </div>
</div>
   );
 }


export default About;