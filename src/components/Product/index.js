import React from 'react'
import Button from '../Button'
import './styles.css'

function Product({ title, image, price, rating }) {
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
            <p>⭐</p>
          )}
        </div>
      </div>

      <img src={image} alt="" />

      <Button
        title={'Add to basket'}
      />
    </div>
  )
}

export default Product