import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import jsonData from './products.json';
import {CartItem, Product} from './Product';


function App() {

  const [cart, setCart] = useState([] as CartItem[]);
  console.log(jsonData[0].productId)
  return (
    <div className="App">
        <Button variant="contained">Hello World</Button>
        <ProductComponent product = {jsonData[0]}/>
    </div>
  );
}

type ProductComponetProps = {
  product: Product;
};

function ProductComponent({product}: ProductComponetProps) {
  return (<div>
    <Button variant="contained">{product.imageUrl}</Button>
  </div>)
}

export default App;
