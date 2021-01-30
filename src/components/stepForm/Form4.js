import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Accordion from './Accordion'

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
                    className={classes.formControl}  
                     value="Traveling" control={<Radio color='black'/>} 
                     label="Traveling" />
                    <FormControlLabel 
                    className={classes.formControl}
                     value="Spending time with family and friends" 
                     control={<Radio color='black' />} 
                     label="Spending time with family and friends" />
                    <FormControlLabel
                    className={classes.formControl}
                     value="Pursuing hobbies" 
                     control={<Radio  color='black'/>}
                      label="Pursuing hobbies" />
                    <FormControlLabel 
                    className={classes.formControl}
                    value=" Working part-time" 
                     control={<Radio color='black' />} 
                     label="  Working part-time" />
                    <FormControlLabel 
                    className={classes.formControl}
                     value="  Other" 
                      control={<Radio color='black' />} 
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
             <Accordion/>

          </FormControl>
       </Container>
    )
}

export default Form4