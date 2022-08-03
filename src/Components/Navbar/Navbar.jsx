import { AppBar, Toolbar } from '@material-ui/core'
import { AddShoppingCartOutlined } from '@mui/icons-material'
import { Badge, IconButton, Typography } from '@mui/material'
import React from 'react'
import useStyles from './styles.js'

function Navbar() {
    const classes = useStyles();
  return (
    <>
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography variant = 'h6' className= { classes.title} color='inherit'>
                    <img src='/engineer.png' alt = 'Tujijenge' height= '25px' className = {classes.image}/>
                          Tujijenge shop
                </Typography>
                <div className={classes.grow}/>
               
                <div className= {classes.button} >
                    <IconButton aria-label='show cart items' color = 'inherit'>
                        <Badge badgeContent = {2} color = 'secondary'>
                            <AddShoppingCartOutlined className={classes.cart}/>
                        </Badge>
                    </IconButton>
                </div>
                
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar