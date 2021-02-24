import React from 'react'
import { AppBar, Typography } from "@material-ui/core"
import {Link } from 'react-router-dom'
import useStyles from './styles.js'
const NavBar = ()=> {
    const classes = useStyles();
    return (
        <AppBar position='fixed' className={classes.appBar}>
           <Typography variant='h6' color='inherit' align='center'>
               <Link to='/' style={{textDecoration:'none', color:'white'}}>Finance</Link> 
           </Typography>
        </AppBar>
    )
}

export default NavBar
