import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Typography, Button } from '@material-ui/core';

import useStyles from './styles.js'

 const Form4 = ({formData, navigation, setForm}) => {
     const classes =useStyles();
     const [value, setValue] = React.useState('1-4 years');

     const handleChange = (event) => {
       setValue(event.target.value);
     };


    return (
        <Container maxWidth='xs' className= {classes.form}>
            <h3 className= {classes.title}>Find Your Advisor Match</h3>
            <FormControl component="fieldset" style={{width:'100%'}}>
                <Typography variant="h5">What activity is most important to you in retirement?</Typography>
                <RadioGroup style={{paddingLeft:'10px'}} aria-label=" What activity is most important to you in retirement?" name="What activity is most important to you in retirement?" value={value} onChange={handleChange}>
                    <FormControlLabel
                     style={{border:'1px solid black', 
                     marginTop:'5px', borderRadius:'10px'}}  
                     value="Traveling" control={<Radio />} 
                     label="Traveling" />
                    <FormControlLabel 
                    style={{border:'1px solid black',
                     marginTop:'5px',borderRadius:'10px'}} 
                     value="Spending time with family and friends" 
                     control={<Radio />} 
                     label="Spending time with family and friends" />
                    <FormControlLabel
                     style={{border:'1px solid black',
                     marginTop:'5px',borderRadius:'10px'}} 
                     value="Pursuing hobbies" 
                     control={<Radio />}
                      label="Pursuing hobbies" />
                    <FormControlLabel 
                    style={{border:'1px solid black',marginTop:'5px',borderRadius:'10px'}} 
                    value=" Working part-time" 
                     control={<Radio />} 
                     label="  Working part-time" />
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

export default Form4