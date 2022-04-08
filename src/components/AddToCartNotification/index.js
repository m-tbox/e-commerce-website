import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import CloseIcon from '@mui/icons-material/Close';
import createContainer from './createContainer';
import { useSpring, animated } from "react-spring";

const container = createContainer();

function AddToCartNotification({ title, onDelete }) {

    const springProps = useSpring({
        opacity: 1,
        delay: 300,
        transform: 'translateX(0px)',
        from: {
            opacity: 0,
            transform: 'translateX(250px)'
        }
    });

    return (
        ReactDOM.createPortal(
            <animated.div
                style={{ ...springProps }}
                className="addToCartNotification"
            >

                <div className="addToCartNotification__titleContaier">
                    <span className="addToCartNotification__title">
                        Added to Cart
                    </span>
                    <CloseIcon
                        className="addToCartNotification__closeButton"
                        onClick={onDelete}
                    />
                </div>

                <p>
                    {title}
                </p>
            </animated.div>,
            container
        )
    )
}

export default AddToCartNotification