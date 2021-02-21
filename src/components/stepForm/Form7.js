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

 const Form7 = ({formData, navigation, setForm}) => {
     const classes =useStyles();
     const{Howwouldyoucharacterizeyouroverallhealth}=formData
     

    //  const [value, setValue] = React.useState('Excellent');

    //  const handleChange = (event) => {
    //    setValue(event.target.value);
    //  };


    return (
        <Container  className= "form">
        <Typography variant='h6' className= "banner">Find Your Advisor Match</Typography>
        <FormControl component="fieldset" style={{width:'100%'}}>
            <Typography variant="h5" className="question">How would you characterize your overall health?</Typography>
            <RadioGroup  controlled="true" style={{paddingLeft:'10px'}} aria-label="How would you characterize your overall health? " name="Howwouldyoucharacterizeyouroverallhealth" value={Howwouldyoucharacterizeyouroverallhealth} onChange={setForm}>
                <FormControlLabel
                className="form-control"
                 value="Excellent" control={<Radio color='black' />} 
                 label="Excellent" />
                <FormControlLabel 
                className="form-control" 
                 value="Good" 
                 control={<Radio color='black' />} 
                 label="Good" />
                <FormControlLabel
                className="form-control"
                 value="Fair" 
                 control={<Radio color='black' />}
                  label="Fair" />
                <FormControlLabel 
                className="form-control"
                value="Poor" 
                 control={<Radio color='black' />} 
                 label=" Poor" />
                
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

export default Form7