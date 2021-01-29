import React from 'react'

import Container from '@material-ui/core/Container'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Typography, Button } from '@material-ui/core';
import useStyles from './styles.js'

 const FormSecond = ({formData, navigation, setForm}) => {
     const classes =useStyles();
     
     const [value, setValue] = React.useState('Not confident');

     const handleChange = (event) => {
       setValue(event.target.value);
     };

    return (
        <Container maxWidth='xs' className= {classes.form}>
            <h3 className= {classes.title}>Find Your Advisor Match</h3>
            <FormControl component="fieldset">
                <Typography variant="h5">How confident are you in your long term financial plan?</Typography>
                <Typography variant='h6' >Did you know that people who work with a financial advisor feel more
                at ease about their finances...
                and end up with about 15% more money to spend in retirement on average</Typography>
                <RadioGroup style={{paddingLeft:'10px'}} aria-label=" how confident are you" name="how confident are you in your financial plan" value={value} onChange={handleChange}>
                  <FormControlLabel style={{border:'1px solid black', marginTop:'5px', borderRadius:'10px'}}  value="Very confident" control={<Radio />} label="Very confident" />
                  <FormControlLabel style={{border:'1px solid black', marginTop:'5px',borderRadius:'10px'}} value="Somewhat confident" control={<Radio />} label="Somewhat confident" />
                  <FormControlLabel style={{border:'1px solid black',marginTop:'5px',borderRadius:'10px'}} value="Not confident" control={<Radio />} label="Not confident" />
                  <FormControlLabel style={{border:'1px solid black',marginTop:'5px',borderRadius:'10px'}} value=" I don't have a plan"  control={<Radio />} label=" I don't have a plan" />
                  <FormControlLabel style={{border:'1px solid black', marginTop:'5px',borderRadius:'10px'}} value="other"  control={<Radio />} label=" Others" />
                </RadioGroup>
                <div>
                    
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

export default FormSecond
