import React, { useState } from "react"; 
import validator from 'validator'
import Container from '@material-ui/core/Container'
 import './index.css';
import { Typography, Button,FormControl } from '@material-ui/core';

const Email = ({formData, navigation, setForm}) =>  { 
      const {Email, Phone} = formData
      const [emailError, setEmailError] = useState('') 

const validateEmail = (e) => { 
    setForm(e)
	var email = Email
	if (validator.isEmail(email)) { 
	setEmailError('') 
	} else { 
	setEmailError('Enter valid Email!') 
	} 
} 

const submitEmail = () => {
    if (!Email || !Phone) {
        alert('Please enter a valid phone and Email')
    }
    else {
        return navigation.next()
    }
}


return ( 
    <Container className= "form">
        <FormControl component="fieldset" style={{width:'100%'}}>

                    <Typography variant="h5" >Where can you receive information about your advisors? </Typography>
                    <p style={{ fontFamily:'sans-serif', fontSize:'12px', lineHeight:'20px'}}>Bonus: We'll send you a personalized retirement report once you verify your contact info</p>
                    <span style={{fontFamily:'sans-serif', marginBottom:'8px'}}>Enter Email: </span><br/>
                    <input type='email' 
                        autoComplete='off'
                        name='Email'
                        onChange = {(e)=>validateEmail(e)}
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
                    <span style={{fontFamily:'sans-serif', marginBottom:'8px'}}>Enter Phone: </span><br/>
                    <input type='tel' 
                        name='Phone'
                        required='true'
                        onChange = {setForm}
                        value = {Phone}
                        style={{border:'1px solid #dee1e9 ', borderRadius:'5px', padding:'5px',margin:'5px 0px 0px 0px', width:'90%',outline:'none'}}
                    /><br/>
                
                <div className='buttons'>
                    <Button 
                    variant='contained'
                    color='primary' 
                    style={{marginTop:'1rem', marginRight:'3rem'}}
                    onClick ={()=>navigation.go(21)}>
                        Back
                    </Button>
                    <Button 
                    variant='contained'
                    color='secondary' 
                    style={{marginTop:'1rem'}}
                    onClick ={submitEmail}>
                    Next
                    </Button>
                </div>
            </FormControl>
        </Container>
); 
} 

export default Email
