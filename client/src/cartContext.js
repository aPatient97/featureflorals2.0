import { createContext, useState } from "react";
import { getProductData } from './productStore';

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
})

export function CartProvider({children}) {

    const [cartProducts, setCartProducts] = useState([])


    const getProductQuantity = (id) => {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if (quantity === undefined) {
            return 0
        }
        return quantity
    }

    const addOneToCart = (id, toAdd) => {
        const quantity = getProductQuantity(id)

        if (quantity === 0) { // product is not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: toAdd
                    }
                ]
            )
        } else {
            setCartProducts(
                cartProducts.map( product =>
                    product.id === id                                
                    ? { ...product, quantity: product.quantity + toAdd } 
                    : product                                        
                )
            )
        }
    }
    

    const removeOneFromCart = id => {
        const quantity = getProductQuantity(id);

        if (quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity - 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
        }
    }

    const deleteFromCart = (id) => {
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id !== id;
            })  
        )
    }
    
    const getTotalCost = () => {
        let totalCost = 0;
        cartProducts.forEach((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        });
        return totalCost; 
    }
    

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue} >
            {children}
        </CartContext.Provider>

    )
}

export default CartProvider;
//Provider => gives react app access to all the things in your context
