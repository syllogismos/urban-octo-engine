import { Product } from '../Product'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { CartItem } from '../Product';

type ProductComponetProps = {
  product: Product,
  cart: Map<string, number>,
  setCart: React.Dispatch<React.SetStateAction<Map<string, number>>>
};

export default function ProductCard({ product, cart, setCart }: ProductComponetProps) {
  return (
    <Card sx={{ width: 200, height: 284 }}>
      <CardMedia
        component="img"
        height="154"
        image={product.imageUrl}
        alt={product.name}
        />
      <CardContent>
        <Typography fontSize="small">{product.name}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart" onClick={() => addToCart(product.productId.value, cart, setCart)}>
          <AddSharpIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

const addToCart = (productIdValue: string, cart: Map<string, number>, setCart: React.Dispatch<React.SetStateAction<Map<string, number>>>) => {
  let count = cart.get(productIdValue);
  let newCount = 0
  if (count !== undefined) {
    newCount = count + 1
  } else {
    newCount = 1
  }

  setCart(new Map(cart.set(productIdValue, newCount)))
  
}