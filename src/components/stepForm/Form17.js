import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Typography, Button } from '@material-ui/core';
 import './index.css';


 const Form17 = ({formData, navigation, setForm}) => {
     const{importantForAFinancialAdvisor}=formData

    //  const [value, setValue] = React.useState('Tax expertise');

    //  const handleChange = (event) => {
    //    setValue(event.target.value);
    //  };


    return (
        <Container  className= "form">
        <FormControl component="fieldset" style={{width:'100%'}}>
            <Typography variant="h5" className="question">Which of these is most important for your financial advisor to have?</Typography>
            <RadioGroup  controlled="true" style={{paddingLeft:'10px'}} aria-label="Which of these is most important for your financial advisor to have?"
                name="importantForAFinancialAdvisor" 
                value={importantForAFinancialAdvisor} 
                onChange={setForm}>
                <FormControlLabel
                className="form-control" 
                    value="Tax expertise"
                    control={<Radio color='black'/>} 
                    label="Taxexpertise" />
                <FormControlLabel 
                className="form-control" 
                    value="Estate planning expertise" 
                    control={<Radio color='black'/>} 
                    label="Estate planning expertise" /> 
                <FormControlLabel 
                className="form-control" 
                    value="Insurance product expertise" 
                    control={<Radio color='black'/>} 
                    label="Insurance product expertise" /> 
               <FormControlLabel 
               className="form-control" 
                    value="None of the above" 
                    control={<Radio color='black'/>} 
                    label="None of the above" /> 
                
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

export default Form17