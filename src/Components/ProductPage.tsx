import { useState, useEffect } from 'react';
import jsonData from '../products.json';
import MainAppBar from './MainAppBar';
import { Stack, Typography, Chip, ImageList } from '@mui/material';
import ProductCard from './ProductCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';

export default function ProductPage() {

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
        <Grid item xs={10} borderRight="solid" borderColor="#777777" sx={{borderWidth:'thin'}}>
          <MainAppBar />
          <Grid container rowSpacing={1} spacing={2}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Box mt={1.5}>
                <Typography fontSize={12}>
                  Shop By Category
                </Typography>
              </Box>
              <Stack direction="row" spacing={1} mt={1}>
                {uniqueCategories.map((cat) => (
                  <Chip label={cat} variant={cat === filter ? "filled" : "outlined"} onClick={() => setFilter(cat)} />
                ))}
                <Chip icon={<PlaylistAddCheckOutlinedIcon />} label="Clear Filter" onClick={() => setFilter("")} variant={filter === "" ? "outlined" : "filled"} />
              </Stack>
              <Box mt={2.5} sx={{ maxHeight: 800, overflow: 'auto' }}>
                <ImageList cols={4} rowHeight={400} gap={5}>
                  {products.map((product) => (
                    <ProductCard product={product} cart={cart} setCart={setCart} />
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
      <Box mt={3}>
        <Typography align="center" fontSize="large">Cart</Typography>
      </Box>
    )
  }