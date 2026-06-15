import React, { useState } from 'react';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import AboutUs from './AboutUs.jsx';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="app">
      {page === 'home' && (
        <section className="landing-page">
          <div className="landing-overlay">
            <h1>Paradise Nursery</h1>
            <p>Bring nature home with beautiful indoor plants for every room.</p>
            <button className="get-started-btn" onClick={() => setPage('products')}>
              Get Started
            </button>
          </div>
        </section>
      )}
      {page === 'about' && <AboutUs setPage={setPage} />}
      {page === 'products' && <ProductList setPage={setPage} />}
      {page === 'cart' && <CartItem setPage={setPage} />}
    </div>
  );
}

export default App;
