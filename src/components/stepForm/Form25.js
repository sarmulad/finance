import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Accordion from './Accordion'

import { Typography, Button } from '@material-ui/core';

import useStyles from './styles.js'

 const Form24 = ({formData, navigation, setForm}) => {
     const classes =useStyles();
     const [value, setValue] = React.useState('Less than $100');

     const handleChange = (event) => {
       setValue(event.target.value);
     };


    return (
        <Container maxWidth='xs' className= {classes.form}>
        <h3 className= {classes.title}>Find Your Advisor Match</h3>
        <FormControl component="fieldset" style={{width:'100%'}}>
            <Typography variant="h5">Please estimate your current monthly savings.</Typography>
            <RadioGroup style={{paddingLeft:'10px'}} aria-label="Please estimate your current monthly savings.."
                name="Please estimate your current monthly savings.." 
                value={value} 
                onChange={handleChange}>
                <FormControlLabel
                className={classes.formControl}   
                    value="Less than $100"
                    control={<Radio color='black'/>} 
                    label="
                    Less than $100" />

                <FormControlLabel 
                className={classes.formControl}    
                    value="$100 - $249" 
                    control={<Radio  color='black'/>} 
                    label="$100 - $249" /> 

                <FormControlLabel 
                className={classes.formControl}   
                    value="$250 - $499" 
                    control={<Radio  color='black'/>} 
                    label="$250 - $499" /> 

                    <FormControlLabel 
                    className={classes.formControl}   
                    value="$500 - $999" 
                    control={<Radio color='black'/>} 
                    label="$500 - $999" /> 

                    <FormControlLabel 
                    className={classes.formControl}    
                    value="$1,000 - $1,999" 
                    control={<Radio color='black'/>} 
                    label="$1,000 - $1,999" /> 

                    <FormControlLabel 
                    className={classes.formControl}   
                    value="Over $2,000" 
                    control={<Radio color='black'/>} 
                    label="Over $2,000" /> 
              
                
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

export default Form24