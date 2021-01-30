import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Typography, Button } from '@material-ui/core';
import Accordion from './Accordion'

import useStyles from './styles.js'

 const Form18 = ({formData, navigation, setForm}) => {
     const classes =useStyles();
     const [value, setValue] = React.useState('Must have');

     const handleChange = (event) => {
       setValue(event.target.value);
     };


    return (
        <Container maxWidth='xs' className= {classes.form}>
        <h3 className= {classes.title}>Find Your Advisor Match</h3>
        <FormControl component="fieldset" style={{width:'100%'}}>
            <Typography variant="h5">Is socially responsible investing important to you?</Typography>
            <RadioGroup style={{paddingLeft:'10px'}} aria-label="Is socially responsible investing important to you?"
                name="Is socially responsible investing important to you?" 
                value={value} 
                onChange={handleChange}>
                <FormControlLabel
                className={classes.formControl}   
                    value="Must have"
                    control={<Radio color='black' />} 
                    label="Must have" />
                <FormControlLabel 
                className={classes.formControl} 
                    value="Nice to have" 
                    control={<Radio color='black'/>} 
                    label="Nice to have" /> 
                <FormControlLabel 
                className={classes.formControl} 
                    value="Not important" 
                    control={<Radio color='black'/>} 
                    label="Not important" /> 
              
                
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

export default Form18