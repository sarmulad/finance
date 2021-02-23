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

 const Form9 = ({formData, navigation, setForm}) => {
     const classes =useStyles();

     const {Areyoumarried} =formData

    //  const [value, setValue] = React.useState('No');

    //  const handleChange = (event) => {
    //    setValue(event.target.value);
    //  };
    const marriagestatus =() => {
        let status = ''
        if (formData.Areyoumarried == "Yes") {
             status = navigation.next()
        } else {
             status = navigation.go(10)
        }
        return status
    }


    return (
        <Container  className= "form">
        <Typography variant='h6' className= "banner">Find Your Advisor Match</Typography>
        <FormControl component="fieldset" style={{width:'100%'}}>
            <Typography variant="h5" className="question">Are you married?</Typography>
            <RadioGroup  controlled="true" style={{paddingLeft:'10px'}} aria-label="Are you married ?" name="Areyoumarried" value={Areyoumarried} onChange={setForm}>
                <FormControlLabel
                className="form-control"  
                 value="No"
                  control={<Radio color='black'/>} 
                 label="No" />
                <FormControlLabel 
                className="form-control"
                 value="Yes" 

                 control={<Radio color='black'/>} 
                 label="Yes" />
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
            onClick ={()=>marriagestatus()}>
            Next
            </Button>
         </div>
      </FormControl>
      <Accordion/>

   </Container>
    )
}

export default Form9