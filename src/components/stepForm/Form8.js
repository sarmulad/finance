import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Typography, Button } from '@material-ui/core';
 import './index.css';

import useStyles from './styles.js'

 const Form8= ({formData, navigation, setForm}) => {
     const classes =useStyles();
     const{Howcomfortableareyouwithinvesting}=formData


    //  const [value, setValue] = React.useState('Very comfortable');

    //  const handleChange = (event) => {
    //    setValue(event.target.value);
    //  };


    return (
        <Container   className= "form">
        <FormControl component="fieldset" style={{width:'100%'}}>
            <Typography variant="h5" className="question">How comfortable are you with investing?</Typography>
            <RadioGroup  controlled="true" style={{paddingLeft:'10px'}} aria-label="How comfortable are you with investing? " name="Howcomfortableareyouwithinvesting" value={Howcomfortableareyouwithinvesting} onChange={setForm}>
                <FormControlLabel
                className="form-control"
                 value="Verycomfortable"
                  control={<Radio color='black'/>} 
                 label="Very comfortable" />
                <FormControlLabel 
                className="form-control"
                 value="Somewhat comfortable" 
                 control={<Radio color='black'/>} 
                 label="Somewhat comfortable" />
                <FormControlLabel
                className="form-control"
                 value="Not comfortable at all" 
                 control={<Radio color='black'/>}
                  label="Not comfortable at all" />
                
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

export default Form8