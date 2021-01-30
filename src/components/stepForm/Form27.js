import React from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField';


import { Typography, Button } from '@material-ui/core';

import useStyles from './styles.js'

 const Form20= ({formData, navigation, setForm}) => {
     const classes =useStyles();
     const [value, setValue] = React.useState('');

     const handleChange = (event) => {
       setValue(event.target.value);
     };


    return (
        <Container maxWidth='xs' className= {classes.form}>
            <h3 className= {classes.title}>Find Your Advisor Match</h3>
                <Typography variant='h4'>Is there anything else you'd like your matches to know? (optional) </Typography>
                <input type='text' 
                    name='message to match'
                    onChange = {handleChange}
                    value = {value}
                    style={{border:'1px solid black', padding:'15px',margin:'50px 0px 150px 0px', width:'90%',outline:'none'}}
                />
               
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
</Container>
    )
}

export default Form20