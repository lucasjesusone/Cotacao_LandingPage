import React, { Component } from 'react';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Main from './components/main/Main'
import Mission from './components/mission/Mission'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
<<<<<<< HEAD


=======
import Button from './components/nav/Button'
>>>>>>> 651c2d6e516b12afc0a869d8d382ba1a89b4d88a
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
<<<<<<< HEAD
      
=======
      <Button />
>>>>>>> 651c2d6e516b12afc0a869d8d382ba1a89b4d88a
    </div>
   );
 }
}