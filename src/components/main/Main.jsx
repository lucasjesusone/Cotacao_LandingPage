import React, { useContext, Fragment} from 'react';
import '../main/main.css'
import { FiCheck, FiTruck } from 'react-icons/fi'
import {BiCodeAlt, BiBookBookmark, BiBarChartAlt2} from 'react-icons/bi'
import { GiSandsOfTime } from 'react-icons/gi'
import LandingContext from '../../context/context';

const Main = () => {
      const { main } = useContext(LandingContext)
      const { mainMap } = main
      
  
  
      return (
    <main id='main'>
          
        <div> 
            <div className='services'>
            {/*SERVIÇO UM -- PLANEJAMENTO*/}
            {mainMap &&
                       mainMap.map(function(item) {
                const {icon, title, text} = item
                return (
                 <Fragment>
            <div className='service-one'> 
                <p className='service-icon'>{icon}</p>
                <p className='service-title'>{title || 'sla'}</p>
                <p>{text}</p>
            </div>
                 </Fragment>
                )
              })}
            
            
             
         {/*<div className='service-two'>
            <p className='service-icon'><BiCodeAlt/></p>
            <p className='service-title'>API de Integração</p>
            <p>Integre os dados mestres do seu ERP (requisição, materiais, fornecedores) por meio de API</p>
            </div>*/}

            
           {/* <div className='service-three'>
            <p className='service-icon'><FiTruck/></p>
            <p className='service-title'>Notificação por E-mail</p>
            <p>Receba notificações por e-mail a cada interação no processo de cotação</p>
            </div>}

           
            {/*<div className='service-four'>
            <p className='service-icon'><GiSandsOfTime/></p>
            <p className='service-title'>Dashboards</p>
            <p>Tenha os indicadores certos para mensurar as cotações em aberto, em andamento, etc</p>
            </div>}

            
            {/*<div className='service-five'>
            <p className='service-icon'><BiBarChartAlt2/></p>
            <p className='service-title'>Indicador de melhor fornecedor</p>
            <p>A plataforma indica o melhor fornecedor conforme as propostas vão sendo enviadas à você</p>
            </div>}

           
            {/*<div className='service-six'>
            <p className='service-icon'><BiBookBookmark/></p>
            <p className='service-title'>LAST</p>
            <p></p>
            </div>*/}
            
            </div>
        </div>

    </main>
   );
 }


export default Main;