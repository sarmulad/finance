import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
 import './index.css';

import { Typography, Button } from '@material-ui/core';


 const Form14 = ({formData, navigation, setForm}) => {
     const{Doyouhavea401k}=formData




    return (
        <Container  className= "form">
                <FormControl component="fieldset" style={{width:'100%'}}>
                    <Typography variant="h5" className="question">Do you have a 401k?</Typography>
                    <RadioGroup  controlled="true" style={{paddingLeft:'10px'}} aria-label="Do you have a 401k?"
                        name="Doyouhavea401k" 
                        value={Doyouhavea401k} 
                        onChange={setForm}>
                        <FormControlLabel
                        className="form-control"
                            value="Yes"
                            control={<Radio color='black'/>} 
                            label="Yes" />
                        <FormControlLabel 
                        className="form-control"
                            value="No" 
                            control={<Radio color='black'/>} 
                            label="No" /> 
                        
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

export default Form14