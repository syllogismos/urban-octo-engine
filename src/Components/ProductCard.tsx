import { Product } from '../Product'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

type ProductComponetProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductComponetProps) {
  return (
    <Card sx={{ width: 200, height: 284 }}>
      <CardMedia
        component="img"
        height="154"
        image={product.imageUrl}
        alt="Paella dish"
        />
      <CardContent>
        <Typography>{product.name}</Typography>
      </CardContent>
    </Card>
  )
}