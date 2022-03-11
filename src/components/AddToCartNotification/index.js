import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import CloseIcon from '@mui/icons-material/Close';
import createContainer from './createContainer';

const container = createContainer();

function AddToCartNotification({ title, image, onDelete }) {
    return (
        ReactDOM.createPortal(
            <div className="addToCartNotification">

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
            </div>,
            container
        )
    )
}

export default AddToCartNotification