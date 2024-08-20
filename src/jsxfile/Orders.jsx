import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { useStateValue } from "./StateProvider";
import Header from './Header';
import './Orders.css';
import Order from './Order';

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      // Reference to the user's orders collection
      const ordersRef = collection(db, 'users', user?.uid, 'orders');
      const q = query(ordersRef, orderBy('created', 'desc'));

      // Listen for real-time updates
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setOrders(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        })));
      });

      // Cleanup subscription on unmount
      return () => unsubscribe();
    } else {
      setOrders([]);
    }
  }, [user]); // Adding 'user' as a dependency

  return (
    <div>
      <Header/>
    <div className='orders'>
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map(order => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Orders;
