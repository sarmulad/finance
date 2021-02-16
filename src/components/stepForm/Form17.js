import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Typography, Button } from '@material-ui/core';
import Accordion from './Accordion'

import useStyles from './styles.js'

 const Form17 = ({formData, navigation, setForm}) => {
     const classes =useStyles();
     const{importantForAFinancialAdvisor}=formData

    //  const [value, setValue] = React.useState('Tax expertise');

    //  const handleChange = (event) => {
    //    setValue(event.target.value);
    //  };


    return (
        <Container maxWidth='xs' className= {classes.form}>
        <h3 className= {classes.title}>Find Your Advisor Match</h3>
        <FormControl component="fieldset" style={{width:'100%'}}>
            <Typography variant="h5">Which of these is most important for your financial advisor to have?</Typography>
            <RadioGroup  controlled="true" style={{paddingLeft:'10px'}} aria-label="Which of these is most important for your financial advisor to have?"
                name="importantForAFinancialAdvisor" 
                value={importantForAFinancialAdvisor} 
                onChange={setForm}>
                <FormControlLabel
                className={classes.formControl} 
                    value="Tax expertise"
                    control={<Radio color='black'/>} 
                    label="Tax expertise" />
                <FormControlLabel 
                className={classes.formControl} 
                    value="Estate planning expertise" 
                    control={<Radio color='black'/>} 
                    label="Estate planning expertise" /> 
                <FormControlLabel 
                className={classes.formControl} 
                    value="Insurance product expertise" 
                    control={<Radio color='black'/>} 
                    label="Insurance product expertise" /> 
               <FormControlLabel 
               className={classes.formControl} 
                    value="None of the above" 
                    control={<Radio color='black'/>} 
                    label="None of the above" /> 
                
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

export default Form17