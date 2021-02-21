import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Accordion from './Accordion' ;
 import './index.css';

import { Typography, Button } from '@material-ui/core';

import useStyles from './styles.js'

 const Form10 = ({formData, navigation, setForm}) => {
     const classes =useStyles();
     const{Doyouownahome}=formData
     
     const homeOwnership =() => {
        let status = ''
        if (formData.Doyouownahome == "Yes") {
            let status = navigation.next()
        } else {
            let status = navigation.go(12)
        }
        return status
        // console.log(status)
    }

    return (
        <Container  className= "form">
            <Typography variant='h6' className= "banner">Find Your Advisor Match</Typography>
            <FormControl  component="fieldset" style={{width:'100%'}}>
                <Typography variant="h5" className="question">Do you own your home?</Typography>
                <RadioGroup  controlled="true" style={{paddingLeft:'10px'}} aria-label="Do you own your home" name="Doyouownahome" value={Doyouownahome} onChange={setForm}>
                    <FormControlLabel
                    className="form-control" 
                    value="No"
                    control={<Radio color='black'/>} 
                    label="No"/>
                    <FormControlLabel 
                    className="form-control" 
                    value="Yes" 
                    control={<Radio color='black'/>} 
                    label="Yes" />
                    
                </RadioGroup>
            <div >
                <Button 
                variant='contained'
                color='primary' 
                style={{marginTop:'1rem', marginRight:'3rem'}}
                onClick ={()=> navigation.go(10)}>
                    Back
                </Button>
                <Button 
                variant='contained'
                color='secondary' 
                style={{marginTop:'1rem'}}
                onClick ={()=>homeOwnership()}>
                Next
                </Button>
            </div>
        </FormControl>
        <Accordion/>

   </Container>
    )
}

export default Form10