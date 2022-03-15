import React from 'react';
import './styles.css';
import CurrencyFormat from 'react-currency-format';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

function Subtotal({ itemcount, subtotal }) {
    const navigate = useNavigate();

    const onClickCheckout = () => {
        navigate('/payment')
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={value =>
                    <>
                        <p>
                            Subtotal ({itemcount} items)
                            <strong> {`${value}`} </strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                }
                decimalScale={2}
                value={subtotal}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />

            <Button
                title='Proceed to Checkout'
                onClick={onClickCheckout}
            />
        </div>

    )
}

export default Subtotal