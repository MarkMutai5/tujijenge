import { useState, useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Products from './Components/Products/Products'
import {commerce} from './lib/commerce'

function App() {

  const [categories, setCategories] = useState([])

  const fetchProducts = async() => {
    const {data: products} = await commerce.products.list()
    const {data: categoriesData} = await commerce.categories.list()
    console.log({products})

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

  useEffect(() => {
    fetchProducts()
  }, [])

  

  return (
    <>
      <Navbar />
      <Products categories = {categories}/>
    </>
  );
}

export default App;
