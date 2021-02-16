import React from 'react'

import Container from '@material-ui/core/Container'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import { Typography, Button } from '@material-ui/core';
import useStyles from './styles.js'
import Accordion from './Accordion'

 const Form1 = ({formData, navigation, setForm}) => {
     const classes =useStyles();
     const{levelOfConfidence} = formData

    //  const [value, setValue] = React.useState('Not confident');
    //   //  setForm({...formData, LofConfidence:value})
    //  const handleChange = (event) => {
    //    setValue(event.target.value);
    //  };

    
    
     
    return (
        <Container maxWidth='xl' className= {classes.form}>

            <Typography variant='h6' className= {classes.title}>Find Your Advisor Match</Typography>
            <FormControl   controlled="true" component="fieldset">
                <Typography variant="h6">How confident are you in your long term financial plan?</Typography>
                <Typography variant='subtitle1' >Did you know that people who work with a financial advisor feel more
               at ease about their finances...
                and end up with about 15% more money to spend in retirement on average</Typography>
                <RadioGroup  controlled="true" controlled style={{paddingLeft:'10px'}} aria-label=" how confident are you" name='levelOfConfidence' value={levelOfConfidence} onChange={setForm}>
                  <FormControlLabel className={classes.formControl}  value="Very confident" control={<Radio color='black'/>} label="Very confident" />
                  <FormControlLabel className={classes.formControl} value="Somewhat confident" control={<Radio  color='black'/>} label="Somewhat confident" />
                  <FormControlLabel className={classes.formControl} value="Not confident" control={<Radio color='black'/>} label="Not confident" />
                  <FormControlLabel className={classes.formControl} value=" I don't have a plan"  control={<Radio color='black' />} label=" I don't have a plan" />
                  <FormControlLabel className={classes.formControl} value="other"  control={<Radio color='black' />} label=" Others" />
                </RadioGroup>
                
                <div>
                    
                    <Button 
                    variant='contained'
                    className={classes.btn}
                    style={{marginTop:'1rem',}}
                    onClick ={()=>navigation.next()}>
                    Next
                    </Button>
              </div>
              <Accordion/>
            
          </FormControl>
         
     </Container>
    )
}

export default Form1
