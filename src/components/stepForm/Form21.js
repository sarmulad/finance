import React, {useEffect} from 'react'
import Container from '@material-ui/core/Container'
 import './index.css';
import { Typography, Button,FormControl } from '@material-ui/core';

 const Form27= ({formData, navigation, setForm}) => {
     const{messagetomatch }=formData


    return (
        <Container  className= "form">
        <FormControl component="fieldset" style={{width:'100%'}}>

                <Typography  controlled="true" variant='h5'>Is there anything else you'd like your matches to know? (optional) </Typography>
                <input type='text' 
                    name='messagetomatch'
                    onChange = {setForm}
                    value = {messagetomatch}
                    style={{border:'1px solid black', padding:'15px',margin:'50px 0px 150px 0px', width:'90%',outline:'none'}}
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
                onClick ={()=>navigation.next()}>
                Next
                </Button>
            </div>
   </FormControl>
</Container>
    )
}

export default Form27