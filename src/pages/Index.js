import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import MultistepForm from '../components/multistepForm/MultistepForm'
import{Typography} from '@material-ui/core'
import Accordion from '../components/stepForm/Accordion'
const Index = () => {
    
    return (
        <div style={{marginTop:'100px'}}>
            
             <Typography variant='h6' className= "banner">Find Your Advisor Match</Typography>
            <MultistepForm />
            <Accordion/>
            
        </div>
    )
}

export default Index
