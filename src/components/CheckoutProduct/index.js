import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeAllFromCart, removeFromCart } from '../../store/Actions';
import Button from '../Button';
import './styles.css';
import IncDecCounter from '../IncDecCounter';

function CheckoutProduct({ id, image, title, price, rating, numberOfAddedProduct, hideChangeAmountButtons }) {
    const dispatch = useDispatch();

    const onClickRemoveFromCart = () => {
        dispatch(removeAllFromCart({ id }));
    }

    const onDecNumber = () => {
        dispatch(removeFromCart({ id }));
    }

    const onIncNumber = () => {
        const product = {
            id,
            title,
            image,
            price,
            rating
        };

        dispatch(addToCart(product));
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />

            {
                !hideChangeAmountButtons &&
                <IncDecCounter
                    number={numberOfAddedProduct}
                    decNumber={onDecNumber}
                    incNumber={onIncNumber}
                />
            }

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>

                {
                    hideChangeAmountButtons && `x ${numberOfAddedProduct}`
                }

                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) =>
                        <p key={i}>⭐</p>
                    )}
                </div>

                {
                    !hideChangeAmountButtons &&
                    <Button
                        title={'Remove from cart'}
                        onClick={() => onClickRemoveFromCart()}
                    />
                }
            </div>
        </div>
    )
}

export default CheckoutProduct