import React from 'react'
import Index from './pages/Index'
import {Container} from '@material-ui/core'
import {BrowserRouter, Route} from 'react-router-dom'
import Footer from './components/footer/Footer'



const App = () => {
    return (
        <BrowserRouter>
        <Container maxWidth ='lg'  >
        <Route exact path='/' component={Index}/> 
        </Container>
        <Footer/>
        </BrowserRouter>
    )
}

export default App
