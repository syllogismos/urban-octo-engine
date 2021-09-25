import { Product } from '../Product'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button'
import ControlPointIcon from '@mui/icons-material/ControlPoint';

type ProductComponetProps = {
  product: Product,
  cart: Map<string, number>,
  setCart: React.Dispatch<React.SetStateAction<Map<string, number>>>
};

export default function ProductCard({ product, cart, setCart }: ProductComponetProps) {
  let cartAmount = cart.get(product.productId.value)
  let displayCartAmount = false;
  if (cartAmount !== undefined && cartAmount > 0) {
    displayCartAmount = true;
  }
  return (
    <Card sx={{ width: 200, height: 294, marginBottom: 3, boxShadow: 0 }}>
      <CardMedia
        component="img"
        height="154"
        image={product.imageUrl}
        alt={product.name}
      />
      <CardContent>
        <Typography fontSize={12} align="center">{product.name}</Typography>
        <Typography fontSize={14} align="center">{product.price}</Typography>
        {!displayCartAmount &&
          <CardActions>
            <Button variant="outlined" size="small" startIcon={<ControlPointIcon />} onClick={() => addToCart(product.productId.value, cart, setCart)}>Add to Cart</Button>
          </CardActions>
        }
        {displayCartAmount &&
          <CardActions disableSpacing>
            <IconButton aria-label="add to cart" size="small" onClick={() => addToCart(product.productId.value, cart, setCart)}>
              <AddSharpIcon />
            </IconButton>
            <IconButton aria-label="remove from cart" size="small" onClick={() => removeFromCart(product.productId.value, cart, setCart)}>
              <RemoveSharpIcon />
            </IconButton>
            <Typography color="text.secondary">{cartAmount}</Typography>
          </CardActions>
        }
      </CardContent>
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

const removeFromCart = (productIdValue: string, cart: Map<string, number>, setCart: React.Dispatch<React.SetStateAction<Map<string, number>>>) => {
  let count = cart.get(productIdValue);
  let newCount = 0
  if (count !== undefined && count > 0) {
    newCount = count - 1;
    setCart(new Map(cart.set(productIdValue, newCount)));
  }
}