import React from 'react'
import { Grid, Typography} from '@material-ui/core'
import Product from './product/Product'
import useStyles from './style.js'

function Products({categories, onAddToCart}) {
  
  const classes = useStyles();


  return (
    <main className={classes.content}>
      <div className= {classes.toolbar}/>

      {/*Mapping the categories to retrieve each category */}

      {categories.map((category) => {
        return(
          <>
          <Typography variant="h5">{category.name}</Typography>
          <Grid container justifyContent = 'center' spacing = {4}>

             {/*retrieving the different kinds of product data from each category */}
             
          {category.productsData.map((product) => (
              <Grid item key={product.id} xs = {12} sm = {6} md = {4} lg={3}>
                  <Product product = {product} onAddToCart = {onAddToCart}/>
              </Grid>
          ))}
          </Grid>
          </>
        )
      })}
        
    </main>
  )
}

export default Products