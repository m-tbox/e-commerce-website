import React, { useEffect, useState } from 'react';
import './styles.css';
import { GetCart, GetSubtotalOfCart, GetTotalNumberOfItemsInCart } from '../../hooks/cartHelperHooks';
import { GetUser } from '../../hooks/userHelperHooks';
import CheckoutProduct from '../CheckoutProduct';
import { getGropupedProducts } from '../../helpers';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import Button from '../Button';
import axios from '../../services/axios';

function Payment() {
    const navigate = useNavigate();
    const user = GetUser();
    const cart = GetCart();
    const numberOfItemsinCart = GetTotalNumberOfItemsInCart();
    const subtotal = GetSubtotalOfCart();

    const groupedProducts = getGropupedProducts(cart);

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payment/create?total${subtotal * 100}`
            });

            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [cart])

    console.log('The Secret it >>> ', clientSecret);

    const handleSubmit = async (event) => {

        event.preventDefault();

        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false);

             navigate('/orders', { replace: true });
        })

    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout"> {numberOfItemsinCart} items </Link>)
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.name}</p>
                        <p>123 React Lane</p>
                        <p>Oosaka, Japan</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Item and Delivery</h3>
                    </div>
                    <div className="payment__item">
                        {
                            Object.values(groupedProducts).map((product, index) =>
                                <CheckoutProduct
                                    key={index}
                                    id={product[0].id}
                                    title={product[0].title}
                                    image={product[0].image}
                                    price={product[0].price}
                                    rating={product[0].rating}
                                    numberOfAddedProduct={product.length}

                                    hideChangeAmountButtons
                                />
                            )
                        }
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={value =>
                                        <h3> Order Total: {value} </h3>
                                    }
                                    decimalScale={2}
                                    value={subtotal}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />

                                <Button
                                    disabled={processing || succeeded || disabled}
                                    title={processing ? 'Processing' : 'Buy Now'}
                                />
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment