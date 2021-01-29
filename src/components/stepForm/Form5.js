import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Typography, Button } from '@material-ui/core';

import useStyles from './styles.js'

 const Form5 = ({formData, navigation, setForm}) => {
     const classes =useStyles();
     const [value, setValue] = React.useState('Enjoyment');

     const handleChange = (event) => {
       setValue(event.target.value);
     };


    return (
        <Container maxWidth='xs' className= {classes.form}>
            <h3 className= {classes.title}>Find Your Advisor Match</h3>
            <FormControl component="fieldset" style={{width:'100%'}}>
                <Typography 
                variant="h5">What activity is most important to you in retirement?
                </Typography>
                <RadioGroup style={{paddingLeft:'10px'}}
                 aria-label=" Which word most accurately describes your vision of retirement?"
                  name="Which word most accurately describes your vision of retirement?"
                   value={value} 
                   onChange={handleChange}>
                    <FormControlLabel
                     style={{border:'1px solid black', 
                     marginTop:'5px', borderRadius:'10px'}}  
                     value="Enjoyment" control={<Radio />} 
                     label="Enjoyment" />
                    <FormControlLabel 
                    style={{border:'1px solid black',
                     marginTop:'5px',borderRadius:'10px'}} 
                     value="Freedom" 
                     control={<Radio />} 
                     label="Freedom" />
                    <FormControlLabel
                     style={{border:'1px solid black',
                     marginTop:'5px',borderRadius:'10px'}} 
                     value="Leisure" 
                     control={<Radio />}
                      label="Leisure" />
                    <FormControlLabel 
                    style={{border:'1px solid black',marginTop:'5px',borderRadius:'10px'}} 
                    value=" Boredom " 
                     control={<Radio />} 
                     label="  Boredom" />
                    <FormControlLabel style={{border:'1px solid black', marginTop:'5px',borderRadius:'10px'}}
                     value="  Other" 
                      control={<Radio />} 
                      label="  Others" />
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

export default Form5