import React from 'react';
import './styles.css';
import CurrencyFormat from 'react-currency-format';
import Button from '../Button';

function Subtotal({ itemcount, subtotal }) {

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
            />
        </div>

    )
}

export default Subtotal