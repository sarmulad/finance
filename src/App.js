import React from 'react'
import Index from './pages/Index'
import {BrowserRouter, Route} from 'react-router-dom'



const App = () => {
    return (
        <BrowserRouter>
        <div>
        <Route exact path='/' component={Index}/> 
        </div>
        </BrowserRouter>
    )
}

export default App
