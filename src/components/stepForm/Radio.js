import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Typography, Button } from '@material-ui/core';

export default function RadioButtonsGroup({navigation}) {
  const [value, setValue] = React.useState('1-4 years');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <Typography variant="h5" className="question">When would you like to retire?</Typography>
      <RadioGroup style={{paddingLeft:'10px'}} aria-label=" retirement time" name="retirement time" value={value} onChange={handleChange}>
        <FormControlLabel style={{border:'1px solid black', marginTop:'5px', borderRadius:'10px'}}  value="1-4 years" control={<Radio />} label="1-4 years" />
        <FormControlLabel style={{border:'1px solid black', marginTop:'5px',borderRadius:'10px'}} value="5-9 years" control={<Radio />} label="5-9 years" />
        <FormControlLabel style={{border:'1px solid black',marginTop:'5px',borderRadius:'10px'}} value="10-19 years" control={<Radio />} label="10-19 years" />
        <FormControlLabel style={{border:'1px solid black',marginTop:'5px',borderRadius:'10px'}} value=" 20-29 years"  control={<Radio />} label=" 20-29 years" />
        <FormControlLabel style={{border:'1px solid black', marginTop:'5px',borderRadius:'10px'}} value="30+ years"  control={<Radio />} label=" 30+ years" />
      </RadioGroup>
      <div >
        <Button 
        variant='contained'
        color='primary' 
        style={{marginTop:'1rem', marginRight:'10rem'}}
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
  );
}
