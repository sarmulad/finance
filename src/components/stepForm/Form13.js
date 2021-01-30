import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import { Typography, Button } from '@material-ui/core';

import useStyles from './styles.js'

 const Form13= ({formData, navigation, setForm}) => {
     const classes =useStyles();
     const [value, setValue] = React.useState(' Doing nothing / staying the coursething / staying the course');

     const handleChange = (event) => {
       setValue(event.target.value);
     };


    return (
        <Container maxWidth='xs' className= {classes.form}>
                <h3 className= {classes.title}>Find Your Advisor Match</h3>
                <FormControl component="fieldset" style={{width:'100%'}}>
                    <Typography variant="h5">I'm responding to the impact of the Coronavirus by:</Typography>
                    <RadioGroup style={{paddingLeft:'10px'}} aria-label="I'm responding to the impact of the Coronavirus by:  
                    " name="I'm responding to the impact of the Coronavirus by:" value={value} onChange={handleChange}>
                        <FormControlLabel
                        className={classes.formControl}
                            value="Doing nothing / staying the course"
                            control={<Radio color='black'/>} 
                            label="Doing nothing / staying the course" />
                        <FormControlLabel 
                        className={classes.formControl}
                            value="Looking for advice" 
                            control={<Radio color='black'/>} 
                            label="Looking for advice" /> 
                       <FormControlLabel 
                       className={classes.formControl}
                            value="Selling my investments" 
                            control={<Radio color='black'/>} 
                            label="Selling my investments" /> 
                       <FormControlLabel 
                       className={classes.formControl}
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