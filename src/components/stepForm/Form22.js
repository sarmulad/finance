import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Accordion from './Accordion'

import { Typography, Button } from '@material-ui/core';

import useStyles from './styles.js'

 const Form22 = ({formData, navigation, setForm}) => {
     const classes =useStyles();
     const [value, setValue] = React.useState('No');

     const handleChange = (event) => {
       setValue(event.target.value);
     };


    return (
        <Container maxWidth='xs' className= {classes.form}>
        <h3 className= {classes.title}>Find Your Advisor Match</h3>
        <FormControl component="fieldset" style={{width:'100%'}}>
            <Typography variant="h5">Do you need your financial advisor to be in your immediate area?</Typography>
            <RadioGroup style={{paddingLeft:'10px'}} aria-label="Do you need your financial advisor to be in your immediate area?"
                name="Do you need your financial advisor to be in your immediate area?" 
                value={value} 
                onChange={handleChange}>
                <FormControlLabel
                    className={classes.formControl}   
                    value="No"
                    control={<Radio color='black'/>} 
                    label="
                    No, I am comfortable working by phone or video-conference" />
                <FormControlLabel 
                  className={classes.formControl} 
                    value="Yes" 
                    control={<Radio color='black'/>} 
                    label="Yes" /> 
              
                
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

export default Form22