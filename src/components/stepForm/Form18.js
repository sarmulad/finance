import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
 import './index.css';

import { Typography, Button } from '@material-ui/core';


 const Form18 = ({formData, navigation, setForm}) => {
     const{Pleaseestimateyourcurrentmonthlysavings}=formData

    


    return (
        <Container  className= "form">
        <FormControl component="fieldset" style={{width:'100%'}}>
            <Typography variant="h5" className="question">Please estimate your current monthly savings.</Typography>
            <RadioGroup  controlled="true" style={{paddingLeft:'10px'}} aria-label="Please estimate your current monthly savings.."
                name="Pleaseestimateyourcurrentmonthlysavings" 
                value={Pleaseestimateyourcurrentmonthlysavings} 
                onChange={setForm}>
                <FormControlLabel
                     className="form-control"   
                    value="Lessthan$100"
                    control={<Radio color='black'/>} 
                    label="
                    Less than $100" />

                <FormControlLabel 
                className="form-control"    
                    value="$100 - $249" 
                    control={<Radio  color='black'/>} 
                    label="$100 - $249" /> 

                <FormControlLabel 
                className="form-control"   
                    value="$250-$499" 
                    control={<Radio  color='black'/>} 
                    label="$250 - $499" /> 

                    <FormControlLabel 
                    className="form-control"   
                    value="$500 - $999" 
                    control={<Radio color='black'/>} 
                    label="$500 - $999" /> 

                    <FormControlLabel 
                    className="form-control"    
                    value="$1,000 - $1,999" 
                    control={<Radio color='black'/>} 
                    label="$1,000 - $1,999" /> 

                    <FormControlLabel 
                    className="form-control"   
                    value="Over $2,000" 
                    control={<Radio color='black'/>} 
                    label="Over $2,000" /> 
              
                
            </RadioGroup>
            <div className='buttons'>
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

export default Form18