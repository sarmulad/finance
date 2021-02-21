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

 const Form13= ({formData, navigation, setForm}) => {
     const classes =useStyles();
     const{ImrespondingtotheimpactoftheCoronavirusby}=formData

    //  const [value, setValue] = React.useState(' Doing nothing / staying the coursething / staying the course');

    //  const handleChange = (event) => {
    //    setValue(event.target.value);
    //  };


    return (
        <Container  className= "form">
                <Typography variant='h6' className= "banner">Find Your Advisor Match</Typography>
                <FormControl component="fieldset" style={{width:'100%'}}>
                    <Typography variant="h5" className="question">I'm responding to the impact of the Coronavirus by:</Typography>
                    <RadioGroup  controlled="true" style={{paddingLeft:'10px'}} aria-label="I'm responding to the impact of the Coronavirus by:  
                    " name="ImrespondingtotheimpactoftheCoronavirusby" value={ImrespondingtotheimpactoftheCoronavirusby} onChange={setForm}>
                        <FormControlLabel
                        className="form-control"
                            value="Doingnothing"
                            control={<Radio color='black'/>} 
                            label="Doing nothing / staying the course" />
                        <FormControlLabel 
                        className="form-control"
                            value="Looking for advice" 
                            control={<Radio color='black'/>} 
                            label="Looking for advice" /> 
                       <FormControlLabel 
                       className="form-control"
                            value="Selling my investments" 
                            control={<Radio color='black'/>} 
                            label="Selling my investments" /> 
                       <FormControlLabel 
                       className="form-control"
                            value="Buying stocks" 
                            control={<Radio color='black'/>} 
                            label="Buying stocks" /> 
    
                        
                    </RadioGroup>
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

            </FormControl>
        </Container>
    )
}

export default Form13