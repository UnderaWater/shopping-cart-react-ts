import { CartItemType } from './../types/CartItem';

export const getProducts = async (): Promise<CartItemType[]> => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
}