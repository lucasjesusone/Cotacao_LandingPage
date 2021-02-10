import React, { Component } from 'react';
import '../main/main.css'
import { FiCheck, FiTruck } from 'react-icons/fi'
import {BiCodeAlt, BiBookBookmark, BiBarChartAlt2} from 'react-icons/bi'
import { GiSandsOfTime } from 'react-icons/gi'


export default class Main extends Component {
 render(){
  return (
    <main id='main'>
        
        <div> 
            <div className='services'>
            {/*SERVIÇO UM -- PLANEJAMENTO*/}
            <div className='service-one'>
            <p className='service-icon'><FiCheck/></p>
            <p className='service-title'>Cordialidade</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              
            </p>
            </div>
            
             {/*SERVIÇO DOIS -- PLANEJAMENTO*/}
            <div className='service-two'>
            <p className='service-icon'><BiCodeAlt/></p>
            <p className='service-title'>Desenvolvimento</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>

            {/*SERVIÇO TRÊS -- PLANEJAMENTO*/}
            <div className='service-three'>
            <p className='service-icon'><FiTruck/></p>
            <p className='service-title'>Logística</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>

            {/*SERVIÇO TRÊS -- PLANEJAMENTO*/}
            <div className='service-four'>
            <p className='service-icon'><GiSandsOfTime/></p>
            <p className='service-title'>Tempo</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>

            {/*SERVIÇO TRÊS -- PLANEJAMENTO*/}
            <div className='service-five'>
            <p className='service-icon'><BiBarChartAlt2/></p>
            <p className='service-title'>Balanço</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>

            {/*SERVIÇO TRÊS -- PLANEJAMENTO*/}
            <div className='service-six'>
            <p className='service-icon'><BiBookBookmark/></p>
            <p className='service-title'>Listagem</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
            
            </div>
        </div>

    </main>
   );
 }
}