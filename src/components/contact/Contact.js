import React, { Component } from 'react';
import '../contact/contact.css'
import Form from '../form/Form'


export default class Contact extends Component {
 render(){
  return (
    <div id='contact'>
        <section>
            <h2 >Contate-us</h2>
            <Form/>
        </section>
    </div>
   );
 }
}