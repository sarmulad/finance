import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import { Typography, Button } from '@material-ui/core';

import useStyles from './styles.js'

 const Form24 = ({formData, navigation, setForm}) => {
     const classes =useStyles();
     const [value, setValue] = React.useState('Internet search');

     const handleChange = (event) => {
       setValue(event.target.value);
     };


    return (
        <Container maxWidth='xs' className= {classes.form}>
        <h3 className= {classes.title}>Find Your Advisor Match</h3>
        <FormControl component="fieldset" style={{width:'100%'}}>
            <Typography variant="h5">How did you hear about us?</Typography>
            <RadioGroup style={{paddingLeft:'10px'}} aria-label="How did you hear about us?."
                name="How did you hear about us?." 
                value={value} 
                onChange={handleChange}>
                <FormControlLabel
                className={classes.formControl}   
                    value=" Internet search"
                    control={<Radio color='black'/>} 
                    label="Internet search" />

                <FormControlLabel 
                className={classes.formControl}   
                    value="Online ad" 
                    control={<Radio color='black'/>} 
                    label="Online ad" /> 

                <FormControlLabel 
                className={classes.formControl}   
                    value="TV or streaming video" 
                    control={<Radio color='black'/>} 
                    label="TV or streaming video" /> 

                    <FormControlLabel 
                    className={classes.formControl}   
                    value="Podcast" 
                    control={<Radio color='black'/>} 
                    label="Podcast" /> 

                    <FormControlLabel 
                    className={classes.formControl}   
                    value="Physical mail" 
                    control={<Radio color='black'/>} 
                    label="Physical mail" /> 

                    <FormControlLabel 
                    className={classes.formControl}   
                    value="Other" 
                    control={<Radio color='black'/>} 
                    label="Other" /> 
              
                
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

export default Form24