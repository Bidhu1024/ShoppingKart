import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, setProducts } from '../Redux/Actions/productAction'

const ProductsList = () => {
    const dispatch = useDispatch()
    const products = useSelector((state:any)=>state.products.products)
    const loading = useSelector((state:any) => state.products.loading);
    const [newProduct, setNewProduct] = useState({ title: '', price: '' });
    //Fetching data and updating
useEffect(()=>{
    const fetchProducts = async()=>{
        try {
          dispatch({ type: 'SET_LOADING', payload: true });
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            dispatch(setProducts(data))
        } catch (error) {
            console.log(error)
        }
    }
    fetchProducts()
},[])
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setNewProduct({ ...newProduct, [name]: value });
};

const handleAddProduct = () => {
  dispatch(addProduct({ ...newProduct, id: Date.now() })); // Generate a unique ID for the product
  setNewProduct({ title: '', price: '' }); // Clear input fields
};
if (loading) return <div>Loading...</div>;
  return (
    <div>
       <h1>Product List</h1>
      <div>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
      <div style={{ margin: '20px 0', padding: '10px', border: '1px solid gray' }}>
    <h3>Add a New Product</h3>
    <input
        type="text"
        name="title"
        placeholder="Product Title"
        value={newProduct.title}
        onChange={handleInputChange}
        style={{ marginRight: '10px' }}
    />
    <input
        type="number"
        name="price"
        placeholder="Product Price"
        value={newProduct.price}
        onChange={handleInputChange}
        style={{ marginRight: '10px' }}
    />
    <button onClick={handleAddProduct}>Add Product</button>
</div>
    </div>
  )
}

export default ProductsList
