import React from 'react'
import Container from '@material-ui/core/Container'

 import './index.css';

import { Typography, Button } from '@material-ui/core';


 const Form20= ({formData, navigation, setForm}) => {
   
     const{ZipCode }=formData
     
     const ZipCodeField =() => {
        let status = ''
        if (formData.ZipCode == "") {
            status = null
        } else {
            status = navigation.next()
        }
        return status
    }

    


    return (
        <Container  className= "form">
                <Typography  controlled="true" variant='h4'>Where are you located ? </Typography>
                <input type='number' placeholder='Zip code (e.g 90210)'
                    name='ZipCode'
                    onChange = {setForm}
                    value = {ZipCode}
                    style={{border:'1px solid black', padding:'15px',margin:'50px 0px 80px 0px', width:'90%',outline:'none'}}
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
                onClick ={()=>ZipCodeField()}>
                Next
                </Button>
            </div>

</Container>
    )
}

export default Form20