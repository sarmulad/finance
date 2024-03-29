import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Typography, Button } from '@material-ui/core';
 import './index.css';


 const Form14 = ({formData, navigation, setForm}) => {
     const{PleaseEstimateYourHouseholdIncome }=formData

 


    return (
        <Container  className= "form">
        <FormControl component="fieldset" style={{width:'100%'}}>
            <Typography variant="h5" className="question">Please estimate your household income.</Typography>
            <RadioGroup  controlled="true" style={{paddingLeft:'10px'}} aria-label="Please estimate your household income."
                name="PleaseEstimateYourHouseholdIncome" 
                value={PleaseEstimateYourHouseholdIncome} 
                onChange={setForm}>
                <FormControlLabel
                className="form-control"   
                    value="Lessthan$40,000"
                    control={<Radio color='black'/>} 
                    label="
                    Less than $40,000" />

                <FormControlLabel 
                className="form-control"   
                    value="$40,000 - $74,999" 
                    control={<Radio color='black'/>} 
                    label="$40,000 - $74,999" /> 

                <FormControlLabel 
                className="form-control"   
                    value="$75,000 - $99,999" 
                    control={<Radio color='black'/>} 
                    label="$75,000 - $99,999" /> 

                    <FormControlLabel 
                    className="form-control"   
                    value="$100,000 - $149,999" 
                    control={<Radio color='black'/>} 
                    label="$100,000 - $149,999" /> 

                    <FormControlLabel 
                    className="form-control"   
                    value="$150,000 - $249,999" 
                    control={<Radio color='black'/>} 
                    label="$150,000 - $249,999" /> 

                    <FormControlLabel 
                    className="form-control"   
                    value="Over $250,000" 
                    control={<Radio color='black'/>} 
                    label="Over $250,000" /> 
              
                
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

export default Form14