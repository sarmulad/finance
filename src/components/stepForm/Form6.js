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

 const Form6= ({formData, navigation, setForm}) => {
     const classes =useStyles();
     const{Wheredoyouexpectthemajorityofyourretirementincometocomefrom}=formData

    //  const [value, setValue] = React.useState('Savings and investments');

    //  const handleChange = (event) => {
    //    setValue(event.target.value);
    //  };


    return (
        <Container  className= "form">
            <Typography variant='h6' className= "banner">Find Your Advisor Match</Typography>
            <FormControl component="fieldset" style={{width:'100%'}}>
                <Typography variant="h5" className="question">Where do you expect the majority of your retirement income to come from?</Typography>
                <RadioGroup  controlled="true"  style={{paddingLeft:'10px'}} aria-label="" name="Wheredoyouexpectthemajorityofyourretirementincometocomefrom" value={Wheredoyouexpectthemajorityofyourretirementincometocomefrom} onChange={setForm}>
                    <FormControlLabel
                    className="form-control"
                     value="Savings and investments" control={<Radio color='black'/>} 
                     label="Savings and investments" />
                    <FormControlLabel 
                    className="form-control"
                     value="Employer" 
                     control={<Radio  color='black'/>} 
                     label="Employer (Pensions)" />
                    <FormControlLabel
                    className="form-control"
                     value="Government" 
                     control={<Radio color='black' />}
                      label="Government" />
                    <FormControlLabel 
                    className="form-control"
                    value=" Other" 
                     control={<Radio color='black' />} 
                     label="  Other" />
                    
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

export default Form6