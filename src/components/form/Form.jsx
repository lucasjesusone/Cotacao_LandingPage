import React, { useState} from 'react';
import '../form/form.css'


const Form = () => {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setDescription] = useState('')
const [formError, setFormError] = useState(false)




    const getName = (event) => {let username = event.target.value; 
        setName(username);

        console.log(name)
        } 

        const getEmail = (event) => {
        let userEmail = event.target.value;
        
        if(userEmail.match(/^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)){ 
            setEmail(
                userEmail
        );
            }else {
            setEmail({
                email: ''
            });
            console.log('Email Incorreto')
        };

        console.log(email)
     }

    const getDescription = (event) => {
        let userMessage = event.target.value;
        setDescription(
            userMessage
        );
        console.log(message)
    }
    
    
    //Submit Form
    const submitForm = (event) =>{
        event.preventDefault();


        if(submitForm === true) {
            return ('')
        }
        if(name === '' || email === '' || message === '') {
            setFormError(
                        true
            )
            return false;
        } else {
           setFormError(
                false
             )
            console.log(`UserData: {
                Username: ${name},
                Email: ${email},
                Message: ${message}
            }`)
        
        
            console.log("Formulário Enviado")
        
        }
     
      }
      
     
    

        return (
           <form>
                    {/* I am just sending a basic error message */}
                    {formError && 
                 <p className='error'>
                     Preencha todos os campos
                </p>
                    }
        
                <p>Preencha o seguinte formulário para entrar em contato conosco.</p>
                <div>
                    
                    <label htmlFor='name'>Nome</label>
                    <input type='text' name='name' placeholder='Seu nome' onChange={getName}/>
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' placeholder='Seu Email' onChange={getEmail} />
                </div>
                <div >
                    <label htmlFor='name'>Mensagem</label>
                    <textarea onChange={getDescription} maxLength='450' placeholder='Escreva sua mensagem aqui.'></textarea>
                </div>
                
                <div>
                    <p>Iremos responder em breve</p>
                    <input type='submit' name='submit' value='Enviar' onClick={submitForm}/>                
                </div>


         </form>
        )
}     
export default Form;
