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
            <p className='service-title'>Integração Comprador x Fornecedor</p>
            <p>Melhor integração entre compradores e fornecedores por uma plataforma unificada com ferramentas que facilitam o processo de cotação
              
            </p>
            </div>
            
             {/*SERVIÇO DOIS -- PLANEJAMENTO*/}
            <div className='service-two'>
            <p className='service-icon'><BiCodeAlt/></p>
            <p className='service-title'>API de Integração</p>
            <p>Integre os dados mestres do seu ERP (requisição, materiais, fornecedores) por meio de API</p>
            </div>

            {/*SERVIÇO TRÊS -- PLANEJAMENTO*/}
            <div className='service-three'>
            <p className='service-icon'><FiTruck/></p>
            <p className='service-title'>Notificação por E-mail</p>
            <p>Receba notificações por e-mail a cada interação no processo de cotação</p>
            </div>

            {/*SERVIÇO TRÊS -- PLANEJAMENTO*/}
            <div className='service-four'>
            <p className='service-icon'><GiSandsOfTime/></p>
            <p className='service-title'>Dashboards</p>
            <p>Tenha os indicadores certos para mensurar as cotações em aberto, em andamento, etc</p>
            </div>

            {/*SERVIÇO TRÊS -- PLANEJAMENTO*/}
            <div className='service-five'>
            <p className='service-icon'><BiBarChartAlt2/></p>
            <p className='service-title'>Indicador de melhor fornecedor</p>
            <p>A plataforma indica o melhor fornecedor conforme as propostas vão sendo enviadas à você</p>
            </div>

            {/*SERVIÇO TRÊS -- PLANEJAMENTO*/}
            <div className='service-six'>
            <p className='service-icon'><BiBookBookmark/></p>
            <p className='service-title'>LAST</p>
            <p></p>
            </div>
            
            </div>
        </div>

    </main>
   );
 }
}