import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import jsonData from './products.json';
import { CartItem, Product } from './Product';
import MainAppBarOld from './Components/MainAppBarOld';
import MainAppBar from './Components/MainAppBar';
import { Container, Stack, Typography, Chip, ImageList, ImageListItem } from '@mui/material';
import ProductCardOld from './Components/ProductCardOld';
import ProductCard from './Components/ProductCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';


function App() {

  const [cart, setCart] = useState(new Map<string, number>());
  const [filter, setFilter] = useState("");
  const [products, setProducts] = useState(jsonData);

  useEffect(() => {
    if (filter === "") {
      setProducts(jsonData)
    } else {
      setProducts(jsonData.filter((p) => p.category === filter))
    }
    console.log(products);
    console.log(filter);
  }, [filter]);

  const categoriesList = jsonData.map(product => product.category);
  let uniqueCategories = Array.from(new Set(categoriesList));
  uniqueCategories = uniqueCategories.filter(cat => cat !== ""); 
  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <MainAppBar />
        <Grid container rowSpacing={1} spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Box mt={1.5}>
              <Typography>
                Shop By Category
              </Typography>
            </Box>
            <Stack direction="row" spacing={1} mt={1}>
              {/* <Chip label="Alcohol" variant="filled" />
              <Chip label="Bakery" variant="outlined" />
              <Chip label="Dairy & Eggs" variant="outlined" />
              <Chip label="Drinks" variant="outlined" />
              <Chip label="Frozen" variant="outlined" />
              <Chip label="Home & Health" variant="outlined" />
              <Chip label="Meat, Fish & Protein" variant="outlined" />
              <Chip label="Pantry" variant="outlined" />
              <Chip label="Pet Products" variant="outlined" />
              <Chip label="Prepared" variant="outlined" />
              <Chip label="Produce" variant="outlined" />
              <Chip label="Snacks" variant="outlined" /> */}
              {uniqueCategories.map((cat) => (
                <Chip label={cat} variant={cat === filter ? "filled" : "outlined"} onClick={() => setFilter(cat)}/>
              ))}
              <Chip icon={<PlaylistAddCheckOutlinedIcon />} label="Clear Filter" onClick={() => setFilter("")} variant={filter === "" ? "outlined" : "filled"}/>
            </Stack>
            <Box mt={2.5}>
              <ImageList cols={4} rowHeight={400} gap={5}>
                {products.map((product) => (
                  <ProductCard product={product} cart={cart} setCart={setCart}/>
                ))}
              </ImageList>
            </Box>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Cart />
      </Grid>
    </Grid>
  );
}


function Cart() {
  return (
    <Box>
      <Typography>Cart</Typography>
    </Box>
  )
}

export default App;
