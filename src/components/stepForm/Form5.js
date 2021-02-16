import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Typography, Button } from '@material-ui/core';
import Accordion from './Accordion'

import useStyles from './styles.js'

 const Form5 = ({formData, navigation, setForm}) => {
     const classes =useStyles();

     const{ Whichwordmostaccuratelydescribesyourvisionofretirement}=formData

    //  const [value, setValue] = React.useState('Enjoyment');

    //  const handleChange = (event) => {
    //    setValue(event.target.value);
    //  };


    return (
        <Container maxWidth='xs' className= {classes.form}>
            <h3 className= {classes.title}>Find Your Advisor Match</h3>
            <FormControl component="fieldset" style={{width:'100%'}}>
                <Typography 
                variant="h5">What activity is most important to you in retirement?
                </Typography>
                <RadioGroup  controlled="true" style={{paddingLeft:'10px'}}
                 aria-label=" Which word most accurately describes your vision of retirement?"
                  name="Whichwordmostaccuratelydescribesyourvisionofretirement"
                   value={Whichwordmostaccuratelydescribesyourvisionofretirement} 
                   onChange={setForm}>
                    <FormControlLabel
                    className={classes.formControl} 
                     value="Enjoyment" control={<Radio color='black'/>} 
                     label="Enjoyment" />
                    <FormControlLabel 
                    className={classes.formControl}
                     value="Freedom" 
                     control={<Radio  color='black'/>} 
                     label="Freedom" />
                    <FormControlLabel
                    className={classes.formControl} 
                     value="Leisure" 
                     control={<Radio color='black'/>}
                      label="Leisure" />
                    <FormControlLabel 
                    className={classes.formControl}
                    value=" Boredom   " 
                     control={<Radio  color='black'/>} 
                     label="  Boredom" />
                    <FormControlLabel 
                    className={classes.formControl}
                     value="  Other" 
                      control={<Radio color='black'/>} 
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

export default Form5