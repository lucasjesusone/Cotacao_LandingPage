import React, { Component } from 'react';
import Header from './components/header/Header'
import About from './components/about/About'
import Main from './components/main/Main'
import Mission from './components/mission/Mission'
import Contact from './components/contact/Contact'
export default class App extends Component {
 render(){
  return (
    <div className='container'>

      <Header/>
      <About/>
      <Main/>
      <Mission/>
      <Contact/>
    </div>
   );
 }
}