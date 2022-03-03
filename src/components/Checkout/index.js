import React from 'react'
import './styles.css'

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
               <div className="checkout__bag">
                   <h1 className="checkout__title">
                       Your Shopping Bag
                   </h1>
               </div>
            </div>

            <div className="checkout__right">
                <h2>
                    The subtotal will go here
                </h2>
            </div>
        </div>
    )
}

export default Checkout