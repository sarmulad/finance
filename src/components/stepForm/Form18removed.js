import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Typography, Button } from '@material-ui/core';
 import './index.css';


 const Form18 = ({formData, navigation, setForm}) => {
     const{Issociallyresponsibleinvestingimportanttoyou}=formData

    //  const [value, setValue] = React.useState('Must have');

    //  const handleChange = (event) => {
    //    setValue(event.target.value);
    //  };


    return (
        <Container  className= "form">
        <FormControl component="fieldset" style={{width:'100%'}}>
            <Typography variant="h5" className="question">Is socially responsible investing important to you?</Typography>
            <RadioGroup   controlled="true" style={{paddingLeft:'10px'}} aria-label="Is socially responsible investing important to you?"
                name="Issociallyresponsibleinvestingimportanttoyou" 
                value={Issociallyresponsibleinvestingimportanttoyou} 
                onChange={setForm}>
                <FormControlLabel
                className="form-control"   
                    value="Musthave"
                    control={<Radio color='black' />} 
                    label="Must have" />
                <FormControlLabel 
                className="form-control" 
                    value="Nice to have" 
                    control={<Radio color='black'/>} 
                    label="Nice to have" /> 
                <FormControlLabel 
                className="form-control" 
                    value="Not important" 
                    control={<Radio color='black'/>} 
                    label="Not important" /> 
              
                
            </RadioGroup>
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

export default Form18