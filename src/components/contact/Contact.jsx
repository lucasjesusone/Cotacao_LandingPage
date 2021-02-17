import React, { useContext } from 'react';
import LandingProvider from '../../context/context'
import '../contact/contact.css'
import Form from '../form/Form'


const Contact = () => {
      
      const { contact } = useContext(LandingProvider) 
      const { titleContact } = contact

  return (
    <div id='contact'>
        <section>
            <h2 >{titleContact || 'olá'}</h2>
            <Form />
        </section>
    </div>
   );
}

export default Contact;