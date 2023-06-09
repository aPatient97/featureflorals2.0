import React, { useContext } from 'react'
import './style.css'
import { CartContext } from '../../cartContext'
//import { productsArray } from '../../productStore'
import { Link } from 'react-router-dom'
import CartProduct from '../../components/CartProduct'

function Basket() {
    const cart = useContext(CartContext)

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

    let postcode;

    const checkout = async () => {
        console.log('checking out')
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
    }

    const setPostCode = () => {
        postcode = document.querySelector('#postcode').value.toUpperCase()
        console.log(postcode)
    }

    const postcodeArray = ['TW2', 'TW3', 'TW4', 'TW5', 'TW7', 'TW8', 'TW9', 'TW10', 'TW11', 'TW12', 'TW13', 'TW14', 'TW16', 'W3', 'W4', 'W5', 'W6', 'W7', 'W12', 'W13', 'SW13', 'SW14', 'SW15', 'KT1', 'KT2', 'KT3', 'KT5', 'KT6', 'KT7', 'KT8']

    const checkPostcode = () => {
        console.log(postcode, 'clicked')
        postcodeArray.includes(postcode) ? checkout() : console.log('postcode not in range')
        
    }

    // const disableButton = () => {
    //     const btn = document.querySelector('.checkout-btn')
    //     btn.disabled = true
    // }
    // const closePcModal = () => {
    //     const modal = document.querySelector('.pc-modal')
    //     modal.remove()
    // }

  return (
    <>

        {/* {modal && (
            <div className="pc-modal">
                <p>Postcode is not in range!</p>
                <p>Please try again.</p>
                <button onClick={closePcModal}>ok</button>
            </div>
        )} */}
        <h1 className='checkout c-text'>Checkout </h1>
            <div className="postcodes">
                <p>We currently deliver to the following postcodes:</p> 
                <p> TW2, TW3, TW4, TW5, TW7, TW8, TW9, TW10, TW11, TW12, TW13, TW14, TW16<br /> W3, W4, W5, W6, W7, W12, W13<br />SW13, SW14, SW15<br />KT1, KT2, KT3, KT5, KT6, KT7, KT8 </p>
                <p>Alternatively, collection from our studio in TW9</p>
                <p>If your address is not listed above, please email us at <a href='mailto:featureflorals@gmail.co.uk' >featureflorals@gmail.com</a> or via our contact form.</p> 
                <p>Please enter the first half of the delivery postcode to check if we can deliver:</p>
                <input type="text" id='postcode' onKeyUp={setPostCode} autoComplete='off' maxLength={5}/>
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
                <button className='checkout-btn' onClick={checkPostcode}>Checkout</button>
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
