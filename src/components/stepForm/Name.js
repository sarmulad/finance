import React, { useState } from "react"; 
import validator from 'validator'
import Container from '@material-ui/core/Container'
import Accordion from './Accordion' ;
 import './index.css';
import { Typography, Button } from '@material-ui/core';

const Name = ({formData, navigation, setForm}) =>  { 
      const {FirstName, LastName} = formData

      const submitData = () => {

       fetch('https://hooks.zapier.com/hooks/catch/1451168/opnpfmt/', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
        //   'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(formData)
         // body data type must match "Content-Type" header
      }).then(() => alert("submitted sucessfully, we will contact you"))
      .catch(() => alert("There was an error, please try again"));
        // .catch(err, )
    }

return ( 
    <Container   className= "form">
            <Typography variant='h6' className= "banner">Find Your Advisor Match</Typography>
                <Typography variant="h5" gutterBottom >Great! We've found some fantastic advisors who fit your needs </Typography>
                <Typography variant="h5" gutterBottom>Who should we have them reach out to? </Typography>

                <span style={{fontFamily:'sans-serif',marginBottom:'8px'}}>First Name: </span><br/>
                <input type='text' 
                    name='FirstName'
                    onChange = {setForm}
                    value = {FirstName}
                    style={{border:'1px solid #dee1e9', borderRadius:'5px', padding:'5px',margin:'5px 0px 30px 0px', width:'90%',outline:'none'}}
                /><br/>
                <span style={{fontFamily:'sans-serif', marginBottom:'8px'}}>Last Name: </span><br/>

                <input type='text' 
                name='LastName'
                onChange = {setForm}
                value = {LastName}
                style={{border:'1px solid #dee1e9', borderRadius:'5px', padding:'5px',margin:'5px 0px 0px 0px', width:'90%',outline:'none'}}
            />  
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
                onClick ={submitData}>
                 Submit
                </Button>
            </div>
            <Accordion/>

        </Container>
); 
} 

export default Name