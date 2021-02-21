import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Typography, Button } from '@material-ui/core';
import Accordion from './Accordion' ;
 import './index.css';

import useStyles from './styles.js'

 const OptionalQuestion3 = ({formData, navigation, setForm}) => {

     const classes =useStyles();
     const{Whyareyoulookingforanewone }=formData

    //  const [value, setValue] = React.useState('I’m unsatisfied with my current advisor');

    //  const handleChange = (event) => {
    //    setValue(event.target.value);
    //  };


    return (
        <Container  className= "form">
        <Typography variant='h6' className= "banner">Find Your Advisor Match</Typography>
        <FormControl  controlled="true" component="fieldset" style={{width:'100%'}}>
            <Typography variant="h5" className="question">Why are you looking for a new one?</Typography>
            <RadioGroup  style={{paddingLeft:'10px'}} aria-label="Are you married ?
            " name="Whyareyoulookingforanewone?" value={Whyareyoulookingforanewone} onChange={setForm}>
                <FormControlLabel
                className="form-control"  
                 value="I’m unsatisfied with my current advisor"
                  control={<Radio color='black' />} 
                 label="I’m unsatisfied with my current advisor" />
                <FormControlLabel 
                className="form-control"
                 value="I’d like to get another advisor’s perspective" 
                 control={<Radio color='black'/>} 
                 label="I’d like to get another advisor’s perspective" />
                 <FormControlLabel 
                className="form-control"
                 value="I have substantial wealth that I’d like to divide with another advisor" 
                 control={<Radio color='black'/>} 
                 label="I have substantial wealth that I’d like to divide with another advisor" />
                 <FormControlLabel 
                className="form-control"
                 value="
                 I recently relocated" 
                 control={<Radio color='black'/>} 
                 label=" I recently relocated" />
                 <FormControlLabel 
                className="form-control"
                 value="
                 Other" 
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
      <Accordion/>

   </Container>
    )
}

export default OptionalQuestion3