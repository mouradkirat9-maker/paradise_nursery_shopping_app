import React from 'react';
import { useSelector } from 'react-redux';

function AboutUs({ setPage }) {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
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
      <main className="about-page">
        <h1>About Paradise Nursery</h1>
        <p>
          Paradise Nursery is an online plant shop that helps customers create peaceful,
          healthy, and beautiful indoor spaces. We provide carefully selected houseplants
          for homes, offices, apartments, and workspaces.
        </p>
        <p>
          Our mission is to make plant shopping simple and enjoyable with clear categories,
          affordable prices, and a smooth shopping cart experience.
        </p>
      </main>
    </div>
  );
}

export default AboutUs;
