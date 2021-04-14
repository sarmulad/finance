import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Typography, Button } from '@material-ui/core';
 import './index.css';


 const OptionalQuestion1 = ({formData, navigation, setForm}) => {

     const{Areyousavingjointlyorseparately }=formData

    


    return (
        <Container  className= "form">
        <FormControl component="fieldset" style={{width:'100%'}}>
            <Typography variant="h5" className="question">Are you saving jointly or separately?</Typography>
            <RadioGroup  controlled="true" style={{paddingLeft:'10px'}} aria-label="Are you saving jointly or separately?
            " name="Areyousavingjointlyorseparately" value={Areyousavingjointlyorseparately} onChange={setForm}>
                <FormControlLabel
                className="form-control"  
                 value="Separately"
                  control={<Radio color='black'/>} 
                 label="Separately" />
                <FormControlLabel 
                className="form-control"
                 value="Jointly" 
                 control={<Radio color='black'/>} 
                 label="Jointly" />
                 <FormControlLabel 
                className="form-control"
                 value="Not Applicable" 
                 control={<Radio color='black'/>} 
                 label="Not Applicable" />
                
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

export default OptionalQuestion1