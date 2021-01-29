import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Typography, Button } from '@material-ui/core';

import useStyles from './styles.js'

 const Form7 = ({formData, navigation, setForm}) => {
     const classes =useStyles();
     const [value, setValue] = React.useState('Excellent');

     const handleChange = (event) => {
       setValue(event.target.value);
     };


    return (
        <Container maxWidth='xs' className= {classes.form}>
        <h3 className= {classes.title}>Find Your Advisor Match</h3>
        <FormControl component="fieldset" style={{width:'100%'}}>
            <Typography variant="h5">How would you characterize your overall health?</Typography>
            <RadioGroup style={{paddingLeft:'10px'}} aria-label="How would you characterize your overall health?                     <FormControlLabel 
            " name="How would you characterize your overall health?" value={value} onChange={handleChange}>
                <FormControlLabel
                 style={{border:'1px solid black', 
                 marginTop:'5px', borderRadius:'10px'}}  
                 value="Excellent" control={<Radio />} 
                 label="Excellent" />
                <FormControlLabel 
                style={{border:'1px solid black',
                 marginTop:'5px',borderRadius:'10px'}} 
                 value="Good" 
                 control={<Radio />} 
                 label="Good" />
                <FormControlLabel
                 style={{border:'1px solid black',
                 marginTop:'5px',borderRadius:'10px'}} 
                 value="Fair" 
                 control={<Radio />}
                  label="Fair" />
                <FormControlLabel 
                style={{border:'1px solid black',marginTop:'5px',borderRadius:'10px'}} 
                value="Poor" 
                 control={<Radio />} 
                 label=" Poor" />
                
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

export default Form7