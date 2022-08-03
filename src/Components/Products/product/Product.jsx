
import { AddShoppingCartOutlined } from '@mui/icons-material'
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import './styles.css'


function Product({product}) {

  return (
    <Card>
        <CardMedia image = {product.image} title = {product.name} className = 'media'/>
        <CardContent >
          <div className='cardcontent'>
            <Typography gutterBottom variant ='h5'>
              {product.name}
            </Typography>
            <Typography variant = 'h5'>
              {product.price}
            </Typography>
          </div>
          <Typography color = 'textSecondary' variant = 'body2'>
            {product.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className='cardactions'>
          <IconButton aria-label="Add to cart" className = 'carticon'>
            <AddShoppingCartOutlined />
          </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product