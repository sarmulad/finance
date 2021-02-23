import React, {useEffect} from 'react'
import Container from '@material-ui/core/Container'
import Accordion from './Accordion' ;
 import './index.css';
import { Typography, Button } from '@material-ui/core';

 const Form27= ({formData, navigation, setForm}) => {
     const{messagetomatch }=formData
 

    return (
        <Container  className= "form">
            <Typography variant='h6' className= "banner">Find Your Advisor Match</Typography>
                <Typography  controlled="true" variant='h4'>Is there anything else you'd like your matches to know? (optional) </Typography>
                <input type='text' 
                    name='messagetomatch'
                    onChange = {setForm}
                    value = {messagetomatch}
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
                Submit
                </Button>
            </div>
            <Accordion/>

</Container>
    )
}

export default Form27