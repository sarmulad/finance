import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Typography, Button } from '@material-ui/core';

import useStyles from './styles.js'

 const Form8= ({formData, navigation, setForm}) => {
     const classes =useStyles();
     const [value, setValue] = React.useState('Very comfortable');

     const handleChange = (event) => {
       setValue(event.target.value);
     };


    return (
        <Container maxWidth='xs' className= {classes.form}>
        <h3 className= {classes.title}>Find Your Advisor Match</h3>
        <FormControl component="fieldset" style={{width:'100%'}}>
            <Typography variant="h5">How comfortable are you with investing?</Typography>
            <RadioGroup style={{paddingLeft:'10px'}} aria-label="How comfortable are you with investing? " name="How comfortable are you with investing?" value={value} onChange={handleChange}>
                <FormControlLabel
                className={classes.formControl}
                 value="Very comfortable"
                  control={<Radio color='black'/>} 
                 label="Very comfortable" />
                <FormControlLabel 
                className={classes.formControl}
                 value="Somewhat comfortable" 
                 control={<Radio color='black'/>} 
                 label="Somewhat comfortable" />
                <FormControlLabel
                className={classes.formControl}
                 value="Not comfortable at all" 
                 control={<Radio color='black'/>}
                  label="Not comfortable at all" />
                
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

export default Form8