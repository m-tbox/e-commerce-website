import React from 'react';
import { useDispatch } from 'react-redux';
import './styles.css';
import Button from '../Button';
import { addToCart } from '../../store/Actions';

function Product({ id, title, image, price, rating }) {
  const dispatch = useDispatch();

  const onClickAddToCart = () => {
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
    <div className="product">
      <div className="product__info">
        <p> {title} </p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) =>
            <p key={i}>⭐</p>
          )}
        </div>
      </div>

      <img src={image} alt="" />

      <Button
        title={'Add to cart'}
        onClick={() => onClickAddToCart()}
      />
    </div>
  )
}

export default Product
