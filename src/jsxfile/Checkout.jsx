import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img 
                    className='checkout__ad'
                    src="https://digitalsathi.com/wp-content/uploads/2017/08/amazon-todays-deal-banner-expand-4.jpg"
                    alt='ads'
                />
              
                <div>
                    <h3>Hello, {user?.email}</h3>   
                    <h2 className='checkout__title'>Your shopping Basket</h2>
                    
                    {basket.map(item => (
                        <CheckoutProduct
                            key={item.id} // Ensure each item has a unique key
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                    
                    {/* Additional content can be added here */}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div> 
        </div>
    );
}

export default Checkout;
