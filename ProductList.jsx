import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';

const plantData = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { id: 1, name: 'Snake Plant', price: 25, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b2b?auto=format&fit=crop&w=500&q=80' },
      { id: 2, name: 'Peace Lily', price: 30, image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=500&q=80' },
      { id: 3, name: 'Spider Plant', price: 18, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80' },
      { id: 4, name: 'Aloe Vera', price: 20, image: 'https://images.unsplash.com/photo-1509423350716-97f2360af38f?auto=format&fit=crop&w=500&q=80' },
      { id: 5, name: 'Boston Fern', price: 28, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?auto=format&fit=crop&w=500&q=80' },
      { id: 6, name: 'Rubber Plant', price: 35, image: 'https://images.unsplash.com/photo-1597055181300-e3633a917f45?auto=format&fit=crop&w=500&q=80' },
    ],
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      { id: 7, name: 'ZZ Plant', price: 27, image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=500&q=80' },
      { id: 8, name: 'Pothos', price: 22, image: 'https://images.unsplash.com/photo-1620127682229-33388276e540?auto=format&fit=crop&w=500&q=80' },
      { id: 9, name: 'Cactus', price: 15, image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80' },
      { id: 10, name: 'Jade Plant', price: 19, image: 'https://images.unsplash.com/photo-1616500164755-3c94fb6b8844?auto=format&fit=crop&w=500&q=80' },
      { id: 11, name: 'Cast Iron Plant', price: 32, image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=500&q=80' },
      { id: 12, name: 'Philodendron', price: 29, image: 'https://images.unsplash.com/photo-1614594075920-17fddf5062ef?auto=format&fit=crop&w=500&q=80' },
    ],
  },
  {
    category: 'Flowering Plants',
    plants: [
      { id: 13, name: 'Orchid', price: 40, image: 'https://images.unsplash.com/photo-1566907225477-9a52600f7e92?auto=format&fit=crop&w=500&q=80' },
      { id: 14, name: 'African Violet', price: 24, image: 'https://images.unsplash.com/photo-1524598171353-ce84a0a0a7c0?auto=format&fit=crop&w=500&q=80' },
      { id: 15, name: 'Anthurium', price: 34, image: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=500&q=80' },
      { id: 16, name: 'Begonia', price: 21, image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=500&q=80' },
      { id: 17, name: 'Christmas Cactus', price: 26, image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=500&q=80' },
      { id: 18, name: 'Kalanchoe', price: 23, image: 'https://images.unsplash.com/photo-1599685315640-13c4bb7edb6f?auto=format&fit=crop&w=500&q=80' },
    ],
  },
];

function ProductList({ setPage }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const isPlantInCart = (id) => cartItems.some((item) => item.id === id);

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

      <main className="product-page">
        <h1>Our Houseplants</h1>
        <p className="page-subtitle">Choose from our curated collection of indoor plants.</p>

        {plantData.map((category) => (
          <section key={category.category} className="plant-category">
            <h2>{category.category}</h2>
            <div className="plant-grid">
              {category.plants.map((plant) => (
                <div className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p className="price">${plant.price.toFixed(2)}</p>
                  <button
                    disabled={isPlantInCart(plant.id)}
                    onClick={() => dispatch(addItem(plant))}
                  >
                    {isPlantInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
