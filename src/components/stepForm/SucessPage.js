import React from 'react'
import { Container } from '@material-ui/core'


import './sucess.css'

 const SucessPage = () => {

    

    return (
        
        <Container maxWidth='md' className= "form">
            <div className="card">
            <div style={{borderRadius:'200px', height:'200px', width:'200px', background: '#F8FAF5', margin:'0 auto' }}>
            <i className="checkmark">✓</i>
            </div>
            <h1 onClick={()=>} >Success</h1> 
            <p>We received your form;<br/> we'll be in touch shortly!</p>
            </div>
        
        </Container>
    )
}

export default SucessPage