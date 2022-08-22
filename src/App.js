import { useState, useEffect} from 'react';
import {commerce} from './lib/commerce'

import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Products from './Components/Products/Products'
import Cart from './Components/Cart/Cart';


function App() {

  const [categories, setCategories] = useState([])

  const [cart, setCart] = useState({ })

  //fetching products
  const fetchProducts = async() => {
    const {data: products} = await commerce.products.list()
    const {data: categoriesData} = await commerce.categories.list()
    //console.log({products})

    //fetching the category data by spreading and reducing arrays
    const productsPerCategory = categoriesData.reduce((acc, category) =>{
      return [
        ...acc,
        {
          ...category,
          productsData: products.filter((product) =>
            product.categories.find((cat) => cat.id === category.id)
          ),
        },
      ]
    }, [])

    setCategories(productsPerCategory)
  }
  //calling the cart from commerce API
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item) //was previously setCart(item.cart)
  }


  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  console.log(cart)
  

  return (
    <>
      <Navbar totalItems = {cart.total_items}/>
      {/*<Products categories = {categories} onAddToCart = {handleAddToCart}/>*/}
      <Cart cart = {cart}/>
    </>
  );
}

export default App;
