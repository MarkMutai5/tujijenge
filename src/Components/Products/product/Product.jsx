
import { AddShoppingCartOutlined } from '@mui/icons-material'
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import './styles.css'


function Product({product}) {

  console.log(product)
  

  return (
    <Card>
        <CardMedia image = {product.image.url} title = {product.name} className = 'media'/>
        <CardContent >
          <div className='cardcontent'>
            <Typography gutterBottom variant ='h5'>
              {product.name}
            </Typography>
            <Typography variant = 'h5'>
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
          <Typography dangerouslySetInnerHTML={{__html: product.description}} color = 'textSecondary' variant = 'body2'/>
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