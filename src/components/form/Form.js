import React, { Component } from 'react';
import '../form/form.css'

export default class Form extends Component {
 constructor(){
     super();
     this.state = {
        name: '',
        email: '',
        message: '',
        formError: false
        }
    }    


    getName = (event) => {
        let username = event.target.value;
        this.setState({
            name: username
        });

        console.log(this.state.name)
    } 

    getEmail = (event) => {
        let userEmail = event.target.value;
        //the most important thing is that we use a RegEx
        //in order to manage the input of the email
        //at least we can get a some what valid email
        if(userEmail.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)){ 
            this.setState({
                email: userEmail
        });
            }else {
            this.setState({
                email: ''
            });
            console.log('Incorrect Email, Must match Expression')
        };

        console.log(this.state.email)
    }


    getDescription = (event) => {
        let userMessage = event.target.value;
        this.setState({
            message: userMessage
        });
        console.log(this.state.message)
    }


    //sending form

    submitForm = (event) =>{
        event.preventDefault();



        if(this.state.name === '' || this.state.email === '' || this.state.message === '') {
            this.setState({
                formError: true
            })
            return false;
        } else {
           
           
           
            this.setState({
                formError: false
             })
            console.log(`UserData: {
                Username: ${this.state.name},
                Email: ${this.state.email},
                Message: ${this.state.message}
            }`)
        
        
            console.log("form sent")
        
        }
     
      }
    render() {


        return (
            <form>
            {/* I am just sending a basic error message */}
                {this.state.formError && 
                <p className='error'>
                    Fill all the fields
                </p>
                }
                <p>Fill the following form to get contact with us.</p>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' placeholder='Seu nome' onChange={this.getName}/>
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' placeholder='Seu Email' onChange={this.getEmail} />
                </div>
                <div >
                    <label htmlFor='name'>Message</label>
                    <textarea onChange={this.getDescription} maxLength='450' placeholder='Write your message here.'></textarea>
                </div>
                
                <div>
                    <p>We will Answer as soon as possible</p>
                    <input type='submit' name='submit' value='Send' onClick={this.submitForm}/>                
                </div>


            </form>
        )
    }
}
