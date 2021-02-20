import React from 'react'
import Container from '@material-ui/core/Container'
// import TextField from '@material-ui/core/TextField';
import Accordion from './Accordion'
import axios from 'axios'

import { Typography, Button } from '@material-ui/core';

import useStyles from './styles.js'

 const Form20= ({formData, navigation, setForm}) => {
     const classes =useStyles();
     const{messagetomatch }=formData

     const submitData = () => {
        // e.preventDefault()
        // axios.post(
        //     'https://hooks.zapier.com/hooks/catch/1451168/opnpfmt/', {formData}
        // )
        console.log(formData)
        fetch('https://hooks.zapier.com/hooks/catch/1451168/opnpfmt/', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
            //   'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(formData) // body data type must match "Content-Type" header
          });
        // .catch(err, )
    }

    return (
        <Container maxWidth='xs' className= {classes.form}>
            <h3 className= {classes.title}>Find Your Advisor Match</h3>
                <Typography  controlled="true" variant='h4'>Is there anything else you'd like your matches to know? (optional) </Typography>
                <input type='text' 
                    name='messagetomatch'
                    onChange = {messagetomatch}
                    value = {setForm}
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
                onClick ={()=>submitData()}>
                Submit
                </Button>
            </div>
            <Accordion/>

</Container>
    )
}

export default Form20