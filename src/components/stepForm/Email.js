import React, { useState } from "react"; 
import validator from 'validator'
import Container from '@material-ui/core/Container'
 import './index.css';
import { Typography, Button } from '@material-ui/core';

const Email = ({formData, navigation, setForm}) =>  { 
      const {Email} = formData
      const [emailError, setEmailError] = useState('') 

const validateEmail = (e) => { 
    setForm(e)
	var email = Email
	if (validator.isEmail(email)) { 
	setEmailError('Valid Email :)') 
	} else { 
	setEmailError('Enter valid Email!') 
	} 
    
} 


return ( 
    <Container   className= "form">
                <Typography variant="h5" >Where can you receive information about your advisors? </Typography>
                <p style={{ fontFamily:'sans-serif', fontSize:'12px', lineHeight:'20px'}}>Bonus: We'll send you a personalized retirement report once you verify your contact info</p>
                <span style={{fontFamily:'sans-serif', marginBottom:'8px'}}>Enter Email: </span><br/>
                <input type='text' 
                    name='Email'
                    onChange = {validateEmail}
                    value = {Email}
                    style={{border:'1px solid #dee1e9 ', borderRadius:'5px', padding:'5px',margin:'5px 0px 0px 0px', width:'90%',outline:'none'}}
                /><br/>
                <span style={{ 
                    marginTop:'0',
                    fontFamily:'sans-serif',
                    fontSize:'11px',
                    color: 'tomato', 
                    }}>{emailError}</span> 
                <h6 style={{opacity:'0.6', fontFamily:'sans-serif'}}>Your information is secure</h6>
               
            <div >
                <Button 
                variant='contained'
                color='primary' 
                style={{marginTop:'1rem', marginRight:'3rem'}}
                onClick ={()=>navigation.previous()}>
                    Back
                </Button>
                <Button 
                variant='contained'
                color='secondary' 
                style={{marginTop:'1rem'}}
                onClick ={()=>navigation.next()}>
                  Next
                </Button>
            </div>

        </Container>
); 
} 

export default Email
