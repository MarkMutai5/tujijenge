import React from 'react'
import { Grid, Typography} from '@material-ui/core'
import Product from './product/Product'
import useStyles from './style.js'

function Products({categories}) {
  
  const classes = useStyles();


  return (
    <main className={classes.content}>
      <div className= {classes.toolbar}/>
      {categories.map((category) => {
        return(
          <>
          <Typography variant="h5">{category.name}</Typography>
          <Grid container justifyContent = 'center' spacing = {4}>
          {category.productsData.map((product) => (
              <Grid item key={product.id} xs = {12} sm = {6} md = {4} lg={3}>
                  <Product product = {product}/>
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