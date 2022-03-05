import React from 'react';
import Subtotal from '../Subtotal';
import './styles.css';
import { GetSubtotalOfCart, GetTotalNumberOfItemsInCart } from '../../helpers/cartHelper';

function Checkout() {
    const numOfItems = GetTotalNumberOfItemsInCart();
    const totalPrice = GetSubtotalOfCart();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <div className="checkout__cart">
                    <h1 className="checkout__title">
                        Your Shopping Cart
                    </h1>
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal
                    itemcount={numOfItems}
                    subtotal={totalPrice}
                />
            </div>
        </div>
    )
}

export default Checkout