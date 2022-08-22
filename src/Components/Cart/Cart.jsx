import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'

function Cart({cart}) {
    
    
   const EmptyCart = () => {
        <Typography variant= "subtitle1" >
            You have no items. Start adding.
        </Typography>
    }

    const FilledCart = () => {
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs = {12} sm = {4} key={item.id}>
                        <div>{item.name}</div>
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h4">
                Subtotal: {cart.subtotal.formatted_with_symbol}
            </Typography>
            
        </>
        console.log("fucked up")

    }

    if (!cart.line_items) return "Loading..." 

   

  return (
    <Container>
        <Typography variant="h3">
            Your Cart
        </Typography>

        { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}

export default Cart