import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Typography, Button } from '@material-ui/core';
import Accordion from './Accordion'

import useStyles from './styles.js'

 const Form9 = ({formData, navigation, setForm}) => {
     const classes =useStyles();

     const{Areyoumarried}=formData

    //  const [value, setValue] = React.useState('No');

    //  const handleChange = (event) => {
    //    setValue(event.target.value);
    //  };


    return (
        <Container maxWidth='xs' className= {classes.form}>
        <h3 className= {classes.title}>Find Your Advisor Match</h3>
        <FormControl component="fieldset" style={{width:'100%'}}>
            <Typography variant="h5">Are you married?</Typography>
            <RadioGroup  controlled="true" style={{paddingLeft:'10px'}} aria-label="Are you married ?" name="Areyoumarried" value={Areyoumarried} onChange={setForm}>
                <FormControlLabel
                className={classes.formControl}  
                 value="No"
                  control={<Radio color='black'/>} 
                 label="No" />
                <FormControlLabel 
                className={classes.formControl}
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
            onClick ={()=>
                navigation.next()}>
            Next
            </Button>
         </div>
      </FormControl>
      <Accordion/>

   </Container>
    )
}

export default Form9