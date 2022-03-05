import React from 'react'
import './styles.css'
import CurrencyFormat from 'react-currency-format'
import Button from '../Button'

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={value =>
                    <>
                        <p>
                            Subtotal ({0} items)
                            <strong> {`${value}`} </strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                }
                decimalScale={2}
                value={0}
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