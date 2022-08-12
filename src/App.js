import { useState, useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Products from './Components/Products/Products'
import {commerce} from './lib/commerce'

function App() {

  const [products, setProducts] = useState([])

  const fetchProducts = async() => {
    const {data} = await commerce.products.list()
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  

  return (
    <>
      <Navbar />
      <Products products = {products}/>
    </>
  );
}

export default App;
