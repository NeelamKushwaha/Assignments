// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import './index.css';

const products = [
  { id: 1, name: 'Product One', price: '$29.99', img: 'https://via.placeholder.com/150', description: 'Detailed info about Product One.' },
  { id: 2, name: 'Product Two', price: '$49.99', img: 'https://via.placeholder.com/150', description: 'Detailed info about Product Two.' },
  { id: 3, name: 'Product Three', price: '$19.99', img: 'https://via.placeholder.com/150', description: 'Detailed info about Product Three.' },
];

const Navbar = () => (
  <nav className="bg-blue-600 p-4 text-white flex justify-between">
    <div className="font-bold">MyStore</div>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/">Products</Link>
      <Link to="/">Contact</Link>
    </div>
  </nav>
);

const Hero = () => (
  <section className="text-center py-16 bg-gray-100">
    <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
    <p className="text-lg text-gray-700">Find the best products here</p>
  </section>
);

const ProductCard = ({ product }) => (
  <div className="border rounded-lg shadow p-4 hover:shadow-lg">
    <img src={product.img} alt={product.name} className="w-full h-40 object-cover" />
    <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
    <p className="text-gray-700">{product.price}</p>
    <Link to={`/product/${product.id}`} className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded">View Details</Link>
  </div>
);

const ProductSection = () => (
  <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
    {products.map(product => <ProductCard key={product.id} product={product} />)}
  </section>
);

const Footer = () => (
  <footer className="bg-blue-600 text-white text-center p-4">
    Follow us:
    <div className="mt-2 space-x-4">
      <a href="#">Facebook</a>
      <a href="#">Twitter</a>
      <a href="#">Instagram</a>
    </div>
  </footer>
);

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  if (!product) return <div className="p-8">Product not found</div>;

  return (
    <div className="p-8">
      <img src={product.img} alt={product.name} className="w-1/3 mx-auto mb-6" />
      <h2 className="text-3xl font-bold">{product.name}</h2>
      <p className="text-xl text-gray-700">{product.price}</p>
      <p className="mt-4">{product.description}</p>
    </div>
  );
};

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<><Hero /><ProductSection /></>} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
