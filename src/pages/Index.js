import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import MultistepForm from '../components/multistepForm/MultistepForm'
import Footer from '../components/footer/Footer'


import useStyles from './Styles.js'

const Index = () => {
    const classes = useStyles()
    return (
        <div className={classes.background} >
            <NavBar />
            <MultistepForm />
            <Footer/>
            
        </div>
    )
}

export default Index
