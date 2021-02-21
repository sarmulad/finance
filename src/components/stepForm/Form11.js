import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Accordion from './Accordion' ;
 import './index.css';

import { Typography, Button } from '@material-ui/core';

import useStyles from './styles.js'

 const Form11 = ({formData, navigation, setForm}) => {
     const classes =useStyles();

     const {Doyoucurrentlyhavechildrenunder18}= formData
    //  const [value, setValue] = React.useState('No');

    //  const handleChange = (event) => {
    //    setValue(event.target.value);
    //  };


    return (
        <Container  className= "form">
                <Typography variant='h6' className= "banner">Find Your Advisor Match</Typography>
                <FormControl component="fieldset" style={{width:'100%'}}>
                    <Typography variant="h5" className="question">Do you currently have children under 18?</Typography>
                    <RadioGroup  controlled="true" style={{paddingLeft:'10px'}} aria-label="Do you currently have children under 18?              
                    " name="Doyoucurrentlyhavechildrenunder18" value={Doyoucurrentlyhavechildrenunder18} onChange={setForm}>
                        <FormControlLabel
                        className="form-control"  
                            value="No"
                            control={<Radio color='black'/>} 
                            label="No" />
                        <FormControlLabel 
                        className="form-control"
                            value="Yes,1" 
                            control={<Radio color='black'/>} 
                            label="Yes, 1" /> 
                        <FormControlLabel 
                        className="form-control"
                            value="Yes, 2" 
                            control={<Radio color='black'/>} 
                            label="Yes , 2" />
                        <FormControlLabel 
                        className="form-control"
                            value="Yes, 3 or more" 
                            control={<Radio color='black' />} 
                            label="Yes , 3 or more" />
                        
                    </RadioGroup>
                <div >
                    <Button 
                    variant='contained'
                    color='primary' 
                    style={{marginTop:'1rem', marginRight:'3rem'}}
                    onClick ={()=> navigation.go(10)}>
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

export default Form11