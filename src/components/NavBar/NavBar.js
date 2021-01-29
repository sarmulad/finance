import React from 'react'
import { AppBar, Typography } from '@material-ui/core'

import useStyles from './styles.js'
const NavBar = ()=> {
    const classes = useStyles();
    return (
        <AppBar position='fixed' className={classes.appBar}>
           <Typography variant='h4' color='inherit'>
                FINANCE
           </Typography>
        </AppBar>
    )
}

export default NavBar
