import React, { Component } from 'react';
import '../main/main.css'
import Icon from 'react-native-vector-icons/'


export default class Main extends Component {
 render(){
  return (
    <main id='main'>
        
        <div> 
            <div className='services'>
            {/*SERVIÇO UM -- PLANEJAMENTO*/}
            <div className='service-one'>
            <p className='service-icon'><i className='far fa-calendar-alt'></i></p>
            <p className='service-title'>Planejamento</p>
            <p>LOREM IPSUS</p>
            </div>
            
             {/*SERVIÇO DOIS -- PLANEJAMENTO*/}
            <div className='service-two'>
            <p className='service-icon'><i className='far fa-calendar-alt'></i></p>
            <p className='service-title'>Planejamento</p>
            <p>LOREM IPSUS</p>
            </div>

            {/*SERVIÇO TRÊS -- PLANEJAMENTO*/}
            <div className='service-three'>
            <p className='service-icon'><i className='far fa-calendar-alt'></i></p>
            <p className='service-title'>Planejamento</p>
            <p>LOREM IPSUS</p>
            </div>

            {/*SERVIÇO TRÊS -- PLANEJAMENTO*/}
            <div className='service-four'>
            <p className='service-icon'><i className='far fa-calendar-alt'></i></p>
            <p className='service-title'>Planejamento</p>
            <p>LOREM IPSUS</p>
            </div>

            {/*SERVIÇO TRÊS -- PLANEJAMENTO*/}
            <div className='service-five'>
            <p className='service-icon'><i className='far fa-calendar-alt'></i></p>
            <p className='service-title'>Planejamento</p>
            <p>LOREM IPSUS</p>
            </div>

            {/*SERVIÇO TRÊS -- PLANEJAMENTO*/}
            <div className='service-six'>
            <p className='service-icon'><i className='far fa-calendar-alt'></i></p>
            <p className='service-title'>Planejamento</p>
            <p>LOREM IPSUS</p>
            </div>
            
            </div>
        </div>

    </main>
   );
 }
}