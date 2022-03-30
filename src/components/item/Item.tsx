import { Button } from '@material-ui/core';
import React from 'react'
import { Wrapper } from '../../App.styles';
import { CartItemType } from '../../types/CartItem';

type ItemProps = {
  item: CartItemType;
  handleAddToCart: (clickedItemt: CartItemType) => void;
}

const Item: React.FC<ItemProps> = ({ item, handleAddToCart }) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>
          {item.title}
        </h3>
        <p>
          {item.description}
        </p>
        <h3>
          ${item.price}
        </h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>
        Add to cart
      </Button>
    </Wrapper>
  )
}

export default Item;