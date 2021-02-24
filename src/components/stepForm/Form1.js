import React from 'react'
import './index.css';
import Container from '@material-ui/core/Container'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import { Typography, Button } from '@material-ui/core';
import useStyles from './styles.js'
 import './index.css';

 const Form1 = ({formData, navigation, setForm}) => {
     const classes =useStyles();
     const{levelOfConfidence} = formData
    
     
    return (
        
        <Container  className= "form">
            <FormControl   controlled="true" component="fieldset">
                <Typography variant="h5" className="question">How confident are you in your long term financial plan?</Typography>
                <RadioGroup  controlled="true" controlled style={{paddingLeft:'10px'}} aria-label=" how confident are you" name='levelOfConfidence' value={levelOfConfidence} onChange={setForm}>
                  <FormControlLabel className="form-control"  value="Very confident" control={<Radio color='black' />} label="Very confident"  />
                  <FormControlLabel className="form-control" value="Somewhat confident" control={<Radio  color='black' />} label="Somewhat confident" />
                  <FormControlLabel className="form-control" value="Notconfident" control={<Radio color='black'/>} label="Not confident" />
                  <FormControlLabel className="form-control" value=" I don't have a plan"  control={<Radio color='black' />} label=" I don't have a plan" />
                  <FormControlLabel className="form-control" value="other"  control={<Radio color='black' />} label=" Others" />
                </RadioGroup>
                
                <div>
                    
                    <Button 
                    variant='contained'
                    className={classes.btn}
                    style={{marginTop:'1rem',}}
                    onClick ={()=>navigation.next()}>
                    Next
                    </Button>
              </div>
          </FormControl>
         
     </Container>
    

    )
}

export default Form1
