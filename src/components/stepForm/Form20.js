import React from 'react'
import Container from '@material-ui/core/Container'

import Accordion from './Accordion' ;
 import './index.css';

import { Typography, Button } from '@material-ui/core';


 const Form20= ({formData, navigation, setForm}) => {
   
     const{ZipCode }=formData

    //  const [value, setValue] = React.useState('');

    //  const handleChange = (event) => {
    //    setValue(event.target.value);
    //  };


    return (
        <Container  className= "form">
            <Typography variant='h6' className= "banner">Find Your Advisor Match</Typography>
                <Typography  controlled="true" variant='h4'>Where are you located ? </Typography>
                <input type='text' placeholder='Zip code (e.g 90210)'
                    name='ZipCode'
                    onChange = {setForm}
                    value = {ZipCode}
                    
                    style={{border:'1px solid black', padding:'15px',margin:'50px 0px 150px 0px', width:'90%',outline:'none'}}
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
                onClick ={()=>navigation.next()}>
                Next
                </Button>
            </div>
            <Accordion/>

</Container>
    )
}

export default Form20