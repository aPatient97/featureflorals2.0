import React, { useContext} from 'react'
import { CartContext } from '../../cartContext'
import { getProductData } from '../../productStore'
import './style.css'

function CartProduct(props) {
    const cart = useContext(CartContext)
    const id = props.id
    const quantity = props.quantity
    const productData = getProductData(id)

  return (
    
    <div className="cart-product">
        <h3>{productData.title}</h3>
        <p>{quantity} total</p>
        <p>£{ (quantity * productData.price).toFixed(2)}</p>
        <button className='remove-btn' onClick={() => cart.deleteFromCart(id)}>Remove</button>
        <hr />
    </div>
       

  )
}

export default CartProduct
