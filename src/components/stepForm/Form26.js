import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Accordion from './Accordion' ;
 import './index.css';

import { Typography, Button } from '@material-ui/core';



 const Form26 = ({formData, navigation, setForm}) => {
    
     const{Howdidyouhearaboutus }=formData

    //  const [value, setValue] = React.useState('Internet search');

    //  const handleChange = (event) => {
    //    setValue(event.target.value);
    //  };


    return (
        <Container  className= "form">
        <Typography variant='h6' className= "banner">Find Your Advisor Match</Typography>
        <FormControl component="fieldset" style={{width:'100%'}}>
            <Typography variant="h5" className="question">How did you hear about us?</Typography>
            <RadioGroup  controlled="true" style={{paddingLeft:'10px'}} aria-label="How did you hear about us?."
                name="Howdidyouhearaboutus" 
                value={Howdidyouhearaboutus} 
                onChange={setForm}>
                <FormControlLabel
                    className="form-control"   
                    value=" Internet search"
                    control={<Radio color='black'/>} 
                    label="Internet search" />

                <FormControlLabel 
                className="form-control"   
                    value="Online ad" 
                    control={<Radio color='black'/>} 
                    label="Online ad" /> 

                <FormControlLabel 
                className="form-control"   
                    value="TV" 
                    control={<Radio color='black'/>} 
                    label="TV or streaming video" /> 

                    <FormControlLabel 
                    className="form-control"   
                    value="Podcast" 
                    control={<Radio color='black'/>} 
                    label="Podcast" /> 

                    <FormControlLabel 
                    className="form-control"   
                    value="Physical mail" 
                    control={<Radio color='black'/>} 
                    label="Physical mail" /> 

                    <FormControlLabel 
                    className="form-control"   
                    value="Other" 
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
            <Accordion/>

    </FormControl>
</Container>
    )
}

export default Form26