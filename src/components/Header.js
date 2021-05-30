import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="px-4 text-white py-2 bg-dark ">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="text-white text-decoration-none">
          <h2>SuperHeroes</h2>
        </Link>
      </div>
    </header>
  );
}
