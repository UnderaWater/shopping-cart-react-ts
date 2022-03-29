import { Badge, Drawer, Grid, LinearProgress } from '@material-ui/core';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Wrapper } from './App.styles';
import { CartItemType } from './types/CartItem';
import { getProducts } from './api/api';

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);

  const getTotalItems = () => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />
  if (error) return <div>Something went wrong...</div>

  return (
    <div className="App">

    </div>
  );
}

export default App;
