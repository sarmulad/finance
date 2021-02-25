import React from 'react'
import { Container } from '@material-ui/core'


import './sucess.css'

 const SucessPage = () => {
    return (
        
        <Container maxWidth='md' className= "form success-box" style={{marginTop:'5em'}}>
            <div className="card">
            <div style={{borderRadius:'200px', height:'200px', width:'200px', background: '#F8FAF5', margin:'0 auto' }} className="sucess-box">
            <i className="checkmark">✓</i>
            </div>
            <h1 >Success</h1> 
            <p className="text-center">We received your form, we'll be in touch shortly!</p>
            </div>
        
        </Container>
    )
}

export default SucessPage