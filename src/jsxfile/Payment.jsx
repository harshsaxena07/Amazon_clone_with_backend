import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import axios from './axios';
import { getBasketTotal } from './reducer';
import { db } from "./firebase";
import { doc, setDoc, collection } from 'firebase/firestore';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        const getClientSecret = async () => {
            const totalAmount = getBasketTotal(basket) * 100; // Convert to cents
            if (totalAmount <= 0) {
                console.error("The total amount must be greater than zero.");
                return;
            }

            try {
                const response = await axios.post(`/payments/create?total=${totalAmount}`);
                setClientSecret(response.data.clientSecret);
            } catch (error) {
                console.error("Error fetching client secret:", error);
            }
        };

        getClientSecret();
    }, [basket]);

    console.log('THE SECRET IS >>> ', clientSecret);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(async ({ paymentIntent }) => {
            // Debugging logs to check for undefined values
            console.log("Basket: ", basket);
            console.log("Amount: ", paymentIntent.amount);
            console.log("Created: ", paymentIntent.created);

            if (!basket || basket.length === 0) {
                console.error("Basket is empty or undefined.");
                setError("Payment failed: Basket is empty or undefined.");
                setProcessing(false);
                return;
            }

            if (!paymentIntent || paymentIntent.amount === undefined || paymentIntent.created === undefined) {
                console.error("PaymentIntent or its fields are undefined.");
                setError("Payment failed: Missing data in payment confirmation.");
                setProcessing(false);
                return;
            }

            try {
                const userOrdersRef = doc(collection(db, 'users', user?.uid, 'orders'), paymentIntent.id);

                await setDoc(userOrdersRef, {
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created,
                });

                setSucceeded(true);
                setError(null);
                setProcessing(false);

                dispatch({
                    type: 'EMPTY_BASKET'
                });

                navigate('/orders');
            } catch (err) {
                console.error("Firestore setDoc error: ", err);
                setError(`Payment failed: ${err.message}`);
                setProcessing(false);
            }
        }).catch(error => {
            setError(`Payment failed: ${error.message}`);
            setProcessing(false);
        });
    };

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };

    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
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
                                    renderText={(value) => (
                                        <>
                                            <p>
                                                <strong>Order Total: {value}</strong>
                                            </p>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"€"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
