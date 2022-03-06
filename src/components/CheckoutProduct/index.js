import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/Actions';
import Button from '../Button';
import './styles.css';

function ChekoutProduct({ id, image, title, price, rating }) {
    const dispatch = useDispatch();

    const onClickRemoveFromCart = () => {
        dispatch(removeFromCart({ id }));
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) =>
                        <p key={i}>⭐</p>
                    )}
                </div>

                <Button
                    title={'Remove from cart'}
                    onClick={() => onClickRemoveFromCart()}
                />
            </div>
        </div>
    )
}

export default ChekoutProduct