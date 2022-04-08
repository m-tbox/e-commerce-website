import React from 'react';
import Subtotal from '../Subtotal';
import './styles.css';
import {
    GetCart,
    GetSubtotalOfCart,
    GetTotalNumberOfItemsInCart
} from '../../hooks/cartHelperHooks';
import CheckoutProduct from '../CheckoutProduct';
import { GetUser } from '../../hooks/userHelperHooks';
import { getGropupedProducts } from '../../helpers';

function Checkout() {
    const numOfItems = GetTotalNumberOfItemsInCart();
    const totalPrice = GetSubtotalOfCart();
    const cart = GetCart();
    const user = GetUser();

    const groupedProducts = getGropupedProducts(cart);

    return (
        <div className="checkout">
            <div className="checkout__left">
                <div className="checkout__cart">
                    <h3>
                        Hello {user?.email}
                    </h3>
                    <h1 className="checkout__title">
                        Your Shopping Cart
                    </h1>

                    {
                        Object.values(groupedProducts).map((product, index) =>
                            <CheckoutProduct
                                key={index}
                                id={product[0].id}
                                title={product[0].title}
                                image={product[0].image}
                                price={product[0].price}
                                rating={product[0].rating}

                                numberOfAddedProduct={product.length}
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