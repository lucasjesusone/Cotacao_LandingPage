import { nanoid } from 'nanoid';
import { FiCheck, FiTruck } from 'react-icons/fi'
import {BiCodeAlt, BiBookBookmark, BiBarChartAlt2} from 'react-icons/bi'
import { GiSandsOfTime } from 'react-icons/gi'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'

export const navData = {
    navbar: [
        {
            id: nanoid(),
            url: 'about',
            boxText: 'Sobre'
        },
        {
            id: nanoid(),
            url: 'mission',
            boxText: 'Missão'
        },
        {
            id: nanoid(),
            url: 'contact',
            boxText: 'Contato'
        }
    ]
}

export const headerData = {
        title: 'COTAR.ME',
        url: '',
        text: 'Realize suas cotações de compras com fornecedores de forma fácil, receba notificações à cada evento que ocorre no processo. Além disso você também pode integrar nossa plataforma com seu sistema ERP',
        button: 'Entre em Contato conosco'
    }



    
export const aboutData = {
    
    textabout : 'Sobre Nós',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget posuere quam, non imperdiet nulla. Etiam malesuada, tortor vel blandit porttitor, neque risus porttitor est, tristique sodales magna enim nec leo. Quisque volutpat tempus libero, in posuere tortor pretium et. Aliquam tempor, neque sed tincidunt rhoncus',
}

export const mainData = {
mainMap: [
    {
        id: nanoid(),
        icon: <FiCheck/>,
        title: 'Integração Comprador x Fornecedor',
        text: 'Melhor integração entre compradores e fornecedores por uma plataforma unificada com ferramentas que facilitam o processo de cotação',
    },
    {
        id: nanoid(),
        icon: <BiCodeAlt/>,
        title: 'API de Integração',
        text: 'Integre os dados mestres do seu ERP (requisição, materiais, fornecedores) por meio de API',
    },
    {
        id: nanoid(),
        icon: <FiTruck/>,
        title: 'Notificação por E-mail',
        text: 'Receba notificações por e-mail a cada interação no processo de cotação',
    },
    {
        id: nanoid(),
        icon: <GiSandsOfTime/>,
        title: 'Dashboards',
        text: 'Tenha os indicadores certos para mensurar as cotações em aberto, em andamento, etc',
    },
    {
        id: nanoid(),
        icon: <BiBarChartAlt2/>,
        title: 'Indicador de melhor fornecedor',
        text: 'A plataforma indica o melhor fornecedor conforme as propostas vão sendo enviadas à você',
    },
    {
        id: nanoid(),
        icon: <BiBookBookmark/>,
        title: 'LAST',
        text: '',
    }
  ],
};

export const missionData = {
    
    title: 'Our Mission',
    paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget posuere quam, non imperdiet nulla. Etiam malesuada, tortor vel blandit porttitor, neque risus porttitor est, tristique sodales magna enim nec leo. Quisque volutpat tempus libero, in posuere tortor pretium et. Aliquam tempor, neque sed tincidunt rhoncus',
    paragraph2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget posuere quam, non imperdiet nulla. Etiam malesuada, tortor vel blandit porttitor, neque risus porttitor est, tristique sodales magna enim nec leo. Quisque volutpat tempus libero, in posuere tortor pretium et. Aliquam tempor, neque sed tincidunt rhoncus'
}


export const contactData = {
    titleContact: 'Contate'
}

export const footerData = {
    footerMap: [
      {
        id: nanoid(),
        icon: <FaLinkedinIn/> ,
        url: 'https://www.linkedin.com/in/lucasgabrieljesus/',
      },
      {
        id: nanoid(),
        icon: <AiFillGithub/>,
        url: 'https://github.com/LucasJesusone',
      },
     
    ],
  };