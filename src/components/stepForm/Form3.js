import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
 import './index.css';

import { Typography, Button } from '@material-ui/core';


 const Form3 = ({formData, navigation, setForm}) => {
     const {Howdoyoucurrentlymanageyourmoney} =formData


    //  const [value, setValue] = React.useState('I manage my own investments');

    //  const handleChange = (event) => {
    //    setValue(event.target.value);
    //  };


    return (
        <Container  className= "form">
            <FormControl component="fieldset" style={{width:'100%'}}>
                <Typography variant="h5" className="question">How do you currently manage your money?</Typography>
                <RadioGroup  controlled="true" style={{paddingLeft:'10px'}} aria-label="How do you currently manage your money?" name="Howdoyoucurrentlymanageyourmoney" value={Howdoyoucurrentlymanageyourmoney} onChange={setForm}>
                    <FormControlLabel className="form-control"  value="Imanagemyowninvestments" control={<Radio color='black' />} label="I manage my own investments" />
                    <FormControlLabel className="form-control" value="I use retirement plans (such as a 401(k), Roth IRA, IRA)" control={<Radio color='black'/>} label="I use retirement plans (such as a 401(k), Roth IRA, IRA)" />
                    <FormControlLabel className="form-control" value="I use a robo-advisor" control={<Radio color='black'/>} label="I use a robo-advisor" />
                    <FormControlLabel className="form-control" value=" I work with a financial advisor"  control={<Radio color='black'/>} label=" I work with a financial advisor" />
                    <FormControlLabel className="form-control" value="None of the above"  control={<Radio color='black' />} label=" None of the above" />
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

export default Form3