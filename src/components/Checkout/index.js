import React from 'react'
import Subtotal from '../Subtotal'
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
               <Subtotal />
            </div>
        </div>
    )
}

export default Checkout