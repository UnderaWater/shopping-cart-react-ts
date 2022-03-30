import { Badge, Drawer, Grid, LinearProgress } from '@material-ui/core';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Wrapper } from './App.styles';
import { CartItemType } from './types/CartItem';
import { getProducts } from './api/api';
import Item from './components/item/Item';

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItem, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);

  const getTotalItems = () => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        Cart
      </Drawer>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
