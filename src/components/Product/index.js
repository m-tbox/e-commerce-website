import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './styles.css';
import Button from '../Button';
import { addToCart } from '../../store/Actions';
import { useSpring, animated } from 'react-spring';
import AddToCartNotification from '../AddToCartNotification';

function Product({ id, title, image, price, rating }) {
  const [hovering, setHovering] = useState(false);
  const [notifications, setNotifications] = useState([]);

  setTimeout(() => {
    if (notifications && notifications.length > 0) {
      const firstIndexId = notifications[0].id;
      deleteNotification(firstIndexId);
    }
  },
    10000
  );

  useEffect(() => {

  }, []);

  const dispatch = useDispatch();

  const [props, set] = useSpring(() => ({
    transform: `scale(${hovering ? 1.2 : 1})`,
    boxShadow: `0px 5px 15px 0px rgba(0, 0, 0, 0.30)`,
  }))

  const updateHover = hovering => ({
    transform: `scale(${hovering ? 1.05 : 1})`,
    boxShadow: `0px ${hovering ? '10px 20px' : '5px 15px'} 0px rgba(0, 0, 0, 0.30)`
  })

  const createNotification = () =>
    setNotifications([...notifications, { id: notifications.length }]);

  const deleteNotification = (id) =>
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );


  const onClickAddToCart = () => {
    createNotification();

    const product = {
      id,
      title,
      image,
      price,
      rating
    };

    dispatch(addToCart(product));
  }

  const handleMouseHover = (hovered) => {
    setHovering(hovered);
    set(updateHover(hovered));
  }

  return (
    <animated.div
      style={props}
      className="product"
      onMouseEnter={() => handleMouseHover(true)}
      onMouseLeave={() => handleMouseHover(false)}
    >
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

      {notifications.map(({ id }) => (
        <AddToCartNotification
          key={id}
          onDelete={() => deleteNotification(id)}
          title={title}
        />
      ))}
    </animated.div>
  )
}

export default Product
