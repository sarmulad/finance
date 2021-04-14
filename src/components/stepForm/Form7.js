import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
 import './index.css';

import { Typography, Button } from '@material-ui/core';


 const Form7 = ({formData, navigation, setForm}) => {
     const{Doyouownahome}=formData
     
     const homeOwnership =() => {
        let status;
        if (formData.Doyouownahome ==="Yes") {
             status = navigation.next()
        } else {
             status = navigation.go(9)
        }
        return status
        // console.log(status)
    }

    return (
        <Container  className= "form">
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
            <div className='buttons'>
                <Button 
                variant='contained'
                color='primary' 
                style={{marginTop:'1rem', marginRight:'3rem'}}
                onClick ={()=> navigation.go(5)}>
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

   </Container>
    )
}

export default Form7