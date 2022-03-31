import React from 'react';
import { CartItemType } from '../../types/CartItem';
import CartItem from '../CartItem/CartItem';
import { Wrapper } from './cart.styles';

type CartProps = {
    cartItems: CartItemType[];
    addToCart: (clicked: CartItemType) => void;
    removeFromCart: (id: number) => void; 
}

const Cart: React.FC<CartProps> = ({ cartItems, addToCart, removeFromCart }) => {
    const calculateTotal = (items: CartItemType[]) => {
        return items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
    }

    return (
        <Wrapper>
            <h2>
                Your Shopping Cart
            </h2>
            {cartItems.length === 0 ? <p>No items in cart</p> : null}
            {cartItems.map(item => (
                <CartItem
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                />
            ))}
            <h2>
                Total: ${calculateTotal(cartItems).toFixed(2)}
            </h2>
        </Wrapper>
    )
}

export default Cart