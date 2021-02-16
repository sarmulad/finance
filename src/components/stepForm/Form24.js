import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Typography, Button } from '@material-ui/core';
import Accordion from './Accordion'

import useStyles from './styles.js'

 const Form24 = ({formData, navigation, setForm}) => {
     const classes =useStyles();
     const{Pleaseestimateyourtotalinvestableassets }=formData

    //  const [value, setValue] = React.useState('');

    //  const handleChange = (event) => {
    //    setValue(event.target.value);
    //  };


    return (
        <Container maxWidth='xs' className= {classes.form}>
        <h3 className= {classes.title}>Find Your Advisor Match</h3>
        <FormControl component="fieldset" style={{width:'100%'}}>
            <Typography variant="h5">Please estimate your total investable assets.</Typography>
            <RadioGroup  controlled="true"  style={{paddingLeft:'10px'}} aria-label="Please estimate your total investable assets.."
                name="Pleaseestimateyourtotalinvestableassets" 
                value={Pleaseestimateyourtotalinvestableassets} 
                onChange={setForm}>
                <FormControlLabel
                className={classes.formControl}   
                    value="Less than $25,000"
                    control={<Radio color='black'/>} 
                    label="
                    Less than $25,000" />

                <FormControlLabel 
                className={classes.formControl}   
                    value="$25,000 - $99,999" 
                    control={<Radio color='black'/>} 
                    label="$25,000 - $99,999" /> 

                <FormControlLabel 
                className={classes.formControl}   
                    value="$100,000 - $249,999" 
                    control={<Radio color='black'/>} 
                    label="$100,000 - $249,999" /> 

                    <FormControlLabel 
                    className={classes.formControl}   
                    value="$250,000 - $999,999" 
                    control={<Radio  color='black'/>} 
                    label="$250,000 - $999,999" /> 

                    <FormControlLabel 
                    className={classes.formControl}    
                    value="$1,000,000 - $4,999,999" 
                    control={<Radio color='black' />} 
                    label="$1,000,000 - $4,999,999" /> 

                    <FormControlLabel 
                    className={classes.formControl}   
                    value="Over $5,000,000" 
                    control={<Radio color='black'/>} 
                    label="Over $5,000,000" /> 
              
                
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