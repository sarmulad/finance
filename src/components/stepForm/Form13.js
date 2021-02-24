import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
 import './index.css';

import { Typography, Button } from '@material-ui/core';


 const Form13= ({formData, navigation, setForm}) => {
     const{ImrespondingtotheimpactoftheCoronavirusby}=formData

    


    return (
        <Container  className= "form">
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

            </FormControl>
        </Container>
    )
}

export default Form13