import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">Expense Tracker</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300 transition duration-200">Expense</Link>
          <Link to="/income" className="hover:text-gray-300 transition duration-200">Income</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;