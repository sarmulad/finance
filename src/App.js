import React from 'react'
import Index from './pages/Index'
import {Container} from '@material-ui/core'
import {BrowserRouter, Route} from 'react-router-dom'
import Footer from './components/footer/Footer'
import NavBar from './components/NavBar/NavBar'


const App = () => {
    return (
        <BrowserRouter>
        <Container maxWidth ='sm'  >
        <NavBar/>
        <Route exact path='/' component={Index}/> 
        </Container>
        <Footer/>
        </BrowserRouter>
    )
}

export default App
