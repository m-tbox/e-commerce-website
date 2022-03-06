import React from 'react';
import Subtotal from '../Subtotal';
import './styles.css';
import { GetCart, GetSubtotalOfCart, GetTotalNumberOfItemsInCart } from '../../hooks/cartHelperHooks';
import ChekoutProduct from '../CheckoutProduct';

function Checkout() {
    const numOfItems = GetTotalNumberOfItemsInCart();
    const totalPrice = GetSubtotalOfCart();
    const cart = GetCart();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <div className="checkout__cart">
                    <h1 className="checkout__title">
                        Your Shopping Cart
                    </h1>
                    {
                        cart.map((product, index) =>
                            <ChekoutProduct
                                key={index}
                                id={product.id}
                                title={product.title}
                                image={product.image}
                                price={product.price}
                                rating={product.rating}
                            />
                        )
                    }
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