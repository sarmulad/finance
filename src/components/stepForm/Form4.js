import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
 import './index.css';

import { Typography, Button } from '@material-ui/core';


 const Form4 = ({formData, navigation, setForm}) => {
     const{ Whatactivityismostimportanttoyouinretirement}=formData
    //  const [value, setValue] = React.useState('1-4 years');

    //  const handleChange = (event) => {
    //    setValue(event.target.value);
    //  };


    return (
        <Container  className= "form">
            <FormControl component="fieldset" style={{width:'100%'}}>
                <Typography variant="h5" className="question">What activity is most important to you in retirement?</Typography>
                <RadioGroup  controlled="true"  style={{paddingLeft:'10px'}} aria-label=" What activity is most important to you in retirement?" name="Whatactivityismostimportanttoyouinretirement" value={Whatactivityismostimportanttoyouinretirement} onChange={setForm}>
                    <FormControlLabel
                    className="form-control"  
                     value="Traveling" control={<Radio color='black'/>} 
                     label="Traveling" />
                    <FormControlLabel 
                    className="form-control"
                     value="Spending time with family and friends" 
                     control={<Radio color='black' />} 
                     label="Spending time with family and friends" />
                    <FormControlLabel
                    className="form-control"
                     value="Pursuing hobbies" 
                     control={<Radio  color='black'/>}
                      label="Pursuing hobbies" />
                    <FormControlLabel 
                    className="form-control"
                    value=" Working part-time" 
                     control={<Radio color='black' />} 
                     label="  Working part-time" />
                    <FormControlLabel 
                    className="form-control"
                     value="  Other" 
                      control={<Radio color='black' />} 
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

          </FormControl>
       </Container>
    )
}

export default Form4