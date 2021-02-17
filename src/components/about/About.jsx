import React, { useContext } from 'react';
import LandingContext from '../../context/context';
import '../about/about.css'


const About = () => {
    const { about } = useContext(LandingContext);
    const { textabout, message } = about;
  
    return ( 
    <div className='about-us'>
        <section className='intro'>
            <h2 className='title'>{textabout || 'Lorem'}</h2>
            <div>
             
             <a>
                <p className='text'>
                    {message || 'Lorem'}
                </p>
            </a>
                   
               
            </div>
        </section>
    </div>
   );
 }


export default About;