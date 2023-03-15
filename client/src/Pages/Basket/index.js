import React, { useContext, useRef } from 'react'
import './style.css'
import { CartContext } from '../../cartContext'
//import { productsArray } from '../../productStore'
import { Link } from 'react-router-dom'
import CartProduct from '../../components/CartProduct'

function Basket() {
    const cart = useContext(CartContext)

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

    let postcode = useRef(null)
    let match;

    const checkout = async () => {
        console.log('checking out')
        checkPostcode(postcode)

        match ? 
        await fetch('https://feature-florals-server.herokuapp.com/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((res) => {
           return res.json()
        }).then((data) => {
            //console.log(data)
            if(data.url) {
                window.location.assign(data.url); // Forwarding user to Stripe
            }
        })
        .catch((error) => {
            console.error("Error:", error);
          })
        :
        alert('Postcode not in range. Please enter a valid postcode.')
    }

    const setPostcode = () => {
        postcode = document.querySelector('#postcode').value.toUpperCase()
        console.log(postcode)
       
    }

    const postcodeArray = ['TW2', 'TW3', 'TW4', 'TW5', 'TW7', 'TW8', 'TW9', 'TW10', 'TW11', 'TW12', 'TW13', 'TW14', 'TW16', 'W3', 'W4', 'W5', 'W6', 'W7', 'W12', 'W13', 'SW13', 'SW14', 'SW15', 'KT1', 'KT2', 'KT3', 'KT5', 'KT6', 'KT7', 'KT8']

    const checkPostcode = (postcode) => {
        postcodeArray.includes(postcode) ? match = true : match = false
    }

  return (
    <>
        <h1 className='checkout c-text'>Checkout </h1>
            <div className="postcodes">
                <p>We currently deliver to the following postcodes:</p> 
                <p> TW2, TW3, TW4, TW5, TW7, TW8, TW9, TW10, TW11, TW12, TW13, TW14, TW16<br /> W3, W4, W5, W6, W7, W12, W13<br />SW13, SW14, SW15<br />KT1, KT2, KT3, KT5, KT6, KT7, KT8 </p>
                <p>Please email us at featureflorals@gmail.com or via our contact form if your address is not listed.</p> 
                <p>Enter the first half of the delivery postcode to check if we can deliver:</p>
                <input type="text" id='postcode' onKeyUp={setPostcode} autoComplete='off' maxLength={5}/>
            </div>

        { productsCount > 0 ? 
        <div className="center-basket">
            {productsCount === 1 ? 
                <p>You have {productsCount} item in your basket:</p>
            :
                <p>You have {productsCount} items in your basket: </p>
            }
            {cart.items.map((product, index) => (
                    
                <CartProduct key={index} id={product.id} quantity={product.quantity}/>
                    
            ))}

            <h2>Total: £ {cart.getTotalCost().toFixed(2)}</h2>
            
            <div className="btn-div">
                <button className='checkout-btn' onClick={checkout}>Checkout</button>
            </div>

        </div>

        :

            <>
                <div className="basket-info">
                    <h2>Your basket is empty.</h2>
                    <Link to='/shop' className='no-underline'> <p>Visit our seasonal shop here</p></Link> 
                </div>
            </>
    }
    </>
  )
}

export default Basket
