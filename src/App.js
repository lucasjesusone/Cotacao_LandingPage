import React, { Component } from 'react';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Main from './components/main/Main'
import Mission from './components/mission/Mission'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


export default class App extends Component {
 render(){
  return (
    <div className='container'>
      <Nav/>
      <Header/>
      <About/>
      <Main/>
      <Mission/>
      <Contact/>
      <Footer/>
      
    </div>
   );
 }
}