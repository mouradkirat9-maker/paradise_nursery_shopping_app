import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from './CartSlice.jsx';

function CartItem({ setPage }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <nav className="navbar">
        <div className="logo" onClick={() => setPage('home')}>Paradise Nursery</div>
        <div className="nav-links">
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('products')}>Plants</button>
          <button onClick={() => setPage('cart')}>Cart ({cartCount})</button>
        </div>
      </nav>

      <main className="cart-page">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <button onClick={() => setPage('products')}>Continue Shopping</button>
          </div>
        ) : (
          <>
            <h2>Total Cart Amount: ${totalAmount.toFixed(2)}</h2>

            <div className="cart-list">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <p>Unit Price: ${item.price.toFixed(2)}</p>
                    <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>

                    <div className="quantity-controls">
                      <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                    </div>
                  </div>

                  <button
                    className="delete-btn"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-actions">
              <button onClick={() => alert('Checkout Coming Soon!')}>Checkout</button>
              <button onClick={() => setPage('products')}>Continue Shopping</button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;
