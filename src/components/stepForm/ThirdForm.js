import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Typography, Button } from '@material-ui/core';

import useStyles from './styles.js'

 const ThirdForm = ({formData, navigation, setForm}) => {
     const classes =useStyles();
     const [value, setValue] = React.useState('I manage my own investments');

     const handleChange = (event) => {
       setValue(event.target.value);
     };


    return (
        <Container maxWidth='xs' className= {classes.form}>
            <h3 className= {classes.title}>Find Your Advisor Match</h3>
            <FormControl component="fieldset" style={{width:'100%'}}>
                <Typography variant="h5">How do you currently manage your money?</Typography>
                <RadioGroup style={{paddingLeft:'10px'}} aria-label="How do you currently manage your money?" name="How do you currently manage your money?" value={value} onChange={handleChange}>
                    <FormControlLabel style={{border:'1px solid black', marginTop:'5px', borderRadius:'10px'}}  value="I manage my own investments" control={<Radio />} label="I manage my own investments" />
                    <FormControlLabel style={{border:'1px solid black', marginTop:'5px',borderRadius:'10px'}} value="I use retirement plans (such as a 401(k), Roth IRA, IRA)" control={<Radio />} label="I use retirement plans (such as a 401(k), Roth IRA, IRA)" />
                    <FormControlLabel style={{border:'1px solid black',marginTop:'5px',borderRadius:'10px'}} value="I use a robo-advisor" control={<Radio />} label="I use a robo-advisor" />
                    <FormControlLabel style={{border:'1px solid black',marginTop:'5px',borderRadius:'10px'}} value=" I work with a financial advisor"  control={<Radio />} label=" I work with a financial advisor" />
                    <FormControlLabel style={{border:'1px solid black', marginTop:'5px',borderRadius:'10px'}} value="None of the above"  control={<Radio />} label=" None of the above" />
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

export default ThirdForm