import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Typography, Button } from '@material-ui/core';
 import './index.css';


 const Form5 = ({formData, navigation, setForm}) => {
     const{ Whichwordmostaccuratelydescribesyourvisionofretirement}=formData

    return (
        <Container   className= "form">
            <FormControl component="fieldset" style={{width:'100%'}}>
                <Typography variant="h5" className="question">What activity is most important to you in retirement?
                </Typography>
                <RadioGroup  controlled="true" style={{paddingLeft:'10px'}}
                 aria-label=" Which word most accurately describes your vision of retirement?"
                  name="Whichwordmostaccuratelydescribesyourvisionofretirement"
                   value={Whichwordmostaccuratelydescribesyourvisionofretirement} 
                   onChange={setForm}>
                    <FormControlLabel
                    className="form-control" 
                     value="Enjoyment" control={<Radio color='black'/>} 
                     label="Enjoyment" />
                    <FormControlLabel 
                    className="form-control"
                     value="Freedom" 
                     control={<Radio  color='black'/>} 
                     label="Freedom" />
                    <FormControlLabel
                    className="form-control" 
                     value="Leisure" 
                     control={<Radio color='black'/>}
                      label="Leisure" />
                    <FormControlLabel 
                    className="form-control"
                    value=" Boredom   " 
                     control={<Radio  color='black'/>} 
                     label="  Boredom" />
                    <FormControlLabel 
                    className="form-control"
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

          </FormControl>
       </Container>
    )
}

export default Form5