import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './product/Product'
import useStyles from './style.js'

const products = [
  {id: 1, name: 'Cement', description: 'Simba', price: '$30', image :'/download.jpeg'},
  {id: 2, name: 'sheets', description: 'dumuzaz', price: '$50', image :'/download.jpeg'},
  {id: 3, name: 'Pipes', description: 'pvc', price: '$20', image :'/download.jpeg'}
];

function Products() {
  
  const classes = useStyles();


  return (
    <main className={classes.content}>
      <div className= {classes.toolbar}/>
        <Grid container justifyContent = 'center' spacing = {4}>
            {products.map((product) => (
                <Grid item key={product.id} xs = {12} sm = {6} md = {4} lg={3}>
                    <Product product = {product}/>
                </Grid>
            ))}
        </Grid>
    </main>
  )
}

export default Products