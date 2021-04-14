import React from 'react'
import Container from '@material-ui/core/Container'

 import './index.css';

import { Typography, Button,FormControl } from '@material-ui/core';


 const Form16= ({formData, navigation, setForm}) => {
   
     const{ZipCode }=formData
     
     const ZipCodeField =() => {
        let status = ''
        if (formData.ZipCode === "") {
            status = null
            alert("Please enter a valid Zip code")
        } else {
            status = navigation.next()
        }
        return status
    }

    


    return (
        <Container  className= "form">
        <FormControl component="fieldset" style={{width:'100%'}}>

                <Typography  controlled="true" variant='h4'>Where are you located ? </Typography>
                <input type='number' placeholder='Zip code (e.g 90210)'
                    name='ZipCode'
                    onChange = {setForm}
                    value = {ZipCode}
                    style={{border:'1px solid black', padding:'15px',margin:'50px 0px 80px 0px', width:'90%',outline:'none'}}
                />
               
            <div className='buttons'>
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
                onClick ={()=>ZipCodeField()}>
                Next
                </Button>
            </div>
        </FormControl>
</Container>
    )
}

export default Form16